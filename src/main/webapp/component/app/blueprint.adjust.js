import React from 'react';
var removed = false;
/**
 * Attempts to find and remove a style, returning true if successful
 */
var removeStyle = function (_a) {
    var ruleIdentifyingFunction = _a.ruleIdentifyingFunction;
    return Boolean(Array.prototype.find.call(document.styleSheets, function (sheet) {
        return Boolean(Array.prototype.find.call(sheet.cssRules || sheet.rules, function (rule, index) {
            if (ruleIdentifyingFunction({ rule: rule })) {
                sheet.deleteRule(index);
                return true;
            }
            return false;
        }));
    }));
};
/**
 * The use of removed means this will only ever happen when it needs too.
 */
export var useRemoveFocusStyle = function () {
    React.useEffect(function () {
        if (!removed) {
            removed = removeStyle({
                ruleIdentifyingFunction: function (_a) {
                    var rule = _a.rule;
                    return (rule.style &&
                        rule.style.outline === 'rgba(19, 124, 189, 0.6) auto 2px');
                },
            });
        }
    }, []);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmx1ZXByaW50LmFkanVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYWluL3dlYmFwcC9jb21wb25lbnQvYXBwL2JsdWVwcmludC5hZGp1c3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUV6QixJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUE7QUFNbkI7O0dBRUc7QUFDSCxJQUFNLFdBQVcsR0FBRyxVQUFDLEVBRUY7UUFEakIsdUJBQXVCLDZCQUFBO0lBRXZCLE9BQU8sT0FBTyxDQUNaLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBb0I7UUFDbkUsT0FBTyxPQUFPLENBQ1osS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN2QixLQUFLLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQzdCLFVBQUMsSUFBa0IsRUFBRSxLQUFhO1lBQ2hDLElBQUksdUJBQXVCLENBQUMsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLEVBQUU7Z0JBQ3JDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFBO2FBQ1o7WUFDRCxPQUFPLEtBQUssQ0FBQTtRQUNkLENBQUMsQ0FDRixDQUNGLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxtQkFBbUIsR0FBRztJQUNqQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLE9BQU8sR0FBRyxXQUFXLENBQUM7Z0JBQ3BCLHVCQUF1QixFQUFFLFVBQUMsRUFBUTt3QkFBTixJQUFJLFVBQUE7b0JBQzlCLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSzt3QkFDVixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxrQ0FBa0MsQ0FDMUQsQ0FBQTtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDUixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmxldCByZW1vdmVkID0gZmFsc2VcblxudHlwZSByZW1vdmVTdHlsZVByb3BzID0ge1xuICBydWxlSWRlbnRpZnlpbmdGdW5jdGlvbjogKHsgcnVsZSB9OiB7IHJ1bGU6IENTU1N0eWxlUnVsZSB9KSA9PiBib29sZWFuXG59XG5cbi8qKlxuICogQXR0ZW1wdHMgdG8gZmluZCBhbmQgcmVtb3ZlIGEgc3R5bGUsIHJldHVybmluZyB0cnVlIGlmIHN1Y2Nlc3NmdWxcbiAqL1xuY29uc3QgcmVtb3ZlU3R5bGUgPSAoe1xuICBydWxlSWRlbnRpZnlpbmdGdW5jdGlvbixcbn06IHJlbW92ZVN0eWxlUHJvcHMpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuIEJvb2xlYW4oXG4gICAgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChkb2N1bWVudC5zdHlsZVNoZWV0cywgKHNoZWV0OiBDU1NTdHlsZVNoZWV0KSA9PiB7XG4gICAgICByZXR1cm4gQm9vbGVhbihcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmZpbmQuY2FsbChcbiAgICAgICAgICBzaGVldC5jc3NSdWxlcyB8fCBzaGVldC5ydWxlcyxcbiAgICAgICAgICAocnVsZTogQ1NTU3R5bGVSdWxlLCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBpZiAocnVsZUlkZW50aWZ5aW5nRnVuY3Rpb24oeyBydWxlIH0pKSB7XG4gICAgICAgICAgICAgIHNoZWV0LmRlbGV0ZVJ1bGUoaW5kZXgpXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgIClcbiAgICB9KVxuICApXG59XG5cbi8qKlxuICogVGhlIHVzZSBvZiByZW1vdmVkIG1lYW5zIHRoaXMgd2lsbCBvbmx5IGV2ZXIgaGFwcGVuIHdoZW4gaXQgbmVlZHMgdG9vLlxuICovXG5leHBvcnQgY29uc3QgdXNlUmVtb3ZlRm9jdXNTdHlsZSA9ICgpID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlbW92ZWQpIHtcbiAgICAgIHJlbW92ZWQgPSByZW1vdmVTdHlsZSh7XG4gICAgICAgIHJ1bGVJZGVudGlmeWluZ0Z1bmN0aW9uOiAoeyBydWxlIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgcnVsZS5zdHlsZSAmJlxuICAgICAgICAgICAgcnVsZS5zdHlsZS5vdXRsaW5lID09PSAncmdiYSgxOSwgMTI0LCAxODksIDAuNikgYXV0byAycHgnXG4gICAgICAgICAgKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKVxufVxuIl19