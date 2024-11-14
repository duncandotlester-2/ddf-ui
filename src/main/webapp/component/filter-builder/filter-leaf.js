import { __assign, __read } from "tslib";
import * as React from 'react';
import { hot } from 'react-hot-loader';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { HoverButton } from '../button/hover';
import { FilterClass } from './filter.structure';
import FilterPropertyAutocomplete from '../../react-component/filter/filter';
import { Memo } from '../memo/memo';
export var FilterNegationControls = function (_a) {
    var filter = _a.filter, setFilter = _a.setFilter, children = _a.children;
    var _b = __read(React.useState(false), 2), hover = _b[0], setHover = _b[1];
    var theme = useTheme();
    return (React.createElement("div", { className: "relative", onMouseOver: function () {
            setHover(true);
        }, onMouseOut: function () {
            setHover(false);
        } },
        filter.negated ? (React.createElement(HoverButton, { "data-id": "remove-not-button", className: "absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-0 px-1 text-xs z-10", color: "primary", variant: "contained", onClick: function () {
                setFilter(new FilterClass(__assign(__assign({}, filter), { negated: !filter.negated })));
            } }, function (_a) {
            var hover = _a.hover;
            if (hover) {
                return React.createElement(React.Fragment, null, "Remove Not");
            }
            else {
                return React.createElement(React.Fragment, null, "NOT");
            }
        })) : (React.createElement(Button, { "data-id": "not-field-button", className: "".concat(hover ? 'opacity-25' : 'opacity-0', " hover:opacity-100 focus:opacity-100 transition-opacity duration-200 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-0 px-1 text-xs z-10"), color: "primary", variant: "contained", onClick: function () {
                setFilter(new FilterClass(__assign(__assign({}, filter), { negated: !filter.negated })));
            } }, "+ Not Field")),
        React.createElement("div", { className: "".concat(filter.negated ? 'border px-3 py-4 mt-2' : '', " transition-all duration-200"), style: {
                borderColor: theme.palette.primary.main,
            } }, children)));
};
var FilterLeaf = function (_a) {
    var filter = _a.filter, setFilter = _a.setFilter, errorListener = _a.errorListener;
    return (React.createElement(FilterNegationControls, { filter: filter, setFilter: setFilter },
        React.createElement(Memo, { dependencies: [filter, setFilter] },
            React.createElement(FilterPropertyAutocomplete, { filter: filter, setFilter: setFilter, errorListener: errorListener }))));
};
export default hot(module)(FilterLeaf);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWxlYWYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50L2ZpbHRlci1idWlsZGVyL2ZpbHRlci1sZWFmLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3RDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFBO0FBQ3pDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQTtBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFBO0FBQ2hELE9BQU8sMEJBQTBCLE1BQU0scUNBQXFDLENBQUE7QUFDNUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWMsQ0FBQTtBQVduQyxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBRyxVQUFDLEVBTXRDO1FBTEMsTUFBTSxZQUFBLEVBQ04sU0FBUyxlQUFBLEVBQ1QsUUFBUSxjQUFBO0lBSUYsSUFBQSxLQUFBLE9BQW9CLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUEsRUFBeEMsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUF5QixDQUFBO0lBQy9DLElBQU0sS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFBO0lBQ3hCLE9BQU8sQ0FDTCw2QkFDRSxTQUFTLEVBQUMsVUFBVSxFQUNwQixXQUFXLEVBQUU7WUFDWCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDaEIsQ0FBQyxFQUNELFVBQVUsRUFBRTtZQUNWLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQixDQUFDO1FBRUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FDaEIsb0JBQUMsV0FBVyxlQUNGLG1CQUFtQixFQUMzQixTQUFTLEVBQUUsc0ZBQXNGLEVBQ2pHLEtBQUssRUFBQyxTQUFTLEVBQ2YsT0FBTyxFQUFDLFdBQVcsRUFDbkIsT0FBTyxFQUFFO2dCQUNQLFNBQVMsQ0FDUCxJQUFJLFdBQVcsdUJBQ1YsTUFBTSxLQUNULE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQ3hCLENBQ0gsQ0FBQTtZQUNILENBQUMsSUFFQSxVQUFDLEVBQVM7Z0JBQVAsS0FBSyxXQUFBO1lBQ1AsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsT0FBTyx1REFBZSxDQUFBO2FBQ3ZCO2lCQUFNO2dCQUNMLE9BQU8sZ0RBQVEsQ0FBQTthQUNoQjtRQUNILENBQUMsQ0FDVyxDQUNmLENBQUMsQ0FBQyxDQUFDLENBQ0Ysb0JBQUMsTUFBTSxlQUNHLGtCQUFrQixFQUMxQixTQUFTLEVBQUUsVUFDVCxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyw4SkFDdUgsRUFDM0osS0FBSyxFQUFDLFNBQVMsRUFDZixPQUFPLEVBQUMsV0FBVyxFQUNuQixPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxDQUNQLElBQUksV0FBVyx1QkFDVixNQUFNLEtBQ1QsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFDeEIsQ0FDSCxDQUFBO1lBQ0gsQ0FBQyxrQkFHTSxDQUNWO1FBQ0QsNkJBQ0UsU0FBUyxFQUFFLFVBQ1QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLEVBQUUsaUNBQ2pCLEVBQzlCLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSTthQUN4QyxJQUVBLFFBQVEsQ0FDTCxDQUNGLENBQ1AsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELElBQU0sVUFBVSxHQUFHLFVBQUMsRUFBMkM7UUFBekMsTUFBTSxZQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsYUFBYSxtQkFBQTtJQUNwRCxPQUFPLENBQ0wsb0JBQUMsc0JBQXNCLElBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUztRQUMxRCxvQkFBQyxJQUFJLElBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztZQUNyQyxvQkFBQywwQkFBMEIsSUFDekIsTUFBTSxFQUFFLE1BQU0sRUFDZCxTQUFTLEVBQUUsU0FBUyxFQUNwQixhQUFhLEVBQUUsYUFBYSxHQUM1QixDQUNHLENBQ2dCLENBQzFCLENBQUE7QUFDSCxDQUFDLENBQUE7QUFDRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IHsgSG92ZXJCdXR0b24gfSBmcm9tICcuLi9idXR0b24vaG92ZXInXG5pbXBvcnQgeyBGaWx0ZXJDbGFzcyB9IGZyb20gJy4vZmlsdGVyLnN0cnVjdHVyZSdcbmltcG9ydCBGaWx0ZXJQcm9wZXJ0eUF1dG9jb21wbGV0ZSBmcm9tICcuLi8uLi9yZWFjdC1jb21wb25lbnQvZmlsdGVyL2ZpbHRlcidcbmltcG9ydCB7IE1lbW8gfSBmcm9tICcuLi9tZW1vL21lbW8nXG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVzdWx0IH0gZnJvbSAnLi4vLi4vcmVhY3QtY29tcG9uZW50L2xvY2F0aW9uL3ZhbGlkYXRvcnMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpbHRlcjogRmlsdGVyQ2xhc3NcbiAgc2V0RmlsdGVyOiAoZmlsdGVyOiBGaWx0ZXJDbGFzcykgPT4gdm9pZFxuICBlcnJvckxpc3RlbmVyPzogKHZhbGlkYXRpb25SZXN1bHRzOiB7XG4gICAgW2tleTogc3RyaW5nXTogVmFsaWRhdGlvblJlc3VsdCB8IHVuZGVmaW5lZFxuICB9KSA9PiB2b2lkXG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJOZWdhdGlvbkNvbnRyb2xzID0gKHtcbiAgZmlsdGVyLFxuICBzZXRGaWx0ZXIsXG4gIGNoaWxkcmVuLFxufTogUHJvcHMgJiB7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGVcbn0pID0+IHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgc2V0SG92ZXIodHJ1ZSlcbiAgICAgIH19XG4gICAgICBvbk1vdXNlT3V0PXsoKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKGZhbHNlKVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7ZmlsdGVyLm5lZ2F0ZWQgPyAoXG4gICAgICAgIDxIb3ZlckJ1dHRvblxuICAgICAgICAgIGRhdGEtaWQ9XCJyZW1vdmUtbm90LWJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBweS0wIHB4LTEgdGV4dC14cyB6LTEwYH1cbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHNldEZpbHRlcihcbiAgICAgICAgICAgICAgbmV3IEZpbHRlckNsYXNzKHtcbiAgICAgICAgICAgICAgICAuLi5maWx0ZXIsXG4gICAgICAgICAgICAgICAgbmVnYXRlZDogIWZpbHRlci5uZWdhdGVkLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7KHsgaG92ZXIgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGhvdmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiA8PlJlbW92ZSBOb3Q8Lz5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiA8Pk5PVDwvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH19XG4gICAgICAgIDwvSG92ZXJCdXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgZGF0YS1pZD1cIm5vdC1maWVsZC1idXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICBob3ZlciA/ICdvcGFjaXR5LTI1JyA6ICdvcGFjaXR5LTAnXG4gICAgICAgICAgfSBob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tMjAwIGFic29sdXRlIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgcHktMCBweC0xIHRleHQteHMgei0xMGB9XG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBzZXRGaWx0ZXIoXG4gICAgICAgICAgICAgIG5ldyBGaWx0ZXJDbGFzcyh7XG4gICAgICAgICAgICAgICAgLi4uZmlsdGVyLFxuICAgICAgICAgICAgICAgIG5lZ2F0ZWQ6ICFmaWx0ZXIubmVnYXRlZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgKyBOb3QgRmllbGRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICApfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgIGZpbHRlci5uZWdhdGVkID8gJ2JvcmRlciBweC0zIHB5LTQgbXQtMicgOiAnJ1xuICAgICAgICB9IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMGB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGaWx0ZXJMZWFmID0gKHsgZmlsdGVyLCBzZXRGaWx0ZXIsIGVycm9yTGlzdGVuZXIgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RmlsdGVyTmVnYXRpb25Db250cm9scyBmaWx0ZXI9e2ZpbHRlcn0gc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9PlxuICAgICAgPE1lbW8gZGVwZW5kZW5jaWVzPXtbZmlsdGVyLCBzZXRGaWx0ZXJdfT5cbiAgICAgICAgPEZpbHRlclByb3BlcnR5QXV0b2NvbXBsZXRlXG4gICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XG4gICAgICAgICAgZXJyb3JMaXN0ZW5lcj17ZXJyb3JMaXN0ZW5lcn1cbiAgICAgICAgLz5cbiAgICAgIDwvTWVtbz5cbiAgICA8L0ZpbHRlck5lZ2F0aW9uQ29udHJvbHM+XG4gIClcbn1cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKEZpbHRlckxlYWYpXG4iXX0=