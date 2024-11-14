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
import * as React from 'react';
import { hot } from 'react-hot-loader';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import SummaryManageAttributes from '../summary-manage-attributes/summary-manage-attributes';
import ProgressButton from '../progress-button';
import { DialogActions, DialogContent, LinearProgress } from '@mui/material';
import useSnack from '../../component/hooks/useSnack';
var ResultsExportComponent = function (_a) {
    var selectedFormat = _a.selectedFormat, exportFormats = _a.exportFormats, exportDisabled = _a.exportDisabled, onExportClick = _a.onExportClick, handleExportOptionChange = _a.handleExportOptionChange, exportSuccessful = _a.exportSuccessful, onClose = _a.onClose, loading = _a.loading;
    var addSnack = useSnack();
    React.useEffect(function () {
        var _a;
        handleExportOptionChange((_a = exportFormats[0]) === null || _a === void 0 ? void 0 : _a.displayName);
    }, [exportFormats]);
    if (exportSuccessful) {
        onClose();
    }
    return exportFormats.length === 0 ? (React.createElement(LinearProgress, { className: "w-full h-2" })) : (React.createElement(React.Fragment, null,
        React.createElement(DialogContent, null,
            React.createElement("div", { className: "p-4", style: { minWidth: '400px' } },
                React.createElement("div", { "data-id": "export-format-select", className: "export-option" },
                    React.createElement(Autocomplete, { key: JSON.stringify(exportFormats), "data-id": "filter-type-autocomplete", fullWidth: true, size: "small", options: exportFormats, getOptionLabel: function (option) { return option.displayName; }, isOptionEqualToValue: function (option, value) {
                            return option.displayName === value.displayName;
                        }, onChange: function (_e, newValue) {
                            handleExportOptionChange(newValue.displayName);
                        }, disableClearable: true, value: exportFormats.find(function (format) { return format.displayName === selectedFormat; }) || exportFormats[0], renderInput: function (params) { return (React.createElement(TextField, __assign({}, params, { variant: "outlined" }))); } })),
                ['CSV', 'RTF', 'XLSX'].includes(selectedFormat) ? (React.createElement(SummaryManageAttributes, { isExport: true })) : null)),
        React.createElement(DialogActions, null,
            React.createElement("div", { className: "pt-2", style: { display: 'flex', justifyContent: 'flex-end' } },
                React.createElement(Button, { className: "mr-2", disabled: loading, variant: "text", onClick: function () {
                        onClose();
                    } }, "Cancel"),
                React.createElement(ProgressButton, { variant: "contained", color: "primary", "data-id": "export-button", disabled: exportDisabled, onClick: function () {
                        onExportClick(addSnack);
                    }, loading: loading }, "Export")))));
};
export default hot(module)(ResultsExportComponent);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2VudGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9yZXN1bHRzLWV4cG9ydC9wcmVzZW50YXRpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0osT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3RDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFBO0FBQ3pDLE9BQU8sWUFBWSxNQUFNLDRCQUE0QixDQUFBO0FBQ3JELE9BQU8sU0FBUyxNQUFNLHlCQUF5QixDQUFBO0FBQy9DLE9BQU8sdUJBQXVCLE1BQU0sd0RBQXdELENBQUE7QUFDNUYsT0FBTyxjQUFjLE1BQU0sb0JBQW9CLENBQUE7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQzVFLE9BQU8sUUFBUSxNQUFNLGdDQUFnQyxDQUFBO0FBcUJyRCxJQUFNLHNCQUFzQixHQUFHLFVBQUMsRUFTeEI7UUFSTixjQUFjLG9CQUFBLEVBQ2QsYUFBYSxtQkFBQSxFQUNiLGNBQWMsb0JBQUEsRUFDZCxhQUFhLG1CQUFBLEVBQ2Isd0JBQXdCLDhCQUFBLEVBQ3hCLGdCQUFnQixzQkFBQSxFQUNoQixPQUFPLGFBQUEsRUFDUCxPQUFPLGFBQUE7SUFFUCxJQUFNLFFBQVEsR0FBRyxRQUFRLEVBQUUsQ0FBQTtJQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDOztRQUNkLHdCQUF3QixDQUFDLE1BQUEsYUFBYSxDQUFDLENBQUMsQ0FBQywwQ0FBRSxXQUFXLENBQUMsQ0FBQTtJQUN6RCxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO0lBRW5CLElBQUksZ0JBQWdCLEVBQUU7UUFDcEIsT0FBTyxFQUFFLENBQUE7S0FDVjtJQUVELE9BQU8sYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2xDLG9CQUFDLGNBQWMsSUFBQyxTQUFTLEVBQUMsWUFBWSxHQUFHLENBQzFDLENBQUMsQ0FBQyxDQUFDLENBQ0Y7UUFDRSxvQkFBQyxhQUFhO1lBQ1osNkJBQUssU0FBUyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO2dCQUMvQyx3Q0FBYSxzQkFBc0IsRUFBQyxTQUFTLEVBQUMsZUFBZTtvQkFDM0Qsb0JBQUMsWUFBWSxJQUNYLEdBQUcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxhQUMxQiwwQkFBMEIsRUFDbEMsU0FBUyxRQUNULElBQUksRUFBQyxPQUFPLEVBQ1osT0FBTyxFQUFFLGFBQWEsRUFDdEIsY0FBYyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBbEIsQ0FBa0IsRUFDOUMsb0JBQW9CLEVBQUUsVUFBQyxNQUFNLEVBQUUsS0FBSzs0QkFDbEMsT0FBQSxNQUFNLENBQUMsV0FBVyxLQUFLLEtBQUssQ0FBQyxXQUFXO3dCQUF4QyxDQUF3QyxFQUUxQyxRQUFRLEVBQUUsVUFBQyxFQUFFLEVBQUUsUUFBUTs0QkFDckIsd0JBQXdCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFBO3dCQUNoRCxDQUFDLEVBQ0QsZ0JBQWdCLFFBQ2hCLEtBQUssRUFDSCxhQUFhLENBQUMsSUFBSSxDQUNoQixVQUFDLE1BQU0sSUFBSyxPQUFBLE1BQU0sQ0FBQyxXQUFXLEtBQUssY0FBYyxFQUFyQyxDQUFxQyxDQUNsRCxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFFdkIsV0FBVyxFQUFFLFVBQUMsTUFBTSxJQUFLLE9BQUEsQ0FDdkIsb0JBQUMsU0FBUyxlQUFLLE1BQU0sSUFBRSxPQUFPLEVBQUMsVUFBVSxJQUFHLENBQzdDLEVBRndCLENBRXhCLEdBQ0QsQ0FDRTtnQkFFTCxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNqRCxvQkFBQyx1QkFBdUIsSUFBQyxRQUFRLEVBQUUsSUFBSSxHQUFJLENBQzVDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDSixDQUNRO1FBQ2hCLG9CQUFDLGFBQWE7WUFDWiw2QkFDRSxTQUFTLEVBQUMsTUFBTSxFQUNoQixLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxVQUFVLEVBQUU7Z0JBRXRELG9CQUFDLE1BQU0sSUFDTCxTQUFTLEVBQUMsTUFBTSxFQUNoQixRQUFRLEVBQUUsT0FBTyxFQUNqQixPQUFPLEVBQUMsTUFBTSxFQUNkLE9BQU8sRUFBRTt3QkFDUCxPQUFPLEVBQUUsQ0FBQTtvQkFDWCxDQUFDLGFBR007Z0JBQ1Qsb0JBQUMsY0FBYyxJQUNiLE9BQU8sRUFBQyxXQUFXLEVBQ25CLEtBQUssRUFBQyxTQUFTLGFBQ1AsZUFBZSxFQUN2QixRQUFRLEVBQUUsY0FBYyxFQUN4QixPQUFPLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUN6QixDQUFDLEVBQ0QsT0FBTyxFQUFFLE9BQU8sYUFHRCxDQUNiLENBQ1EsQ0FDZixDQUNKLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbXVpL21hdGVyaWFsL0F1dG9jb21wbGV0ZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5pbXBvcnQgU3VtbWFyeU1hbmFnZUF0dHJpYnV0ZXMgZnJvbSAnLi4vc3VtbWFyeS1tYW5hZ2UtYXR0cmlidXRlcy9zdW1tYXJ5LW1hbmFnZS1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFByb2dyZXNzQnV0dG9uIGZyb20gJy4uL3Byb2dyZXNzLWJ1dHRvbidcbmltcG9ydCB7IERpYWxvZ0FjdGlvbnMsIERpYWxvZ0NvbnRlbnQsIExpbmVhclByb2dyZXNzIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB1c2VTbmFjayBmcm9tICcuLi8uLi9jb21wb25lbnQvaG9va3MvdXNlU25hY2snXG5pbXBvcnQgeyBBZGRTbmFjayB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9zbmFjay9zbmFjay5wcm92aWRlcidcblxudHlwZSBFeHBvcnRGb3JtYXQgPSB7XG4gIGlkOiBzdHJpbmdcbiAgZGlzcGxheU5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcbiAgc2VsZWN0ZWRGb3JtYXQ6IHN0cmluZ1xuICBleHBvcnRGb3JtYXRzOiBFeHBvcnRGb3JtYXRbXVxuICBleHBvcnREaXNhYmxlZDogYm9vbGVhblxuICBvbkV4cG9ydENsaWNrOiAoYWRkU25hY2s6IEFkZFNuYWNrKSA9PiB2b2lkXG4gIGhhbmRsZUV4cG9ydE9wdGlvbkNoYW5nZTogKHZhbDogc3RyaW5nKSA9PiB2b2lkXG4gIGxvYWRpbmc/OiBib29sZWFuXG4gIHNldExvYWRpbmc/OiBhbnlcbiAgb25DbG9zZT86IGFueVxuICBleHBvcnRTdWNjZXNzZnVsPzogYm9vbGVhblxuICBzZXRFeHBvcnRTdWNjZXNzZnVsPzogYW55XG59XG5cbmNvbnN0IFJlc3VsdHNFeHBvcnRDb21wb25lbnQgPSAoe1xuICBzZWxlY3RlZEZvcm1hdCxcbiAgZXhwb3J0Rm9ybWF0cyxcbiAgZXhwb3J0RGlzYWJsZWQsXG4gIG9uRXhwb3J0Q2xpY2ssXG4gIGhhbmRsZUV4cG9ydE9wdGlvbkNoYW5nZSxcbiAgZXhwb3J0U3VjY2Vzc2Z1bCxcbiAgb25DbG9zZSxcbiAgbG9hZGluZyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IGFkZFNuYWNrID0gdXNlU25hY2soKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGhhbmRsZUV4cG9ydE9wdGlvbkNoYW5nZShleHBvcnRGb3JtYXRzWzBdPy5kaXNwbGF5TmFtZSlcbiAgfSwgW2V4cG9ydEZvcm1hdHNdKVxuXG4gIGlmIChleHBvcnRTdWNjZXNzZnVsKSB7XG4gICAgb25DbG9zZSgpXG4gIH1cblxuICByZXR1cm4gZXhwb3J0Rm9ybWF0cy5sZW5ndGggPT09IDAgPyAoXG4gICAgPExpbmVhclByb2dyZXNzIGNsYXNzTmFtZT1cInctZnVsbCBoLTJcIiAvPlxuICApIDogKFxuICAgIDw+XG4gICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIiBzdHlsZT17eyBtaW5XaWR0aDogJzQwMHB4JyB9fT5cbiAgICAgICAgICA8ZGl2IGRhdGEtaWQ9XCJleHBvcnQtZm9ybWF0LXNlbGVjdFwiIGNsYXNzTmFtZT1cImV4cG9ydC1vcHRpb25cIj5cbiAgICAgICAgICAgIDxBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAga2V5PXtKU09OLnN0cmluZ2lmeShleHBvcnRGb3JtYXRzKX1cbiAgICAgICAgICAgICAgZGF0YS1pZD1cImZpbHRlci10eXBlLWF1dG9jb21wbGV0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICBvcHRpb25zPXtleHBvcnRGb3JtYXRzfVxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICBpc09wdGlvbkVxdWFsVG9WYWx1ZT17KG9wdGlvbiwgdmFsdWUpID0+XG4gICAgICAgICAgICAgICAgb3B0aW9uLmRpc3BsYXlOYW1lID09PSB2YWx1ZS5kaXNwbGF5TmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoX2UsIG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXhwb3J0T3B0aW9uQ2hhbmdlKG5ld1ZhbHVlLmRpc3BsYXlOYW1lKVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkaXNhYmxlQ2xlYXJhYmxlXG4gICAgICAgICAgICAgIHZhbHVlPXtcbiAgICAgICAgICAgICAgICBleHBvcnRGb3JtYXRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAoZm9ybWF0KSA9PiBmb3JtYXQuZGlzcGxheU5hbWUgPT09IHNlbGVjdGVkRm9ybWF0XG4gICAgICAgICAgICAgICAgKSB8fCBleHBvcnRGb3JtYXRzWzBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHsuLi5wYXJhbXN9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge1snQ1NWJywgJ1JURicsICdYTFNYJ10uaW5jbHVkZXMoc2VsZWN0ZWRGb3JtYXQpID8gKFxuICAgICAgICAgICAgPFN1bW1hcnlNYW5hZ2VBdHRyaWJ1dGVzIGlzRXhwb3J0PXt0cnVlfSAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHQtMlwiXG4gICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXG4gICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgb25DbG9zZSgpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxQcm9ncmVzc0J1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgZGF0YS1pZD1cImV4cG9ydC1idXR0b25cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9e2V4cG9ydERpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBvbkV4cG9ydENsaWNrKGFkZFNuYWNrKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRXhwb3J0XG4gICAgICAgICAgPC9Qcm9ncmVzc0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoUmVzdWx0c0V4cG9ydENvbXBvbmVudClcbiJdfQ==