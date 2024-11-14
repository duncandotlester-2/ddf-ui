/**
 * Copyright (c) Codice Foundation
 *
 * This is free software: you can redistribute it and/or modify it under the terms of the GNU Lesser
 * General Public License as published by the Free Software Foundation, either version 3 of the
 * License, or any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
 * even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details. A copy of the GNU Lesser General Public License
 * is distributed along with this program and can be found at
 * <http://www.gnu.org/licenses/lgpl.html>.
 *
 **/
import React from 'react';
import DistanceUtils from '../../../../js/DistanceUtils';
import ol from 'openlayers';
import _ from 'underscore';
import * as Turf from '@turf/turf';
import { validateGeo } from '../../../../react-component/utils/validation';
import { useListenTo } from '../../../selection-checkbox/useBackbone.hook';
import { removeOldDrawing } from './drawing-and-display';
import ShapeUtils from '../../../../js/ShapeUtils';
import { getIdFromModelForDisplay } from '../drawing-and-display';
import { StartupDataStore } from '../../../../js/model/Startup/startup';
import { contrastingColor } from '../../../../react-component/location/location-color-selector';
export var translateFromOpenlayersCoordinates = function (coords) {
    return coords
        .map(function (value) {
        return value.map(function (point) {
            var mappedPoint = ol.proj.transform([
                DistanceUtils.coordinateRound(point[0]),
                DistanceUtils.coordinateRound(point[1]),
            ], StartupDataStore.Configuration.getProjection(), 'EPSG:4326');
            if (mappedPoint[1] > 90) {
                mappedPoint[1] = 89.9;
            }
            else if (mappedPoint[1] < -90) {
                mappedPoint[1] = -89.9;
            }
            return mappedPoint;
        });
    })
        .flatten();
};
var coordsToLineString = function (rawCoords) {
    var setArr = _.uniq(rawCoords);
    if (setArr.length < 3) {
        return;
    }
    var coords = setArr.map(function (item) {
        return ol.proj.transform([item[0], item[1]], 'EPSG:4326', StartupDataStore.Configuration.getProjection());
    });
    // Ensure that the first and last coordinate are the same
    if (!_.isEqual(coords[0], coords[coords.length - 1])) {
        coords.push(coords[0]);
    }
    return [coords];
};
var modelToPolygon = function (model) {
    var _a;
    var coords = model.get('polygon');
    if (coords && coords.length === 0) {
        return new ol.geom.MultiPolygon([]);
    }
    if (coords &&
        coords.length > 0 &&
        coords[0].toString() !== coords[coords.length - 1].toString()) {
        coords.push(coords[0]);
    }
    if (coords === undefined ||
        ((_a = validateGeo('polygon', JSON.stringify(coords))) === null || _a === void 0 ? void 0 : _a.error)) {
        return;
    }
    var isMultiPolygon = ShapeUtils.isArray3D(coords);
    var multiPolygon = isMultiPolygon ? coords : [coords];
    var polygons = [];
    multiPolygon.forEach(function (polygon) {
        var lineString = coordsToLineString(polygon);
        if (lineString) {
            polygons.push(lineString);
        }
    });
    return new ol.geom.MultiPolygon(polygons);
};
var adjustPolygonPoints = function (polygon) {
    var extent = polygon.getExtent();
    var lon1 = extent[0];
    var lon2 = extent[2];
    var width = Math.abs(lon1 - lon2);
    if (width > 180) {
        var adjusted = polygon.getCoordinates();
        adjusted.forEach(function (ring) {
            ring.forEach(function (coord) {
                if (coord[0] < 0) {
                    coord[0] += 360;
                }
            });
        });
        polygon.setCoordinates(adjusted);
    }
};
var adjustMultiPolygonPoints = function (polygons) {
    var adjusted = [];
    polygons.getPolygons().forEach(function (polygon) {
        adjustPolygonPoints(polygon);
        adjusted.push(polygon.getCoordinates());
    });
    polygons.setCoordinates(adjusted);
};
export var drawPolygon = function (_a) {
    var map = _a.map, model = _a.model, polygon = _a.polygon, id = _a.id, isInteractive = _a.isInteractive, translation = _a.translation;
    if (!polygon) {
        // Handles case where model changes to empty vars and we don't want to draw anymore
        return;
    }
    if (translation) {
        polygon.translate(translation.longitude, translation.latitude);
    }
    adjustMultiPolygonPoints(polygon);
    var coordinates = polygon.getCoordinates();
    var bufferWidth = DistanceUtils.getDistanceInMeters(model.get('polygonBufferWidth'), model.get('polygonBufferUnits')) || 1;
    var drawnPolygonSegments = coordinates.map(function (set) {
        return Turf.multiLineString([translateFromOpenlayersCoordinates(set)])
            .geometry.coordinates;
    });
    var bufferPolygonSegments = coordinates.map(function (set) {
        var _a;
        var polySegment = Turf.multiLineString([
            translateFromOpenlayersCoordinates(set),
        ]);
        var bufferedSegment = Turf.buffer(polySegment, bufferWidth, {
            units: 'meters',
        });
        var extent = Turf.bbox(bufferedSegment);
        var width = Math.abs(extent[0] - extent[2]);
        // need to adjust the points again AFTER buffering, since buffering undoes the antimeridian adjustments
        if (width > 180) {
            Turf.coordEach(bufferedSegment, function (coord) {
                if (coord[0] < 0) {
                    coord[0] += 360;
                }
            });
        }
        var bufferPolygons = bufferedSegment.geometry.coordinates.map(function (set) {
            return Turf.polygon([set]);
        });
        return (_a = bufferPolygons.reduce(function (a, b) { return Turf.union(a, b); }, bufferPolygons[0])) === null || _a === void 0 ? void 0 : _a.geometry.coordinates;
    });
    var bufferGeometryRepresentation = new ol.geom.MultiPolygon(bufferPolygonSegments);
    var drawnGeometryRepresentation = new ol.geom.MultiPolygon(drawnPolygonSegments);
    var billboard = new ol.Feature({
        geometry: bufferGeometryRepresentation,
    });
    billboard.setId(id);
    billboard.set('locationId', model.get('locationId'));
    var drawnPolygonFeature = new ol.Feature({
        geometry: drawnGeometryRepresentation,
    });
    var color = model.get('color');
    var bufferPolygonIconStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: isInteractive ? contrastingColor : color ? color : '#914500',
            width: isInteractive ? 6 : 4,
        }),
        zIndex: 1,
    });
    var drawnPolygonIconStyle = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: isInteractive ? contrastingColor : color ? color : '#914500',
            width: isInteractive ? 5 : 3,
            lineDash: [10, 5],
        }),
        zIndex: 0,
    });
    billboard.setStyle(bufferPolygonIconStyle);
    drawnPolygonFeature.setStyle(drawnPolygonIconStyle);
    var vectorSource = new ol.source.Vector({
        features: [billboard, drawnPolygonFeature],
    });
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
    });
    var mapRef = map.getMap();
    removeOldDrawing({ map: mapRef, id: id });
    vectorLayer.set('id', id);
    mapRef.addLayer(vectorLayer);
};
var updatePrimitive = function (_a) {
    var map = _a.map, model = _a.model, id = _a.id, isInteractive = _a.isInteractive, translation = _a.translation;
    var polygon = modelToPolygon(model);
    if (polygon !== undefined) {
        drawPolygon({ map: map, model: model, polygon: polygon, id: id, isInteractive: isInteractive, translation: translation });
    }
};
var useListenToPolygonModel = function (_a) {
    var model = _a.model, map = _a.map, isInteractive = _a.isInteractive, translation = _a.translation;
    var callback = React.useMemo(function () {
        return function () {
            if (model && map) {
                updatePrimitive({
                    map: map,
                    model: model,
                    id: getIdFromModelForDisplay({ model: model }),
                    isInteractive: isInteractive,
                    translation: translation,
                });
            }
        };
    }, [model, map, isInteractive, translation]);
    useListenTo(model, 'change:polygon change:polygonBufferWidth change:polygonBufferUnits', callback);
    callback();
};
export var OpenlayersPolygonDisplay = function (_a) {
    var map = _a.map, model = _a.model, isInteractive = _a.isInteractive, translation = _a.translation;
    useListenToPolygonModel({ map: map, model: model, isInteractive: isInteractive, translation: translation });
    React.useEffect(function () {
        return function () {
            if (map && model) {
                removeOldDrawing({
                    map: map.getMap(),
                    id: getIdFromModelForDisplay({ model: model }),
                });
            }
        };
    }, [map, model]);
    return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seWdvbi1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudC92aXN1YWxpemF0aW9uL21hcHMvb3BlbmxheWVycy9wb2x5Z29uLWRpc3BsYXkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxhQUFhLE1BQU0sOEJBQThCLENBQUE7QUFDeEQsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFBO0FBQzNCLE9BQU8sQ0FBQyxNQUFNLFlBQVksQ0FBQTtBQUMxQixPQUFPLEtBQUssSUFBSSxNQUFNLFlBQVksQ0FBQTtBQUNsQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDMUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhDQUE4QyxDQUFBO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFBO0FBQ3hELE9BQU8sVUFBVSxNQUFNLDJCQUEyQixDQUFBO0FBQ2xELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdCQUF3QixDQUFBO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFBO0FBRXZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhEQUE4RCxDQUFBO0FBQy9GLE1BQU0sQ0FBQyxJQUFNLGtDQUFrQyxHQUFHLFVBQUMsTUFBVztJQUM1RCxPQUFPLE1BQU07U0FDVixHQUFHLENBQUMsVUFBQyxLQUFVO1FBQ2QsT0FBQSxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUMsS0FBVTtZQUNuQixJQUFNLFdBQVcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDbkM7Z0JBQ0UsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENB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RUFBRTtnQkFDaEIsZ0JBQWdCLENBQUM7b0JBQ2YsR0FBRyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUU7b0JBQ2pCLEVBQUUsRUFBRSx3QkFBd0IsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUM7aUJBQ3hDLENBQUMsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDaEIsT0FBTyx5Q0FBSyxDQUFBO0FBQ2QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRGlzdGFuY2VVdGlscyBmcm9tICcuLi8uLi8uLi8uLi9qcy9EaXN0YW5jZVV0aWxzJ1xuaW1wb3J0IG9sIGZyb20gJ29wZW5sYXllcnMnXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJ1xuaW1wb3J0ICogYXMgVHVyZiBmcm9tICdAdHVyZi90dXJmJ1xuaW1wb3J0IHsgdmFsaWRhdGVHZW8gfSBmcm9tICcuLi8uLi8uLi8uLi9yZWFjdC1jb21wb25lbnQvdXRpbHMvdmFsaWRhdGlvbidcbmltcG9ydCB7IHVzZUxpc3RlblRvIH0gZnJvbSAnLi4vLi4vLi4vc2VsZWN0aW9uLWNoZWNrYm94L3VzZUJhY2tib25lLmhvb2snXG5pbXBvcnQgeyByZW1vdmVPbGREcmF3aW5nIH0gZnJvbSAnLi9kcmF3aW5nLWFuZC1kaXNwbGF5J1xuaW1wb3J0IFNoYXBlVXRpbHMgZnJvbSAnLi4vLi4vLi4vLi4vanMvU2hhcGVVdGlscydcbmltcG9ydCB7IGdldElkRnJvbU1vZGVsRm9yRGlzcGxheSB9IGZyb20gJy4uL2RyYXdpbmctYW5kLWRpc3BsYXknXG5pbXBvcnQgeyBTdGFydHVwRGF0YVN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vLi4vanMvbW9kZWwvU3RhcnR1cC9zdGFydHVwJ1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pbnRlcmFjdGlvbnMucHJvdmlkZXInXG5pbXBvcnQgeyBjb250cmFzdGluZ0NvbG9yIH0gZnJvbSAnLi4vLi4vLi4vLi4vcmVhY3QtY29tcG9uZW50L2xvY2F0aW9uL2xvY2F0aW9uLWNvbG9yLXNlbGVjdG9yJ1xuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZUZyb21PcGVubGF5ZXJzQ29vcmRpbmF0ZXMgPSAoY29vcmRzOiBhbnkpID0+IHtcbiAgcmV0dXJuIGNvb3Jkc1xuICAgIC5tYXAoKHZhbHVlOiBhbnkpID0+XG4gICAgICB2YWx1ZS5tYXAoKHBvaW50OiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbWFwcGVkUG9pbnQgPSBvbC5wcm9qLnRyYW5zZm9ybShcbiAgICAgICAgICBbXG4gICAgICAgICAgICBEaXN0YW5jZVV0aWxzLmNvb3JkaW5hdGVSb3VuZChwb2ludFswXSksXG4gICAgICAgICAgICBEaXN0YW5jZVV0aWxzLmNvb3JkaW5hdGVSb3VuZChwb2ludFsxXSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBTdGFydHVwRGF0YVN0b3JlLkNvbmZpZ3VyYXRpb24uZ2V0UHJvamVjdGlvbigpLFxuICAgICAgICAgICdFUFNHOjQzMjYnXG4gICAgICAgIClcbiAgICAgICAgaWYgKG1hcHBlZFBvaW50WzFdID4gOTApIHtcbiAgICAgICAgICBtYXBwZWRQb2ludFsxXSA9IDg5LjlcbiAgICAgICAgfSBlbHNlIGlmIChtYXBwZWRQb2ludFsxXSA8IC05MCkge1xuICAgICAgICAgIG1hcHBlZFBvaW50WzFdID0gLTg5LjlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWFwcGVkUG9pbnRcbiAgICAgIH0pXG4gICAgKVxuICAgIC5mbGF0dGVuKClcbn1cbmNvbnN0IGNvb3Jkc1RvTGluZVN0cmluZyA9IChyYXdDb29yZHM6IGFueSkgPT4ge1xuICBjb25zdCBzZXRBcnIgPSBfLnVuaXEocmF3Q29vcmRzKVxuICBpZiAoc2V0QXJyLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBjb29yZHMgPSBzZXRBcnIubWFwKChpdGVtOiBhbnkpID0+XG4gICAgb2wucHJvai50cmFuc2Zvcm0oXG4gICAgICBbaXRlbVswXSwgaXRlbVsxXV0sXG4gICAgICAnRVBTRzo0MzI2JyxcbiAgICAgIFN0YXJ0dXBEYXRhU3RvcmUuQ29uZmlndXJhdGlvbi5nZXRQcm9qZWN0aW9uKClcbiAgICApXG4gIClcbiAgLy8gRW5zdXJlIHRoYXQgdGhlIGZpcnN0IGFuZCBsYXN0IGNvb3JkaW5hdGUgYXJlIHRoZSBzYW1lXG4gIGlmICghXy5pc0VxdWFsKGNvb3Jkc1swXSwgY29vcmRzW2Nvb3Jkcy5sZW5ndGggLSAxXSkpIHtcbiAgICBjb29yZHMucHVzaChjb29yZHNbMF0pXG4gIH1cbiAgcmV0dXJuIFtjb29yZHNdXG59XG5jb25zdCBtb2RlbFRvUG9seWdvbiA9IChtb2RlbDogYW55KSA9PiB7XG4gIGNvbnN0IGNvb3JkcyA9IG1vZGVsLmdldCgncG9seWdvbicpXG5cbiAgaWYgKGNvb3JkcyAmJiBjb29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5ldyBvbC5nZW9tLk11bHRpUG9seWdvbihbXSlcbiAgfVxuXG4gIGlmIChcbiAgICBjb29yZHMgJiZcbiAgICBjb29yZHMubGVuZ3RoID4gMCAmJlxuICAgIGNvb3Jkc1swXS50b1N0cmluZygpICE9PSBjb29yZHNbY29vcmRzLmxlbmd0aCAtIDFdLnRvU3RyaW5nKClcbiAgKSB7XG4gICAgY29vcmRzLnB1c2goY29vcmRzWzBdKVxuICB9XG5cbiAgaWYgKFxuICAgIGNvb3JkcyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgdmFsaWRhdGVHZW8oJ3BvbHlnb24nLCBKU09OLnN0cmluZ2lmeShjb29yZHMpKT8uZXJyb3JcbiAgKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgY29uc3QgaXNNdWx0aVBvbHlnb24gPSBTaGFwZVV0aWxzLmlzQXJyYXkzRChjb29yZHMpXG4gIGNvbnN0IG11bHRpUG9seWdvbiA9IGlzTXVsdGlQb2x5Z29uID8gY29vcmRzIDogW2Nvb3Jkc11cbiAgY29uc3QgcG9seWdvbnM6IG9sLkNvb3JkaW5hdGVbXVtdW10gPSBbXVxuICBtdWx0aVBvbHlnb24uZm9yRWFjaCgocG9seWdvbjogYW55KSA9PiB7XG4gICAgY29uc3QgbGluZVN0cmluZyA9IGNvb3Jkc1RvTGluZVN0cmluZyhwb2x5Z29uKVxuICAgIGlmIChsaW5lU3RyaW5nKSB7XG4gICAgICBwb2x5Z29ucy5wdXNoKGxpbmVTdHJpbmcpXG4gICAgfVxuICB9KVxuICByZXR1cm4gbmV3IG9sLmdlb20uTXVsdGlQb2x5Z29uKHBvbHlnb25zKVxufVxuY29uc3QgYWRqdXN0UG9seWdvblBvaW50cyA9IChwb2x5Z29uOiBvbC5nZW9tLlBvbHlnb24pID0+IHtcbiAgY29uc3QgZXh0ZW50ID0gcG9seWdvbi5nZXRFeHRlbnQoKVxuICBjb25zdCBsb24xID0gZXh0ZW50WzBdXG4gIGNvbnN0IGxvbjIgPSBleHRlbnRbMl1cbiAgY29uc3Qgd2lkdGggPSBNYXRoLmFicyhsb24xIC0gbG9uMilcbiAgaWYgKHdpZHRoID4gMTgwKSB7XG4gICAgY29uc3QgYWRqdXN0ZWQgPSBwb2x5Z29uLmdldENvb3JkaW5hdGVzKClcbiAgICBhZGp1c3RlZC5mb3JFYWNoKChyaW5nKSA9PiB7XG4gICAgICByaW5nLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIGlmIChjb29yZFswXSA8IDApIHtcbiAgICAgICAgICBjb29yZFswXSArPSAzNjBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIHBvbHlnb24uc2V0Q29vcmRpbmF0ZXMoYWRqdXN0ZWQpXG4gIH1cbn1cbmNvbnN0IGFkanVzdE11bHRpUG9seWdvblBvaW50cyA9IChwb2x5Z29uczogb2wuZ2VvbS5NdWx0aVBvbHlnb24pID0+IHtcbiAgY29uc3QgYWRqdXN0ZWQ6IG9sLkNvb3JkaW5hdGVbXVtdW10gPSBbXVxuICBwb2x5Z29ucy5nZXRQb2x5Z29ucygpLmZvckVhY2goKHBvbHlnb24pID0+IHtcbiAgICBhZGp1c3RQb2x5Z29uUG9pbnRzKHBvbHlnb24pXG4gICAgYWRqdXN0ZWQucHVzaChwb2x5Z29uLmdldENvb3JkaW5hdGVzKCkpXG4gIH0pXG4gIHBvbHlnb25zLnNldENvb3JkaW5hdGVzKGFkanVzdGVkKVxufVxuZXhwb3J0IGNvbnN0IGRyYXdQb2x5Z29uID0gKHtcbiAgbWFwLFxuICBtb2RlbCxcbiAgcG9seWdvbixcbiAgaWQsXG4gIGlzSW50ZXJhY3RpdmUsXG4gIHRyYW5zbGF0aW9uLFxufToge1xuICBtYXA6IGFueVxuICBtb2RlbDogYW55XG4gIHBvbHlnb246IG9sLmdlb20uTXVsdGlQb2x5Z29uXG4gIGlkOiBzdHJpbmdcbiAgaXNJbnRlcmFjdGl2ZT86IGJvb2xlYW5cbiAgdHJhbnNsYXRpb24/OiBUcmFuc2xhdGlvblxufSkgPT4ge1xuICBpZiAoIXBvbHlnb24pIHtcbiAgICAvLyBIYW5kbGVzIGNhc2Ugd2hlcmUgbW9kZWwgY2hhbmdlcyB0byBlbXB0eSB2YXJzIGFuZCB3ZSBkb24ndCB3YW50IHRvIGRyYXcgYW55bW9yZVxuICAgIHJldHVyblxuICB9XG4gIGlmICh0cmFuc2xhdGlvbikge1xuICAgIHBvbHlnb24udHJhbnNsYXRlKHRyYW5zbGF0aW9uLmxvbmdpdHVkZSwgdHJhbnNsYXRpb24ubGF0aXR1ZGUpXG4gIH1cbiAgYWRqdXN0TXVsdGlQb2x5Z29uUG9pbnRzKHBvbHlnb24pXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gcG9seWdvbi5nZXRDb29yZGluYXRlcygpXG4gIGNvbnN0IGJ1ZmZlcldpZHRoID1cbiAgICBEaXN0YW5jZVV0aWxzLmdldERpc3RhbmNlSW5NZXRlcnMoXG4gICAgICBtb2RlbC5nZXQoJ3BvbHlnb25CdWZmZXJXaWR0aCcpLFxuICAgICAgbW9kZWwuZ2V0KCdwb2x5Z29uQnVmZmVyVW5pdHMnKVxuICAgICkgfHwgMVxuICBjb25zdCBkcmF3blBvbHlnb25TZWdtZW50cyA9IGNvb3JkaW5hdGVzLm1hcCgoc2V0KSA9PiB7XG4gICAgcmV0dXJuIFR1cmYubXVsdGlMaW5lU3RyaW5nKFt0cmFuc2xhdGVGcm9tT3BlbmxheWVyc0Nvb3JkaW5hdGVzKHNldCldKVxuICAgICAgLmdlb21ldHJ5LmNvb3JkaW5hdGVzXG4gIH0pXG4gIGNvbnN0IGJ1ZmZlclBvbHlnb25TZWdtZW50cyA9IGNvb3JkaW5hdGVzLm1hcCgoc2V0KSA9PiB7XG4gICAgY29uc3QgcG9seVNlZ21lbnQgPSBUdXJmLm11bHRpTGluZVN0cmluZyhbXG4gICAgICB0cmFuc2xhdGVGcm9tT3BlbmxheWVyc0Nvb3JkaW5hdGVzKHNldCksXG4gICAgXSlcbiAgICBjb25zdCBidWZmZXJlZFNlZ21lbnQgPSBUdXJmLmJ1ZmZlcihwb2x5U2VnbWVudCwgYnVmZmVyV2lkdGgsIHtcbiAgICAgIHVuaXRzOiAnbWV0ZXJzJyxcbiAgICB9KVxuICAgIGNvbnN0IGV4dGVudCA9IFR1cmYuYmJveChidWZmZXJlZFNlZ21lbnQpXG4gICAgY29uc3Qgd2lkdGggPSBNYXRoLmFicyhleHRlbnRbMF0gLSBleHRlbnRbMl0pXG4gICAgLy8gbmVlZCB0byBhZGp1c3QgdGhlIHBvaW50cyBhZ2FpbiBBRlRFUiBidWZmZXJpbmcsIHNpbmNlIGJ1ZmZlcmluZyB1bmRvZXMgdGhlIGFudGltZXJpZGlhbiBhZGp1c3RtZW50c1xuICAgIGlmICh3aWR0aCA+IDE4MCkge1xuICAgICAgVHVyZi5jb29yZEVhY2goYnVmZmVyZWRTZWdtZW50LCAoY29vcmQpID0+IHtcbiAgICAgICAgaWYgKGNvb3JkWzBdIDwgMCkge1xuICAgICAgICAgIGNvb3JkWzBdICs9IDM2MFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBidWZmZXJQb2x5Z29ucyA9IGJ1ZmZlcmVkU2VnbWVudC5nZW9tZXRyeS5jb29yZGluYXRlcy5tYXAoXG4gICAgICAoc2V0OiBhbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIFR1cmYucG9seWdvbihbc2V0XSlcbiAgICAgIH1cbiAgICApXG4gICAgcmV0dXJuIGJ1ZmZlclBvbHlnb25zLnJlZHVjZSgoYSwgYikgPT4gVHVyZi51bmlvbihhLCBiKSwgYnVmZmVyUG9seWdvbnNbMF0pXG4gICAgICA/Lmdlb21ldHJ5LmNvb3JkaW5hdGVzXG4gIH0pXG4gIGNvbnN0IGJ1ZmZlckdlb21ldHJ5UmVwcmVzZW50YXRpb24gPSBuZXcgb2wuZ2VvbS5NdWx0aVBvbHlnb24oXG4gICAgYnVmZmVyUG9seWdvblNlZ21lbnRzIGFzIGFueVxuICApXG4gIGNvbnN0IGRyYXduR2VvbWV0cnlSZXByZXNlbnRhdGlvbiA9IG5ldyBvbC5nZW9tLk11bHRpUG9seWdvbihcbiAgICBkcmF3blBvbHlnb25TZWdtZW50cyBhcyBhbnlcbiAgKVxuICBjb25zdCBiaWxsYm9hcmQgPSBuZXcgb2wuRmVhdHVyZSh7XG4gICAgZ2VvbWV0cnk6IGJ1ZmZlckdlb21ldHJ5UmVwcmVzZW50YXRpb24sXG4gIH0pXG4gIGJpbGxib2FyZC5zZXRJZChpZClcbiAgYmlsbGJvYXJkLnNldCgnbG9jYXRpb25JZCcsIG1vZGVsLmdldCgnbG9jYXRpb25JZCcpKVxuICBjb25zdCBkcmF3blBvbHlnb25GZWF0dXJlID0gbmV3IG9sLkZlYXR1cmUoe1xuICAgIGdlb21ldHJ5OiBkcmF3bkdlb21ldHJ5UmVwcmVzZW50YXRpb24sXG4gIH0pXG4gIGNvbnN0IGNvbG9yID0gbW9kZWwuZ2V0KCdjb2xvcicpXG4gIGNvbnN0IGJ1ZmZlclBvbHlnb25JY29uU3R5bGUgPSBuZXcgb2wuc3R5bGUuU3R5bGUoe1xuICAgIHN0cm9rZTogbmV3IG9sLnN0eWxlLlN0cm9rZSh7XG4gICAgICBjb2xvcjogaXNJbnRlcmFjdGl2ZSA/IGNvbnRyYXN0aW5nQ29sb3IgOiBjb2xvciA/IGNvbG9yIDogJyM5MTQ1MDAnLFxuICAgICAgd2lkdGg6IGlzSW50ZXJhY3RpdmUgPyA2IDogNCxcbiAgICB9KSxcbiAgICB6SW5kZXg6IDEsXG4gIH0pXG4gIGNvbnN0IGRyYXduUG9seWdvbkljb25TdHlsZSA9IG5ldyBvbC5zdHlsZS5TdHlsZSh7XG4gICAgc3Ryb2tlOiBuZXcgb2wuc3R5bGUuU3Ryb2tlKHtcbiAgICAgIGNvbG9yOiBpc0ludGVyYWN0aXZlID8gY29udHJhc3RpbmdDb2xvciA6IGNvbG9yID8gY29sb3IgOiAnIzkxNDUwMCcsXG4gICAgICB3aWR0aDogaXNJbnRlcmFjdGl2ZSA/IDUgOiAzLFxuICAgICAgbGluZURhc2g6IFsxMCwgNV0sXG4gICAgfSksXG4gICAgekluZGV4OiAwLFxuICB9KVxuICBiaWxsYm9hcmQuc2V0U3R5bGUoYnVmZmVyUG9seWdvbkljb25TdHlsZSlcbiAgZHJhd25Qb2x5Z29uRmVhdHVyZS5zZXRTdHlsZShkcmF3blBvbHlnb25JY29uU3R5bGUpXG4gIGNvbnN0IHZlY3RvclNvdXJjZSA9IG5ldyBvbC5zb3VyY2UuVmVjdG9yKHtcbiAgICBmZWF0dXJlczogW2JpbGxib2FyZCwgZHJhd25Qb2x5Z29uRmVhdHVyZV0sXG4gIH0pXG4gIGNvbnN0IHZlY3RvckxheWVyID0gbmV3IG9sLmxheWVyLlZlY3Rvcih7XG4gICAgc291cmNlOiB2ZWN0b3JTb3VyY2UsXG4gIH0pXG4gIGNvbnN0IG1hcFJlZiA9IG1hcC5nZXRNYXAoKSBhcyBvbC5NYXBcbiAgcmVtb3ZlT2xkRHJhd2luZyh7IG1hcDogbWFwUmVmLCBpZCB9KVxuICB2ZWN0b3JMYXllci5zZXQoJ2lkJywgaWQpXG4gIG1hcFJlZi5hZGRMYXllcih2ZWN0b3JMYXllcilcbn1cbmNvbnN0IHVwZGF0ZVByaW1pdGl2ZSA9ICh7XG4gIG1hcCxcbiAgbW9kZWwsXG4gIGlkLFxuICBpc0ludGVyYWN0aXZlLFxuICB0cmFuc2xhdGlvbixcbn06IHtcbiAgbWFwOiBhbnlcbiAgbW9kZWw6IGFueVxuICBpZDogc3RyaW5nXG4gIGlzSW50ZXJhY3RpdmU/OiBib29sZWFuXG4gIHRyYW5zbGF0aW9uPzogVHJhbnNsYXRpb25cbn0pID0+IHtcbiAgY29uc3QgcG9seWdvbiA9IG1vZGVsVG9Qb2x5Z29uKG1vZGVsKVxuICBpZiAocG9seWdvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZHJhd1BvbHlnb24oeyBtYXAsIG1vZGVsLCBwb2x5Z29uLCBpZCwgaXNJbnRlcmFjdGl2ZSwgdHJhbnNsYXRpb24gfSlcbiAgfVxufVxuY29uc3QgdXNlTGlzdGVuVG9Qb2x5Z29uTW9kZWwgPSAoe1xuICBtb2RlbCxcbiAgbWFwLFxuICBpc0ludGVyYWN0aXZlLFxuICB0cmFuc2xhdGlvbixcbn06IHtcbiAgbW9kZWw6IGFueVxuICBtYXA6IGFueVxuICBpc0ludGVyYWN0aXZlPzogYm9vbGVhblxuICB0cmFuc2xhdGlvbj86IFRyYW5zbGF0aW9uXG59KSA9PiB7XG4gIGNvbnN0IGNhbGxiYWNrID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmIChtb2RlbCAmJiBtYXApIHtcbiAgICAgICAgdXBkYXRlUHJpbWl0aXZlKHtcbiAgICAgICAgICBtYXAsXG4gICAgICAgICAgbW9kZWwsXG4gICAgICAgICAgaWQ6IGdldElkRnJvbU1vZGVsRm9yRGlzcGxheSh7IG1vZGVsIH0pLFxuICAgICAgICAgIGlzSW50ZXJhY3RpdmUsXG4gICAgICAgICAgdHJhbnNsYXRpb24sXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbbW9kZWwsIG1hcCwgaXNJbnRlcmFjdGl2ZSwgdHJhbnNsYXRpb25dKVxuICB1c2VMaXN0ZW5UbyhcbiAgICBtb2RlbCxcbiAgICAnY2hhbmdlOnBvbHlnb24gY2hhbmdlOnBvbHlnb25CdWZmZXJXaWR0aCBjaGFuZ2U6cG9seWdvbkJ1ZmZlclVuaXRzJyxcbiAgICBjYWxsYmFja1xuICApXG4gIGNhbGxiYWNrKClcbn1cbmV4cG9ydCBjb25zdCBPcGVubGF5ZXJzUG9seWdvbkRpc3BsYXkgPSAoe1xuICBtYXAsXG4gIG1vZGVsLFxuICBpc0ludGVyYWN0aXZlLFxuICB0cmFuc2xhdGlvbixcbn06IHtcbiAgbWFwOiBhbnlcbiAgbW9kZWw6IGFueVxuICBpc0ludGVyYWN0aXZlPzogYm9vbGVhblxuICB0cmFuc2xhdGlvbj86IFRyYW5zbGF0aW9uXG59KSA9PiB7XG4gIHVzZUxpc3RlblRvUG9seWdvbk1vZGVsKHsgbWFwLCBtb2RlbCwgaXNJbnRlcmFjdGl2ZSwgdHJhbnNsYXRpb24gfSlcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKG1hcCAmJiBtb2RlbCkge1xuICAgICAgICByZW1vdmVPbGREcmF3aW5nKHtcbiAgICAgICAgICBtYXA6IG1hcC5nZXRNYXAoKSxcbiAgICAgICAgICBpZDogZ2V0SWRGcm9tTW9kZWxGb3JEaXNwbGF5KHsgbW9kZWwgfSksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbbWFwLCBtb2RlbF0pXG4gIHJldHVybiA8PjwvPlxufVxuIl19