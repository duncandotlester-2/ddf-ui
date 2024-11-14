import { __assign } from "tslib";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { DateField } from './date';
import CalendarIcon from '@mui/icons-material/Event';
import ClearIcon from '@mui/icons-material/Clear';
import { hot } from 'react-hot-loader';
import InputAdornment from '@mui/material/InputAdornment';
/**
 * DateTimePicker that combines Mui TextField with BlueprintJs DatePicker
 *
 * For now it's meant to work with an outlined text field, but we can add support for other styles if we want.
 *
 * By changing the inputComponent, we avoid weird focusing issues, while still allowing use of all the other niceties (helperText) of TextField
 */
var DateTimePicker = function (_a) {
    var value = _a.value, onChange = _a.onChange, isNullable = _a.isNullable, TextFieldProps = _a.TextFieldProps, BPDateProps = _a.BPDateProps;
    var inputRef = React.useRef(null);
    /**
     * We want to avoid causing the TextField below to percieve a change to inputComponent when possible, because that mucks with focus.
     *
     * We stringify the BPDateProps to make life easier for devs, since they will likely pass a plain object.  If they do and their component rerenders,
     * this memo would trigger even though they think they didn't change BPDateProps (the object is different though!).  So we stringify to make sure we
     * only pick up real changes.
     */
    var inputComponent = React.useMemo(function () {
        var classes = 'px-[14px] py-[8.5px]';
        return React.forwardRef(function (props, ref) {
            return (React.createElement(DateField, __assign({}, props, { isNullable: true, BPDateProps: __assign(__assign({}, BPDateProps), { className: classes, inputProps: {
                        inputRef: ref,
                    } }) })));
        });
    }, [JSON.stringify(BPDateProps)]);
    return (React.createElement(TextField, __assign({ fullWidth: true, variant: TextFieldProps === null || TextFieldProps === void 0 ? void 0 : TextFieldProps.variant, label: "Date", InputLabelProps: { shrink: true }, value: value, onChange: onChange, ref: inputRef, InputProps: {
            inputComponent: inputComponent,
            endAdornment: (React.createElement(InputAdornment, { component: "button", type: "button", className: "cursor-pointer", position: "end", onClick: function () {
                    var _a;
                    if (inputRef.current) {
                        (_a = inputRef.current.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
                    }
                } },
                isNullable && (React.createElement(ClearIcon, { className: "".concat(value ? '' : 'hidden'), onClick: function (e) {
                        onChange(null);
                        e.stopPropagation();
                    } })),
                React.createElement(CalendarIcon, null))),
        } }, TextFieldProps)));
};
export default hot(module)(DateTimePicker);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10aW1lLXBpY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnQvZmllbGRzL2RhdGUtdGltZS1waWNrZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUU5QixPQUFPLFNBQTZCLE1BQU0seUJBQXlCLENBQUE7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLFFBQVEsQ0FBQTtBQUNsQyxPQUFPLFlBQVksTUFBTSwyQkFBMkIsQ0FBQTtBQUNwRCxPQUFPLFNBQVMsTUFBTSwyQkFBMkIsQ0FBQTtBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxjQUFjLE1BQU0sOEJBQThCLENBQUE7QUFrQnpEOzs7Ozs7R0FNRztBQUNILElBQU0sY0FBYyxHQUFHLFVBQUMsRUFNUDtRQUxmLEtBQUssV0FBQSxFQUNMLFFBQVEsY0FBQSxFQUNSLFVBQVUsZ0JBQUEsRUFDVixjQUFjLG9CQUFBLEVBQ2QsV0FBVyxpQkFBQTtJQUVYLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQWlCLElBQUksQ0FBQyxDQUFBO0lBQ25EOzs7Ozs7T0FNRztJQUNILElBQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsc0JBQXNCLENBQUE7UUFFcEMsT0FBTyxLQUFLLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxFQUFFLEdBQVE7WUFDM0MsT0FBTyxDQUNMLG9CQUFDLFNBQVMsZUFDSixLQUFLLElBQ1QsVUFBVSxRQUNWLFdBQVcsd0JBQ04sV0FBVyxLQUNkLFNBQVMsRUFBRSxPQUFPLEVBQ2xCLFVBQVUsRUFBRTt3QkFDVixRQUFRLEVBQUUsR0FBRztxQkFDZCxPQUVILENBQ0gsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFakMsT0FBTyxDQUNMLG9CQUFDLFNBQVMsYUFDUixTQUFTLFFBQ1QsT0FBTyxFQUFFLGNBQWMsYUFBZCxjQUFjLHVCQUFkLGNBQWMsQ0FBRSxPQUFPLEVBQ2hDLEtBQUssRUFBQyxNQUFNLEVBQ1osZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxFQUNqQyxLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFlLEVBQ3pCLEdBQUcsRUFBRSxRQUFRLEVBQ2IsVUFBVSxFQUFFO1lBQ1YsY0FBYyxFQUFFLGNBQWM7WUFDOUIsWUFBWSxFQUFFLENBQ1osb0JBQUMsY0FBYyxJQUNiLFNBQVMsRUFBQyxRQUFRLEVBQ2xCLElBQUksRUFBQyxRQUFRLEVBQ2IsU0FBUyxFQUFDLGdCQUFnQixFQUMxQixRQUFRLEVBQUMsS0FBSyxFQUNkLE9BQU8sRUFBRTs7b0JBQ1AsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO3dCQUNwQixNQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQywwQ0FBRSxLQUFLLEVBQUUsQ0FBQTtxQkFDakQ7Z0JBQ0gsQ0FBQztnQkFFQSxVQUFVLElBQUksQ0FDYixvQkFBQyxTQUFTLElBQ1IsU0FBUyxFQUFFLFVBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxFQUNyQyxPQUFPLEVBQUUsVUFBQyxDQUFDO3dCQUNULFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDZCxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7b0JBQ3JCLENBQUMsR0FDRCxDQUNIO2dCQUNELG9CQUFDLFlBQVksT0FBRyxDQUNELENBQ2xCO1NBQ0YsSUFDRyxjQUFjLEVBQ2xCLENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJRGF0ZUlucHV0UHJvcHMgfSBmcm9tICdAYmx1ZXByaW50anMvZGF0ZXRpbWUnXG5pbXBvcnQgVGV4dEZpZWxkLCB7IFRleHRGaWVsZFByb3BzIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5pbXBvcnQgeyBEYXRlRmllbGQgfSBmcm9tICcuL2RhdGUnXG5pbXBvcnQgQ2FsZW5kYXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRXZlbnQnXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xlYXInXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRBZG9ybm1lbnQnXG5cbnR5cGUgRGF0ZUZpZWxkUHJvcHMgPSB7XG4gIHZhbHVlOiBzdHJpbmcgfCBudWxsXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IG51bGwpID0+IHZvaWRcbiAgaXNOdWxsYWJsZT86IGJvb2xlYW5cbiAgVGV4dEZpZWxkUHJvcHM/OiBQYXJ0aWFsPFRleHRGaWVsZFByb3BzPlxuICAvKipcbiAgICogT3ZlcnJpZGUgaWYgeW91IGFic29sdXRlbHkgbXVzdC5cbiAgICogVGFrZSBleHRyYSBjYXV0aW9uIHdoZW4gb3ZlcnJpZGluZyBtaW5EYXRlIGFuZCBtYXhEYXRlLlxuICAgKiBPdmVycmlkaW5nIG1pbkRhdGUgYW5kIG1heERhdGUgd2lsbCB3b3JrIGFzIGEgdmlzdWFsIG92ZXJsYXkgd2hpY2ggY2FuIG9ubHkgYmUgdXNlZFxuICAgKiB0byByZXN0cmljdCB3aGljaCBkYXRlcyBhIHVzZXIgY2FuIGlucHV0LSBidXQgY2FuJ3QgYmUgdXNlZCB0byBnaXZlIHRoZSB1c2VycyBhIGxvd2VyL2hpZ2hlclxuICAgKiBtaW4gb3IgbWF4LiBUaGUgdHJ1ZSBtaW4vbWF4IGlzIHNldCBpbiBkYXRlSGVscGVycy4gV2Ugc2hvdWxkIHByb2JhYmx5IHVwZGF0ZSB0aGlzIGF0IHNvbWVcbiAgICogcG9pbnQgdG8gYmUgcGFzc2VkIGRvd24gYnkgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBCUERhdGVQcm9wcz86IFBhcnRpYWw8SURhdGVJbnB1dFByb3BzPlxufVxuXG4vKipcbiAqIERhdGVUaW1lUGlja2VyIHRoYXQgY29tYmluZXMgTXVpIFRleHRGaWVsZCB3aXRoIEJsdWVwcmludEpzIERhdGVQaWNrZXJcbiAqXG4gKiBGb3Igbm93IGl0J3MgbWVhbnQgdG8gd29yayB3aXRoIGFuIG91dGxpbmVkIHRleHQgZmllbGQsIGJ1dCB3ZSBjYW4gYWRkIHN1cHBvcnQgZm9yIG90aGVyIHN0eWxlcyBpZiB3ZSB3YW50LlxuICpcbiAqIEJ5IGNoYW5naW5nIHRoZSBpbnB1dENvbXBvbmVudCwgd2UgYXZvaWQgd2VpcmQgZm9jdXNpbmcgaXNzdWVzLCB3aGlsZSBzdGlsbCBhbGxvd2luZyB1c2Ugb2YgYWxsIHRoZSBvdGhlciBuaWNldGllcyAoaGVscGVyVGV4dCkgb2YgVGV4dEZpZWxkXG4gKi9cbmNvbnN0IERhdGVUaW1lUGlja2VyID0gKHtcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBpc051bGxhYmxlLFxuICBUZXh0RmllbGRQcm9wcyxcbiAgQlBEYXRlUHJvcHMsXG59OiBEYXRlRmllbGRQcm9wcykgPT4ge1xuICBjb25zdCBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcbiAgLyoqXG4gICAqIFdlIHdhbnQgdG8gYXZvaWQgY2F1c2luZyB0aGUgVGV4dEZpZWxkIGJlbG93IHRvIHBlcmNpZXZlIGEgY2hhbmdlIHRvIGlucHV0Q29tcG9uZW50IHdoZW4gcG9zc2libGUsIGJlY2F1c2UgdGhhdCBtdWNrcyB3aXRoIGZvY3VzLlxuICAgKlxuICAgKiBXZSBzdHJpbmdpZnkgdGhlIEJQRGF0ZVByb3BzIHRvIG1ha2UgbGlmZSBlYXNpZXIgZm9yIGRldnMsIHNpbmNlIHRoZXkgd2lsbCBsaWtlbHkgcGFzcyBhIHBsYWluIG9iamVjdC4gIElmIHRoZXkgZG8gYW5kIHRoZWlyIGNvbXBvbmVudCByZXJlbmRlcnMsXG4gICAqIHRoaXMgbWVtbyB3b3VsZCB0cmlnZ2VyIGV2ZW4gdGhvdWdoIHRoZXkgdGhpbmsgdGhleSBkaWRuJ3QgY2hhbmdlIEJQRGF0ZVByb3BzICh0aGUgb2JqZWN0IGlzIGRpZmZlcmVudCB0aG91Z2ghKS4gIFNvIHdlIHN0cmluZ2lmeSB0byBtYWtlIHN1cmUgd2VcbiAgICogb25seSBwaWNrIHVwIHJlYWwgY2hhbmdlcy5cbiAgICovXG4gIGNvbnN0IGlucHV0Q29tcG9uZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgbGV0IGNsYXNzZXMgPSAncHgtWzE0cHhdIHB5LVs4LjVweF0nXG5cbiAgICByZXR1cm4gUmVhY3QuZm9yd2FyZFJlZigocHJvcHM6IGFueSwgcmVmOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEYXRlRmllbGRcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgaXNOdWxsYWJsZVxuICAgICAgICAgIEJQRGF0ZVByb3BzPXt7XG4gICAgICAgICAgICAuLi5CUERhdGVQcm9wcyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgICAgICAgIGlucHV0UHJvcHM6IHtcbiAgICAgICAgICAgICAgaW5wdXRSZWY6IHJlZixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9LCBbSlNPTi5zdHJpbmdpZnkoQlBEYXRlUHJvcHMpXSlcblxuICByZXR1cm4gKFxuICAgIDxUZXh0RmllbGRcbiAgICAgIGZ1bGxXaWR0aFxuICAgICAgdmFyaWFudD17VGV4dEZpZWxkUHJvcHM/LnZhcmlhbnR9XG4gICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlIGFzIGFueX1cbiAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgIGlucHV0Q29tcG9uZW50OiBpbnB1dENvbXBvbmVudCxcbiAgICAgICAgZW5kQWRvcm5tZW50OiAoXG4gICAgICAgICAgPElucHV0QWRvcm5tZW50XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJidXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICBwb3NpdGlvbj1cImVuZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbnB1dFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaW5wdXRSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5mb2N1cygpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzTnVsbGFibGUgJiYgKFxuICAgICAgICAgICAgICA8Q2xlYXJJY29uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHt2YWx1ZSA/ICcnIDogJ2hpZGRlbid9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgb25DaGFuZ2UobnVsbClcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxDYWxlbmRhckljb24gLz5cbiAgICAgICAgICA8L0lucHV0QWRvcm5tZW50PlxuICAgICAgICApLFxuICAgICAgfX1cbiAgICAgIHsuLi5UZXh0RmllbGRQcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKERhdGVUaW1lUGlja2VyKVxuIl19