import { __assign } from "tslib";
import * as React from 'react';
import { getGroupedFilteredAttributes } from './filterHelper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { FilterClass } from '../../component/filter-builder/filter.structure';
import { getComparators } from './filter-comparator/comparatorUtils';
import { FilterContext } from './filter';
export var FilterProperty = function (_a) {
    var filter = _a.filter, setFilter = _a.setFilter;
    var limitedAttributeList = React.useContext(FilterContext).limitedAttributeList;
    var attributeList = limitedAttributeList;
    var groups = 1;
    if (!attributeList) {
        var groupedFilteredAttributes = getGroupedFilteredAttributes();
        attributeList = groupedFilteredAttributes.attributes;
        groups = groupedFilteredAttributes.groups.length;
    }
    var property = filter.property;
    var currentSelectedAttribute = attributeList.find(function (attrInfo) { return attrInfo.value === property; });
    var groupBy = groups > 1 ? function (option) { return option.group; } : undefined;
    return (React.createElement(Autocomplete, { "data-id": "filter-type-autocomplete", fullWidth: true, size: "small", options: attributeList, groupBy: groupBy, getOptionLabel: function (option) { return option.label; }, isOptionEqualToValue: function (option, value) { return option.value === value.value; }, onChange: function (_e, newValue) {
            /**
             * should update both the property and the type, since type is restricted based on property
             */
            var newProperty = newValue.value;
            var comparators = getComparators(newProperty);
            var updates = {
                property: newProperty,
                type: !comparators
                    .map(function (comparator) { return comparator.value; })
                    .includes(filter.type)
                    ? comparators[0].value
                    : filter.type,
            };
            setFilter(new FilterClass(__assign(__assign({}, filter), updates)));
        }, disableClearable: true, value: currentSelectedAttribute, renderInput: function (params) { return React.createElement(TextField, __assign({}, params, { variant: "outlined" })); } }));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByb3BlcnR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9maWx0ZXIvZmlsdGVyLXByb3BlcnR5LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFhLDRCQUE0QixFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDeEUsT0FBTyxZQUFZLE1BQU0sNEJBQTRCLENBQUE7QUFDckQsT0FBTyxTQUFTLE1BQU0seUJBQXlCLENBQUE7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlEQUFpRCxDQUFBO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQTtBQUNwRSxPQUFPLEVBQVMsYUFBYSxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRS9DLE1BQU0sQ0FBQyxJQUFNLGNBQWMsR0FBRyxVQUFDLEVBQTRCO1FBQTFCLE1BQU0sWUFBQSxFQUFFLFNBQVMsZUFBQTtJQUN4QyxJQUFBLG9CQUFvQixHQUFLLEtBQUssQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFwQyxDQUFvQztJQUNoRSxJQUFJLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQTtJQUN4QyxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2xCLElBQU0seUJBQXlCLEdBQUcsNEJBQTRCLEVBQUUsQ0FBQTtRQUNoRSxhQUFhLEdBQUcseUJBQXlCLENBQUMsVUFBVSxDQUFBO1FBQ3BELE1BQU0sR0FBRyx5QkFBeUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFBO0tBQ2pEO0lBQ08sSUFBQSxRQUFRLEdBQUssTUFBTSxTQUFYLENBQVc7SUFDM0IsSUFBTSx3QkFBd0IsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUNqRCxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUEzQixDQUEyQixDQUMxQyxDQUFBO0lBQ0QsSUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBQyxNQUFpQixJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQU0sRUFBYixDQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQTtJQUM3RSxPQUFPLENBQ0wsb0JBQUMsWUFBWSxlQUNILDBCQUEwQixFQUNsQyxTQUFTLFFBQ1QsSUFBSSxFQUFDLE9BQU8sRUFDWixPQUFPLEVBQUUsYUFBYSxFQUN0QixPQUFPLEVBQUUsT0FBTyxFQUNoQixjQUFjLEVBQUUsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsS0FBSyxFQUFaLENBQVksRUFDeEMsb0JBQW9CLEVBQUUsVUFBQyxNQUFNLEVBQUUsS0FBSyxJQUFLLE9BQUEsTUFBTSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxFQUE1QixDQUE0QixFQUNyRSxRQUFRLEVBQUUsVUFBQyxFQUFFLEVBQUUsUUFBUTtZQUNyQjs7ZUFFRztZQUNILElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFnQyxDQUFBO1lBQzdELElBQU0sV0FBVyxHQUFHLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUMvQyxJQUFNLE9BQU8sR0FBRztnQkFDZCxRQUFRLEVBQUUsV0FBVztnQkFDckIsSUFBSSxFQUFFLENBQUMsV0FBVztxQkFDZixHQUFHLENBQUMsVUFBQyxVQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxFQUFoQixDQUFnQixDQUFDO3FCQUNyQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDdEIsQ0FBQyxDQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUE2QjtvQkFDL0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJO2FBQ2hCLENBQUE7WUFFRCxTQUFTLENBQ1AsSUFBSSxXQUFXLHVCQUNWLE1BQU0sR0FDTixPQUFPLEVBQ1YsQ0FDSCxDQUFBO1FBQ0gsQ0FBQyxFQUNELGdCQUFnQixRQUNoQixLQUFLLEVBQUUsd0JBQXdCLEVBQy9CLFdBQVcsRUFBRSxVQUFDLE1BQU0sSUFBSyxPQUFBLG9CQUFDLFNBQVMsZUFBSyxNQUFNLElBQUUsT0FBTyxFQUFDLFVBQVUsSUFBRyxFQUE1QyxDQUE0QyxHQUNyRSxDQUNILENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEF0dHJpYnV0ZSwgZ2V0R3JvdXBlZEZpbHRlcmVkQXR0cmlidXRlcyB9IGZyb20gJy4vZmlsdGVySGVscGVyJ1xuaW1wb3J0IEF1dG9jb21wbGV0ZSBmcm9tICdAbXVpL21hdGVyaWFsL0F1dG9jb21wbGV0ZSdcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnXG5pbXBvcnQgeyBGaWx0ZXJDbGFzcyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9maWx0ZXItYnVpbGRlci9maWx0ZXIuc3RydWN0dXJlJ1xuaW1wb3J0IHsgZ2V0Q29tcGFyYXRvcnMgfSBmcm9tICcuL2ZpbHRlci1jb21wYXJhdG9yL2NvbXBhcmF0b3JVdGlscydcbmltcG9ydCB7IFByb3BzLCBGaWx0ZXJDb250ZXh0IH0gZnJvbSAnLi9maWx0ZXInXG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJQcm9wZXJ0eSA9ICh7IGZpbHRlciwgc2V0RmlsdGVyIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGltaXRlZEF0dHJpYnV0ZUxpc3QgfSA9IFJlYWN0LnVzZUNvbnRleHQoRmlsdGVyQ29udGV4dClcbiAgbGV0IGF0dHJpYnV0ZUxpc3QgPSBsaW1pdGVkQXR0cmlidXRlTGlzdFxuICBsZXQgZ3JvdXBzID0gMVxuICBpZiAoIWF0dHJpYnV0ZUxpc3QpIHtcbiAgICBjb25zdCBncm91cGVkRmlsdGVyZWRBdHRyaWJ1dGVzID0gZ2V0R3JvdXBlZEZpbHRlcmVkQXR0cmlidXRlcygpXG4gICAgYXR0cmlidXRlTGlzdCA9IGdyb3VwZWRGaWx0ZXJlZEF0dHJpYnV0ZXMuYXR0cmlidXRlc1xuICAgIGdyb3VwcyA9IGdyb3VwZWRGaWx0ZXJlZEF0dHJpYnV0ZXMuZ3JvdXBzLmxlbmd0aFxuICB9XG4gIGNvbnN0IHsgcHJvcGVydHkgfSA9IGZpbHRlclxuICBjb25zdCBjdXJyZW50U2VsZWN0ZWRBdHRyaWJ1dGUgPSBhdHRyaWJ1dGVMaXN0LmZpbmQoXG4gICAgKGF0dHJJbmZvKSA9PiBhdHRySW5mby52YWx1ZSA9PT0gcHJvcGVydHlcbiAgKVxuICBjb25zdCBncm91cEJ5ID0gZ3JvdXBzID4gMSA/IChvcHRpb246IEF0dHJpYnV0ZSkgPT4gb3B0aW9uLmdyb3VwISA6IHVuZGVmaW5lZFxuICByZXR1cm4gKFxuICAgIDxBdXRvY29tcGxldGVcbiAgICAgIGRhdGEtaWQ9XCJmaWx0ZXItdHlwZS1hdXRvY29tcGxldGVcIlxuICAgICAgZnVsbFdpZHRoXG4gICAgICBzaXplPVwic21hbGxcIlxuICAgICAgb3B0aW9ucz17YXR0cmlidXRlTGlzdH1cbiAgICAgIGdyb3VwQnk9e2dyb3VwQnl9XG4gICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLmxhYmVsfVxuICAgICAgaXNPcHRpb25FcXVhbFRvVmFsdWU9eyhvcHRpb24sIHZhbHVlKSA9PiBvcHRpb24udmFsdWUgPT09IHZhbHVlLnZhbHVlfVxuICAgICAgb25DaGFuZ2U9eyhfZSwgbmV3VmFsdWUpID0+IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHNob3VsZCB1cGRhdGUgYm90aCB0aGUgcHJvcGVydHkgYW5kIHRoZSB0eXBlLCBzaW5jZSB0eXBlIGlzIHJlc3RyaWN0ZWQgYmFzZWQgb24gcHJvcGVydHlcbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0IG5ld1Byb3BlcnR5ID0gbmV3VmFsdWUudmFsdWUgYXMgRmlsdGVyQ2xhc3NbJ3Byb3BlcnR5J11cbiAgICAgICAgY29uc3QgY29tcGFyYXRvcnMgPSBnZXRDb21wYXJhdG9ycyhuZXdQcm9wZXJ0eSlcbiAgICAgICAgY29uc3QgdXBkYXRlcyA9IHtcbiAgICAgICAgICBwcm9wZXJ0eTogbmV3UHJvcGVydHksXG4gICAgICAgICAgdHlwZTogIWNvbXBhcmF0b3JzXG4gICAgICAgICAgICAubWFwKChjb21wYXJhdG9yKSA9PiBjb21wYXJhdG9yLnZhbHVlKVxuICAgICAgICAgICAgLmluY2x1ZGVzKGZpbHRlci50eXBlKVxuICAgICAgICAgICAgPyAoY29tcGFyYXRvcnNbMF0udmFsdWUgYXMgRmlsdGVyQ2xhc3NbJ3R5cGUnXSlcbiAgICAgICAgICAgIDogZmlsdGVyLnR5cGUsXG4gICAgICAgIH1cblxuICAgICAgICBzZXRGaWx0ZXIoXG4gICAgICAgICAgbmV3IEZpbHRlckNsYXNzKHtcbiAgICAgICAgICAgIC4uLmZpbHRlcixcbiAgICAgICAgICAgIC4uLnVwZGF0ZXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfX1cbiAgICAgIGRpc2FibGVDbGVhcmFibGVcbiAgICAgIHZhbHVlPXtjdXJyZW50U2VsZWN0ZWRBdHRyaWJ1dGV9XG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gPFRleHRGaWVsZCB7Li4ucGFyYW1zfSB2YXJpYW50PVwib3V0bGluZWRcIiAvPn1cbiAgICAvPlxuICApXG59XG4iXX0=