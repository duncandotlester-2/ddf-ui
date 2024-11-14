import { __assign, __read } from "tslib";
import Button from '@mui/material/Button';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import MapSettings from '../../../react-component/map-settings';
import ZoomToHomeButton from '../../../react-component/button/split-button/zoomToHome';
import Gazetteer from '../../../react-component/location/gazetteer';
import { LayersDropdown } from '../../layers/layers-dropdown';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Paper from '@mui/material/Paper';
import { Elevations } from '../../theme/theme';
var ClusteringButton = function (_a) {
    var toggleClustering = _a.toggleClustering, isClustering = _a.isClustering;
    return (React.createElement(Button, { "data-id": "cluster-button", onClick: function () {
            toggleClustering();
        }, size: "small", color: "primary" },
        React.createElement("div", { className: "flex flex-row items-center" },
            isClustering ? (React.createElement(CheckBoxIcon, { className: "Mui-text-text-primary" })) : (React.createElement(CheckBoxOutlineBlankIcon, { className: "Mui-text-text-primary" })),
            React.createElement("span", { className: "pr-2" }, "Cluster"))));
};
export var MapToolbar = function (props) {
    var _a = __read(React.useState(false), 2), expanded = _a[0], setExpanded = _a[1];
    return (React.createElement(Paper, { className: "absolute z-10 right-0 m-4 max-w-full-4 truncate", elevation: Elevations.overlays },
        React.createElement("div", { className: "flex flex-row items-center overflow-auto w-full flex-nowrap px-2" },
            React.createElement("div", { className: "py-2" }, expanded ? (React.createElement(Button, { size: "small", color: "primary", onClick: function () {
                    setExpanded(false);
                }, className: "shrink-0" },
                React.createElement(KeyboardArrowRightIcon, { color: "inherit", className: "Mui-text-text-primary Mui-icon-size-small" }),
                React.createElement(KeyboardArrowRightIcon, { color: "inherit", className: "-ml-3 Mui-text-text-primary Mui-icon-size-small" }))) : (React.createElement(Button, { size: "small", color: "primary", onClick: function () {
                    setExpanded(true);
                }, "data-id": "expand-map-tools-button" },
                React.createElement(KeyboardArrowLeftIcon, { color: "inherit", className: "Mui-text-text-primary Mui-icon-size-small" }),
                React.createElement(KeyboardArrowLeftIcon, { color: "inherit", className: "-ml-3 Mui-text-text-primary Mui-icon-size-small" }),
                "Map Tools"))),
            expanded ? (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "w-64 min-w-32 py-2 shrink-1 truncate" },
                    React.createElement(Gazetteer, { variant: "outlined", placeholder: "Go to a location", setState: function (_a) {
                            var polygon = _a.polygon;
                            return props.map.doPanZoom(polygon);
                        } })),
                React.createElement("div", { className: "py-2 pr-2 shrink-0" },
                    React.createElement(ClusteringButton, __assign({}, props))),
                React.createElement("div", { className: "Mui-bg-default w-min self-stretch shrink-0" }),
                React.createElement("div", { className: "py-2 px-2 shrink-0" },
                    React.createElement(LayersDropdown, { layers: props.mapLayers })),
                React.createElement("div", { className: "Mui-bg-default w-min self-stretch shrink-0" }),
                React.createElement("div", { className: "py-2 px-2 shrink-0" },
                    React.createElement(ZoomToHomeButton, { goHome: function () { return props.zoomToHome(); }, saveHome: function () { return props.saveAsHome(); } })),
                React.createElement("div", { className: "Mui-bg-default w-min self-stretch shrink-0" }),
                React.createElement("div", { className: "py-2 pl-2 shrink-0" },
                    React.createElement(MapSettings, null)))) : null)));
};
export default hot(module)(MapToolbar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLXRvb2xiYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50L3Zpc3VhbGl6YXRpb24vbWFwcy9tYXAtdG9vbGJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFBO0FBQ3pDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUN0QyxPQUFPLFdBQVcsTUFBTSx1Q0FBdUMsQ0FBQTtBQUMvRCxPQUFPLGdCQUFnQixNQUFNLHlEQUF5RCxDQUFBO0FBQ3RGLE9BQU8sU0FBUyxNQUFNLDZDQUE2QyxDQUFBO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUM3RCxPQUFPLFlBQVksTUFBTSw4QkFBOEIsQ0FBQTtBQUN2RCxPQUFPLHdCQUF3QixNQUFNLDBDQUEwQyxDQUFBO0FBQy9FLE9BQU8scUJBQXFCLE1BQU0sdUNBQXVDLENBQUE7QUFDekUsT0FBTyxzQkFBc0IsTUFBTSx3Q0FBd0MsQ0FBQTtBQUMzRSxPQUFPLEtBQUssTUFBTSxxQkFBcUIsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUE7QUFhOUMsSUFBTSxnQkFBZ0IsR0FBRyxVQUFDLEVBQXlDO1FBQXZDLGdCQUFnQixzQkFBQSxFQUFFLFlBQVksa0JBQUE7SUFDeEQsT0FBTyxDQUNMLG9CQUFDLE1BQU0sZUFDRyxnQkFBZ0IsRUFDeEIsT0FBTyxFQUFFO1lBQ1AsZ0JBQWdCLEVBQUUsQ0FBQTtRQUNwQixDQUFDLEVBQ0QsSUFBSSxFQUFDLE9BQU8sRUFDWixLQUFLLEVBQUMsU0FBUztRQUVmLDZCQUFLLFNBQVMsRUFBQyw0QkFBNEI7WUFDeEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUNkLG9C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QUFDLElBQUksQ0FDSixDQUNBLENBQ1QsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCBNYXBTZXR0aW5ncyBmcm9tICcuLi8uLi8uLi9yZWFjdC1jb21wb25lbnQvbWFwLXNldHRpbmdzJ1xuaW1wb3J0IFpvb21Ub0hvbWVCdXR0b24gZnJvbSAnLi4vLi4vLi4vcmVhY3QtY29tcG9uZW50L2J1dHRvbi9zcGxpdC1idXR0b24vem9vbVRvSG9tZSdcbmltcG9ydCBHYXpldHRlZXIgZnJvbSAnLi4vLi4vLi4vcmVhY3QtY29tcG9uZW50L2xvY2F0aW9uL2dhemV0dGVlcidcbmltcG9ydCB7IExheWVyc0Ryb3Bkb3duIH0gZnJvbSAnLi4vLi4vbGF5ZXJzL2xheWVycy1kcm9wZG93bidcbmltcG9ydCBDaGVja0JveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0JveCdcbmltcG9ydCBDaGVja0JveE91dGxpbmVCbGFua0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DaGVja0JveE91dGxpbmVCbGFuaydcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9LZXlib2FyZEFycm93TGVmdCdcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvS2V5Ym9hcmRBcnJvd1JpZ2h0J1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUGFwZXInXG5pbXBvcnQgeyBFbGV2YXRpb25zIH0gZnJvbSAnLi4vLi4vdGhlbWUvdGhlbWUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvZ2dsZUNsdXN0ZXJpbmc6ICgpID0+IHZvaWRcbiAgaXNDbHVzdGVyaW5nOiBib29sZWFuXG4gIHpvb21Ub0hvbWU6ICgpID0+IHZvaWRcbiAgc2F2ZUFzSG9tZTogKCkgPT4gdm9pZFxuICBtYXA6IHtcbiAgICBkb1Bhblpvb206IChwb2x5Z29uOiBhbnkpID0+IHZvaWRcbiAgfVxuICBtYXBMYXllcnM6IEFycmF5PGFueT5cbn1cblxuY29uc3QgQ2x1c3RlcmluZ0J1dHRvbiA9ICh7IHRvZ2dsZUNsdXN0ZXJpbmcsIGlzQ2x1c3RlcmluZyB9OiBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGRhdGEtaWQ9XCJjbHVzdGVyLWJ1dHRvblwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUNsdXN0ZXJpbmcoKVxuICAgICAgfX1cbiAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAge2lzQ2x1c3RlcmluZyA/IChcbiAgICAgICAgICA8Q2hlY2tCb3hJY29uIGNsYXNzTmFtZT1cIk11aS10ZXh0LXRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENoZWNrQm94T3V0bGluZUJsYW5rSWNvbiBjbGFzc05hbWU9XCJNdWktdGV4dC10ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICApfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwci0yXCI+Q2x1c3Rlcjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvQnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBjb25zdCBNYXBUb29sYmFyID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxuXG4gIHJldHVybiAoXG4gICAgPFBhcGVyXG4gICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTEwIHJpZ2h0LTAgbS00IG1heC13LWZ1bGwtNCB0cnVuY2F0ZVwiXG4gICAgICBlbGV2YXRpb249e0VsZXZhdGlvbnMub3ZlcmxheXN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1hdXRvIHctZnVsbCBmbGV4LW5vd3JhcCBweC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMlwiPlxuICAgICAgICAgIHtleHBhbmRlZCA/IChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEV4cGFuZGVkKGZhbHNlKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaHJpbmstMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHRJY29uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJNdWktdGV4dC10ZXh0LXByaW1hcnkgTXVpLWljb24tc2l6ZS1zbWFsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHRJY29uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbWwtMyBNdWktdGV4dC10ZXh0LXByaW1hcnkgTXVpLWljb24tc2l6ZS1zbWFsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0RXhwYW5kZWQodHJ1ZSlcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgZGF0YS1pZD1cImV4cGFuZC1tYXAtdG9vbHMtYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dMZWZ0SWNvblxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiTXVpLXRleHQtdGV4dC1wcmltYXJ5IE11aS1pY29uLXNpemUtc21hbGxcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0xlZnRJY29uXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbWwtMyBNdWktdGV4dC10ZXh0LXByaW1hcnkgTXVpLWljb24tc2l6ZS1zbWFsbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIE1hcCBUb29sc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtleHBhbmRlZCA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTY0IG1pbi13LTMyIHB5LTIgc2hyaW5rLTEgdHJ1bmNhdGVcIj5cbiAgICAgICAgICAgICAgPEdhemV0dGVlclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJHbyB0byBhIGxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICBzZXRTdGF0ZT17KHsgcG9seWdvbiB9OiBhbnkpID0+IHByb3BzLm1hcC5kb1Bhblpvb20ocG9seWdvbil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBwci0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxDbHVzdGVyaW5nQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNdWktYmctZGVmYXVsdCB3LW1pbiBzZWxmLXN0cmV0Y2ggc2hyaW5rLTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxMYXllcnNEcm9wZG93biBsYXllcnM9e3Byb3BzLm1hcExheWVyc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNdWktYmctZGVmYXVsdCB3LW1pbiBzZWxmLXN0cmV0Y2ggc2hyaW5rLTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBweC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxab29tVG9Ib21lQnV0dG9uXG4gICAgICAgICAgICAgICAgZ29Ib21lPXsoKSA9PiBwcm9wcy56b29tVG9Ib21lKCl9XG4gICAgICAgICAgICAgICAgc2F2ZUhvbWU9eygpID0+IHByb3BzLnNhdmVBc0hvbWUoKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNdWktYmctZGVmYXVsdCB3LW1pbiBzZWxmLXN0cmV0Y2ggc2hyaW5rLTBcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMiBwbC0yIHNocmluay0wXCI+XG4gICAgICAgICAgICAgIDxNYXBTZXR0aW5ncyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9QYXBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShNYXBUb29sYmFyKVxuIl19