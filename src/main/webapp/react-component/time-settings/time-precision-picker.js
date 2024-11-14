import { __assign, __read } from "tslib";
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
import * as React from 'react';
import { hot } from 'react-hot-loader';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
var Options = [
    {
        label: 'Milliseconds',
        value: 'millisecond',
    },
    {
        label: 'Seconds',
        value: 'second',
    },
    {
        label: 'Minutes',
        value: 'minute',
    },
];
var TimePrecisionSelector = function (props) {
    var initState = Options.find(function (option) { return option.value === props.timePrecision; });
    var _a = __read(React.useState(initState), 2), timePrecision = _a[0], setTimePrecision = _a[1];
    return (React.createElement("div", null,
        React.createElement(Autocomplete, { id: "time-precision-picker", disableClearable: true, autoComplete: true, size: 'small', onChange: function (_event, newPrecision) {
                props.handleTimePrecisionUpdate(newPrecision.value);
                setTimePrecision(newPrecision);
            }, isOptionEqualToValue: function (option, value) {
                return option.value === value.value;
            }, options: Options, getOptionLabel: function (option) { return option.label; }, style: { width: '100%', paddingTop: '2em' }, renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { label: "Time Precision", variant: "outlined" }))); }, value: timePrecision })));
};
export default hot(module)(TimePrecisionSelector);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1wcmVjaXNpb24tcGlja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC90aW1lLXNldHRpbmdzL3RpbWUtcHJlY2lzaW9uLXBpY2tlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxZQUFZLE1BQU0sNEJBQTRCLENBQUE7QUFDckQsT0FBTyxTQUFTLE1BQU0seUJBQXlCLENBQUE7QUFhL0MsSUFBTSxPQUFPLEdBQUc7SUFDZDtRQUNFLEtBQUssRUFBRSxjQUFjO1FBQ3JCLEtBQUssRUFBRSxhQUFhO0tBQ3JCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsU0FBUztRQUNoQixLQUFLLEVBQUUsUUFBUTtLQUNoQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLFNBQVM7UUFDaEIsS0FBSyxFQUFFLFFBQVE7S0FDaEI7Q0FDbUIsQ0FBQTtBQUV0QixJQUFNLHFCQUFxQixHQUFHLFVBQUMsS0FBWTtJQUN6QyxJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUM1QixVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLGFBQWEsRUFBcEMsQ0FBb0MsQ0FDakQsQ0FBQTtJQUVLLElBQUEsS0FBQSxPQUFvQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFBLEVBQTVELGFBQWEsUUFBQSxFQUFFLGdCQUFnQixRQUE2QixDQUFBO0lBRW5FLE9BQU8sQ0FDTDtRQUNFLG9CQUFDLFlBQVksSUFDWCxFQUFFLEVBQUMsdUJBQXVCLEVBQzFCLGdCQUFnQixFQUFFLElBQUksRUFDdEIsWUFBWSxFQUFFLElBQUksRUFDbEIsSUFBSSxFQUFFLE9BQU8sRUFDYixRQUFRLEVBQUUsVUFBQyxNQUFXLEVBQUUsWUFBNkI7Z0JBQ25ELEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ25ELGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ2hDLENBQUMsRUFDRCxvQkFBb0IsRUFBRSxVQUFDLE1BQU0sRUFBRSxLQUFLO2dCQUNsQyxPQUFPLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQTtZQUNyQyxDQUFDLEVBQ0QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsY0FBYyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssRUFBWixDQUFZLEVBQ3hDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxFQUMzQyxXQUFXLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxDQUN2QixvQkFBQyxTQUFTLGVBQUssTUFBTSxJQUFFLEtBQUssRUFBQyxnQkFBZ0IsRUFBQyxPQUFPLEVBQUMsVUFBVSxJQUFHLENBQ3BFLEVBRndCLENBRXhCLEVBQ0QsS0FBSyxFQUFFLGFBQWEsR0FDcEIsQ0FDRSxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQXV0b2NvbXBsZXRlJ1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCdcbmltcG9ydCB7IFRpbWVQcmVjaXNpb24gfSBmcm9tICdAYmx1ZXByaW50anMvZGF0ZXRpbWUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRpbWVQcmVjaXNpb246IFRpbWVQcmVjaXNpb25cbiAgaGFuZGxlVGltZVByZWNpc2lvblVwZGF0ZTogKHRpbWVQcmVjaXNpb246IFRpbWVQcmVjaXNpb24pID0+IGFueVxufVxuXG50eXBlIFByZWNpc2lvbk9wdGlvbiA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICB2YWx1ZTogVGltZVByZWNpc2lvblxufVxuXG5jb25zdCBPcHRpb25zID0gW1xuICB7XG4gICAgbGFiZWw6ICdNaWxsaXNlY29uZHMnLFxuICAgIHZhbHVlOiAnbWlsbGlzZWNvbmQnLFxuICB9LFxuICB7XG4gICAgbGFiZWw6ICdTZWNvbmRzJyxcbiAgICB2YWx1ZTogJ3NlY29uZCcsXG4gIH0sXG4gIHtcbiAgICBsYWJlbDogJ01pbnV0ZXMnLFxuICAgIHZhbHVlOiAnbWludXRlJyxcbiAgfSxcbl0gYXMgUHJlY2lzaW9uT3B0aW9uW11cblxuY29uc3QgVGltZVByZWNpc2lvblNlbGVjdG9yID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCBpbml0U3RhdGUgPSBPcHRpb25zLmZpbmQoXG4gICAgKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSBwcm9wcy50aW1lUHJlY2lzaW9uXG4gIClcblxuICBjb25zdCBbdGltZVByZWNpc2lvbiwgc2V0VGltZVByZWNpc2lvbl0gPSBSZWFjdC51c2VTdGF0ZShpbml0U3RhdGUpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEF1dG9jb21wbGV0ZVxuICAgICAgICBpZD1cInRpbWUtcHJlY2lzaW9uLXBpY2tlclwiXG4gICAgICAgIGRpc2FibGVDbGVhcmFibGU9e3RydWV9XG4gICAgICAgIGF1dG9Db21wbGV0ZT17dHJ1ZX1cbiAgICAgICAgc2l6ZT17J3NtYWxsJ31cbiAgICAgICAgb25DaGFuZ2U9eyhfZXZlbnQ6IGFueSwgbmV3UHJlY2lzaW9uOiBQcmVjaXNpb25PcHRpb24pID0+IHtcbiAgICAgICAgICBwcm9wcy5oYW5kbGVUaW1lUHJlY2lzaW9uVXBkYXRlKG5ld1ByZWNpc2lvbi52YWx1ZSlcbiAgICAgICAgICBzZXRUaW1lUHJlY2lzaW9uKG5ld1ByZWNpc2lvbilcbiAgICAgICAgfX1cbiAgICAgICAgaXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvcHRpb24sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSA9PT0gdmFsdWUudmFsdWVcbiAgICAgICAgfX1cbiAgICAgICAgb3B0aW9ucz17T3B0aW9uc31cbiAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi5sYWJlbH1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZ1RvcDogJzJlbScgfX1cbiAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IGxhYmVsPVwiVGltZSBQcmVjaXNpb25cIiB2YXJpYW50PVwib3V0bGluZWRcIiAvPlxuICAgICAgICApfVxuICAgICAgICB2YWx1ZT17dGltZVByZWNpc2lvbn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoVGltZVByZWNpc2lvblNlbGVjdG9yKVxuIl19