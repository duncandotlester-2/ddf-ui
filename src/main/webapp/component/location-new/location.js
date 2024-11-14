import { __assign } from "tslib";
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
import { validateWkt, validateDd, validateDms, validateUsng } from './utils';
import { Radio, RadioItem } from '../../react-component/radio/radio';
import { WKT, LatLongDD, LatLongDMS, USNG } from './geo-components';
import Gazetteer from '../../react-component/location/gazetteer';
import CQLUtils from '../../js/CQLUtils';
import immer from 'immer.1.5.0';
var produce = immer;
import { hot } from 'react-hot-loader';
var inputs = {
    wkt: {
        label: 'WKT',
        Component: WKT,
    },
    dd: {
        label: 'Lat/Lon (DD)',
        Component: LatLongDD,
    },
    dms: {
        label: 'Lat/Lon (DMS)',
        Component: LatLongDMS,
    },
    usng: {
        label: 'USNG/MGRS',
        Component: USNG,
    },
    keyword: {
        label: 'Keyword',
        Component: function (props) {
            var keyword = props.keyword;
            return (React.createElement(Gazetteer, { placeholder: 'Enter a location', value: keyword ? keyword.keywordValue : '', setState: props.setState(function (draft, value) {
                    value.type =
                        value.polyType.toLowerCase() === 'polygon'
                            ? 'POLYGON'
                            : 'MULTIPOLYGON';
                    value.keywordValue = value.value;
                    value.mode = 'keyword';
                    value.wkt = CQLUtils.generateFilter(undefined, 'location', value, undefined).value;
                    draft.keyword = value;
                    // onFieldEdit(field.id, location)
                }) }));
        },
    },
};
var validate = function (_a) {
    var state = _a.state, setState = _a.setState;
    var mode = state.mode;
    var validationReport;
    switch (mode) {
        case 'wkt':
            validationReport = validateWkt(state[mode]);
            break;
        case 'dd':
            validationReport = validateDd(state[mode]);
            break;
        case 'dms':
            validationReport = validateDms(state[mode]);
            break;
        case 'usng':
            validationReport = validateUsng(state[mode]);
            break;
    }
    setState(__assign(__assign({}, state), { valid: validationReport ? validationReport.valid : true, error: validationReport ? validationReport.error : false }));
};
var LocationInput = function (props) {
    var mode = props.mode, valid = props.valid, error = props.error, showErrors = props.showErrors, setState = props.setState;
    var input = inputs[mode] || {};
    var _a = input.Component, Component = _a === void 0 ? null : _a;
    React.useEffect(function () {
        validate({
            state: props,
            setState: props.setState(function (draft, value) {
                draft.valid = value.valid;
                draft.error = value.error;
                return draft;
            }),
        });
    }, [props]);
    return (React.createElement("div", null,
        React.createElement(Radio, { value: mode, onChange: setState(function (draft, value) { return (draft.mode = value); }) }, Object.keys(inputs).map(function (key) { return (React.createElement(RadioItem, { key: key, value: key }, inputs[key].label)); })),
        React.createElement("div", { className: "form-group flow-root mt-2" },
            Component !== null ? React.createElement(Component, __assign({}, props)) : null,
            React.createElement("div", { className: "for-error whitespace-pre-line ".concat(!valid && showErrors ? '' : 'invisible'), style: {
                    width: '400px',
                    maxWidth: '100%',
                } },
                React.createElement("span", { className: "fa fa-exclamation-triangle" }),
                " ",
                error))));
};
export default hot(module)(function (_a) {
    var state = _a.state, setState = _a.setState;
    return (React.createElement(LocationInput, __assign({}, state, { setState: function (producer) { return function (value) {
            var nextState = produce(state, function (draft) {
                producer(draft, value);
            });
            setState(nextState);
        }; } })));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50L2xvY2F0aW9uLW5ldy9sb2NhdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDekIsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLFNBQVMsQ0FBQTtBQUM1RSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQ3BFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUNuRSxPQUFPLFNBQVMsTUFBTSwwQ0FBMEMsQ0FBQTtBQUNoRSxPQUFPLFFBQVEsTUFBTSxtQkFBbUIsQ0FBQTtBQUN4QyxPQUFPLEtBQUssTUFBTSxhQUFhLENBQUE7QUFDL0IsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFBO0FBQ3JCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV0QyxJQUFNLE1BQU0sR0FBRztJQUNiLEdBQUcsRUFBRTtRQUNILEtBQUssRUFBRSxLQUFLO1FBQ1osU0FBUyxFQUFFLEdBQUc7S0FDZjtJQUNELEVBQUUsRUFBRTtRQUNGLEtBQUssRUFBRSxjQUFjO1FBQ3JCLFNBQVMsRUFBRSxTQUFTO0tBQ3JCO0lBQ0QsR0FBRyxFQUFFO1FBQ0gsS0FBSyxFQUFFLGVBQWU7UUFDdEIsU0FBUyxFQUFFLFVBQVU7S0FDdEI7SUFDRCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsV0FBVztRQUNsQixTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQLEtBQUssRUFBRSxTQUFTO1FBQ2hCLFNBQVMsRUFBRSxVQUFD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dkQsb0JBQUMsYUFBYSxlQUNSLEtBQUssSUFDVCxRQUFRLEVBQUUsVUFBQyxRQUFhLElBQUssT0FBQSxVQUFDLEtBQVU7WUFDdEMsSUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFDLEtBQVU7Z0JBQzFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUE7WUFDRixRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDckIsQ0FBQyxFQUw0QixDQUs1QixJQUNELENBQ0g7QUFWd0QsQ0FVeEQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB2YWxpZGF0ZVdrdCwgdmFsaWRhdGVEZCwgdmFsaWRhdGVEbXMsIHZhbGlkYXRlVXNuZyB9IGZyb20gJy4vdXRpbHMnXG5pbXBvcnQgeyBSYWRpbywgUmFkaW9JdGVtIH0gZnJvbSAnLi4vLi4vcmVhY3QtY29tcG9uZW50L3JhZGlvL3JhZGlvJ1xuaW1wb3J0IHsgV0tULCBMYXRMb25nREQsIExhdExvbmdETVMsIFVTTkcgfSBmcm9tICcuL2dlby1jb21wb25lbnRzJ1xuaW1wb3J0IEdhemV0dGVlciBmcm9tICcuLi8uLi9yZWFjdC1jb21wb25lbnQvbG9jYXRpb24vZ2F6ZXR0ZWVyJ1xuaW1wb3J0IENRTFV0aWxzIGZyb20gJy4uLy4uL2pzL0NRTFV0aWxzJ1xuaW1wb3J0IGltbWVyIGZyb20gJ2ltbWVyLjEuNS4wJ1xuY29uc3QgcHJvZHVjZSA9IGltbWVyXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuXG5jb25zdCBpbnB1dHMgPSB7XG4gIHdrdDoge1xuICAgIGxhYmVsOiAnV0tUJyxcbiAgICBDb21wb25lbnQ6IFdLVCxcbiAgfSxcbiAgZGQ6IHtcbiAgICBsYWJlbDogJ0xhdC9Mb24gKEREKScsXG4gICAgQ29tcG9uZW50OiBMYXRMb25nREQsXG4gIH0sXG4gIGRtczoge1xuICAgIGxhYmVsOiAnTGF0L0xvbiAoRE1TKScsXG4gICAgQ29tcG9uZW50OiBMYXRMb25nRE1TLFxuICB9LFxuICB1c25nOiB7XG4gICAgbGFiZWw6ICdVU05HL01HUlMnLFxuICAgIENvbXBvbmVudDogVVNORyxcbiAgfSxcbiAga2V5d29yZDoge1xuICAgIGxhYmVsOiAnS2V5d29yZCcsXG4gICAgQ29tcG9uZW50OiAocHJvcHM6IExvY2F0aW9uSW5wdXRQcm9wc1R5cGUpID0+IHtcbiAgICAgIGNvbnN0IHsga2V5d29yZCB9ID0gcHJvcHNcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxHYXpldHRlZXJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17J0VudGVyIGEgbG9jYXRpb24nfVxuICAgICAgICAgIHZhbHVlPXtrZXl3b3JkID8ga2V5d29yZC5rZXl3b3JkVmFsdWUgOiAnJ31cbiAgICAgICAgICBzZXRTdGF0ZT17cHJvcHMuc2V0U3RhdGUoXG4gICAgICAgICAgICAoZHJhZnQ6IExvY2F0aW9uSW5wdXRQcm9wc1R5cGUsIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgdmFsdWUudHlwZSA9XG4gICAgICAgICAgICAgICAgdmFsdWUucG9seVR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BvbHlnb24nXG4gICAgICAgICAgICAgICAgICA/ICdQT0xZR09OJ1xuICAgICAgICAgICAgICAgICAgOiAnTVVMVElQT0xZR09OJ1xuICAgICAgICAgICAgICB2YWx1ZS5rZXl3b3JkVmFsdWUgPSB2YWx1ZS52YWx1ZVxuICAgICAgICAgICAgICB2YWx1ZS5tb2RlID0gJ2tleXdvcmQnXG5cbiAgICAgICAgICAgICAgdmFsdWUud2t0ID0gQ1FMVXRpbHMuZ2VuZXJhdGVGaWx0ZXIoXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICdsb2NhdGlvbicsXG4gICAgICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICkudmFsdWVcbiAgICAgICAgICAgICAgZHJhZnQua2V5d29yZCA9IHZhbHVlXG4gICAgICAgICAgICAgIC8vIG9uRmllbGRFZGl0KGZpZWxkLmlkLCBsb2NhdGlvbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH0sXG4gIH0sXG59IGFzIHtcbiAgW2tleTogc3RyaW5nXToge1xuICAgIGxhYmVsOiBzdHJpbmdcbiAgICBDb21wb25lbnQ6IGFueVxuICB9XG59XG5cbmNvbnN0IHZhbGlkYXRlID0gKHtcbiAgc3RhdGUsXG4gIHNldFN0YXRlLFxufToge1xuICBzdGF0ZTogTG9jYXRpb25JbnB1dFByb3BzVHlwZVxuICBzZXRTdGF0ZTogKHN0YXRlOiBMb2NhdGlvbklucHV0UHJvcHNUeXBlKSA9PiB2b2lkXG59KSA9PiB7XG4gIGNvbnN0IG1vZGUgPSBzdGF0ZS5tb2RlXG4gIGxldCB2YWxpZGF0aW9uUmVwb3J0XG4gIHN3aXRjaCAobW9kZSkge1xuICAgIGNhc2UgJ3drdCc6XG4gICAgICB2YWxpZGF0aW9uUmVwb3J0ID0gdmFsaWRhdGVXa3Qoc3RhdGVbbW9kZV0pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RkJzpcbiAgICAgIHZhbGlkYXRpb25SZXBvcnQgPSB2YWxpZGF0ZURkKHN0YXRlW21vZGVdKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdkbXMnOlxuICAgICAgdmFsaWRhdGlvblJlcG9ydCA9IHZhbGlkYXRlRG1zKHN0YXRlW21vZGVdKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1c25nJzpcbiAgICAgIHZhbGlkYXRpb25SZXBvcnQgPSB2YWxpZGF0ZVVzbmcoc3RhdGVbbW9kZV0pXG4gICAgICBicmVha1xuICB9XG4gIHNldFN0YXRlKHtcbiAgICAuLi5zdGF0ZSxcbiAgICB2YWxpZDogdmFsaWRhdGlvblJlcG9ydCA/IHZhbGlkYXRpb25SZXBvcnQudmFsaWQgOiB0cnVlLFxuICAgIGVycm9yOiB2YWxpZGF0aW9uUmVwb3J0ID8gdmFsaWRhdGlvblJlcG9ydC5lcnJvciA6IChmYWxzZSBhcyBhbnkpLFxuICB9KVxufVxuXG5leHBvcnQgdHlwZSBMb2NhdGlvbklucHV0UHJvcHNUeXBlID0ge1xuICBkZDoge1xuICAgIGJvdW5kaW5nQm94OiB7XG4gICAgICBub3J0aDogc3RyaW5nXG4gICAgICBzb3V0aDogc3RyaW5nXG4gICAgICBlYXN0OiBzdHJpbmdcbiAgICAgIHdlc3Q6IHN0cmluZ1xuICAgIH1cbiAgICBjaXJjbGU6IHtcbiAgICAgIHBvaW50OiB7IGxhdGl0dWRlOiBzdHJpbmc7IGxvbmdpdHVkZTogc3RyaW5nIH1cbiAgICAgIHJhZGl1czogc3RyaW5nXG4gICAgICB1bml0czogJ21ldGVycydcbiAgICB9XG4gICAgbGluZToge1xuICAgICAgbGlzdDogYW55W11cbiAgICB9XG4gICAgcG9pbnQ6IHsgbGF0aXR1ZGU6IHN0cmluZzsgbG9uZ2l0dWRlOiBzdHJpbmcgfVxuICAgIHBvbHlnb246IHsgbGlzdDogYW55W10gfVxuICAgIHNoYXBlOiAncG9pbnQnXG4gIH1cbiAga2V5d29yZDogYW55XG4gIGRtczogYW55XG4gIGVycm9yOiBudWxsIHwgc3RyaW5nXG4gIG1vZGU6ICd3a3QnIHwgJ2RkJyB8ICdkbXMnIHwgJ3VzbmcnIHwgJ2tleXdvcmQnXG4gIHNldFN0YXRlOiBhbnlcbiAgc2hvd0Vycm9yczogYm9vbGVhblxuICB1c25nOiBhbnlcbiAgdmFsaWQ6IGJvb2xlYW5cbiAgd2t0OiBzdHJpbmdcbn1cblxuY29uc3QgTG9jYXRpb25JbnB1dCA9IChwcm9wczogTG9jYXRpb25JbnB1dFByb3BzVHlwZSkgPT4ge1xuICBjb25zdCB7IG1vZGUsIHZhbGlkLCBlcnJvciwgc2hvd0Vycm9ycywgc2V0U3RhdGUgfSA9IHByb3BzXG4gIGNvbnN0IGlucHV0ID0gaW5wdXRzW21vZGVdIHx8IHt9XG4gIGNvbnN0IHsgQ29tcG9uZW50ID0gbnVsbCB9ID0gaW5wdXRcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhbGlkYXRlKHtcbiAgICAgIHN0YXRlOiBwcm9wcyxcbiAgICAgIHNldFN0YXRlOiBwcm9wcy5zZXRTdGF0ZSgoZHJhZnQ6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBkcmFmdC52YWxpZCA9IHZhbHVlLnZhbGlkXG4gICAgICAgIGRyYWZ0LmVycm9yID0gdmFsdWUuZXJyb3JcbiAgICAgICAgcmV0dXJuIGRyYWZ0XG4gICAgICB9KSxcbiAgICB9KVxuICB9LCBbcHJvcHNdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSYWRpb1xuICAgICAgICB2YWx1ZT17bW9kZX1cbiAgICAgICAgb25DaGFuZ2U9e3NldFN0YXRlKChkcmFmdDogYW55LCB2YWx1ZTogYW55KSA9PiAoZHJhZnQubW9kZSA9IHZhbHVlKSl9XG4gICAgICA+XG4gICAgICAgIHtPYmplY3Qua2V5cyhpbnB1dHMpLm1hcCgoa2V5KSA9PiAoXG4gICAgICAgICAgPFJhZGlvSXRlbSBrZXk9e2tleX0gdmFsdWU9e2tleX0+XG4gICAgICAgICAgICB7aW5wdXRzW2tleV0ubGFiZWx9XG4gICAgICAgICAgPC9SYWRpb0l0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9SYWRpbz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmbG93LXJvb3QgbXQtMlwiPlxuICAgICAgICB7Q29tcG9uZW50ICE9PSBudWxsID8gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YGZvci1lcnJvciB3aGl0ZXNwYWNlLXByZS1saW5lICR7XG4gICAgICAgICAgICAhdmFsaWQgJiYgc2hvd0Vycm9ycyA/ICcnIDogJ2ludmlzaWJsZSdcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6ICc0MDBweCcsXG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIC8+IHtlcnJvcn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKSgoeyBzdGF0ZSwgc2V0U3RhdGUgfTogYW55KSA9PiAoXG4gIDxMb2NhdGlvbklucHV0XG4gICAgey4uLnN0YXRlfVxuICAgIHNldFN0YXRlPXsocHJvZHVjZXI6IGFueSkgPT4gKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHByb2R1Y2Uoc3RhdGUsIChkcmFmdDogYW55KSA9PiB7XG4gICAgICAgIHByb2R1Y2VyKGRyYWZ0LCB2YWx1ZSlcbiAgICAgIH0pXG4gICAgICBzZXRTdGF0ZShuZXh0U3RhdGUpXG4gICAgfX1cbiAgLz5cbikpXG4iXX0=