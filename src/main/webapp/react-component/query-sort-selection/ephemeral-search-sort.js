import { __read } from "tslib";
import * as React from 'react';
import { hot } from 'react-hot-loader';
import SortSelections from './sort-selections';
import { useBackbone } from '../../component/selection-checkbox/useBackbone.hook';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import user from '../../component/singletons/user-instance';
var getResultSort = function () {
    return user.get('user').get('preferences').get('resultSort') || [];
};
var PermanentSearchSort = function (_a) {
    var closeDropdown = _a.closeDropdown;
    var _b = __read(React.useState(getResultSort()), 2), sorts = _b[0], setSorts = _b[1];
    var _c = __read(React.useState(sorts.length > 0), 2), hasSort = _c[0], setHasSort = _c[1];
    var listenTo = useBackbone().listenTo;
    React.useEffect(function () {
        listenTo(user.get('user').get('preferences'), 'change:resultSort', function () {
            var resultSort = getResultSort();
            setHasSort(resultSort !== undefined && resultSort.length > 0);
            setSorts(resultSort);
        });
    }, []);
    var removeSort = function () {
        user.get('user').get('preferences').set('resultSort', '');
        user.get('user').get('preferences').savePreferences();
        closeDropdown();
    };
    var saveSort = function () {
        user
            .get('user')
            .get('preferences')
            .set('resultSort', sorts.length === 0 ? undefined : sorts);
        user.get('user').get('preferences').savePreferences();
        closeDropdown();
        // once again, something is weird with arrays and backbone?
        user.get('user').get('preferences').trigger('change:resultSort');
    };
    return (React.createElement("div", { "data-id": "results-sort-container", className: "min-w-120" },
        React.createElement("div", { className: "pb-2" },
            React.createElement(SortSelections, { value: sorts, onChange: function (newVal) {
                    setSorts(newVal);
                } })),
        React.createElement(Grid, { container: true, direction: "row", alignItems: "center", wrap: "nowrap" },
            hasSort ? (React.createElement(Grid, { item: true, className: "w-full" },
                React.createElement(Button, { "data-id": "remove-all-results-sorts-button", fullWidth: true, onClick: removeSort, variant: "text", color: "secondary" }, "Remove Sort"))) : null,
            React.createElement(Grid, { item: true, className: "w-full" },
                React.createElement(Button, { "data-id": "save-results-sorts-button", fullWidth: true, onClick: saveSort, variant: "contained", color: "primary" }, "Save Sort")))));
};
export default hot(module)(PermanentSearchSort);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXBoZW1lcmFsLXNlYXJjaC1zb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9xdWVyeS1zb3J0LXNlbGVjdGlvbi9lcGhlbWVyYWwtc2VhcmNoLXNvcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxjQUFjLE1BQU0sbUJBQW1CLENBQUE7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFEQUFxRCxDQUFBO0FBQ2pGLE9BQU8sSUFBSSxNQUFNLG9CQUFvQixDQUFBO0FBQ3JDLE9BQU8sTUFBTSxNQUFNLHNCQUFzQixDQUFBO0FBQ3pDLE9BQU8sSUFBSSxNQUFNLDBDQUEwQyxDQUFBO0FBRTNELElBQU0sYUFBYSxHQUFHO0lBQ3BCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtBQUNwRSxDQUFDLENBQUE7QUFNRCxJQUFNLG1CQUFtQixHQUFHLFVBQUMsRUFBd0I7UUFBdEIsYUFBYSxtQkFBQTtJQUNwQyxJQUFBLEtBQUEsT0FBb0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFBLEVBQWxELEtBQUssUUFBQSxFQUFFLFFBQVEsUUFBbUMsQ0FBQTtJQUNuRCxJQUFBLEtBQUEsT0FBd0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFBLEVBQXZELE9BQU8sUUFBQSxFQUFFLFVBQVUsUUFBb0MsQ0FBQTtJQUN0RCxJQUFBLFFBQVEsR0FBSyxXQUFXLEVBQUUsU0FBbEIsQ0FBa0I7SUFFbEMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBbUIsRUFBRTtZQUNqRSxJQUFNLFVBQVUsR0FBRyxhQUFhLEVBQUUsQ0FBQTtZQUNsQyxVQUFVLENBQUMsVUFBVSxLQUFLLFNBQVMsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzdELFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNOLElBQU0sVUFBVSxHQUFHO1FBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUE7UUFDckQsYUFBYSxFQUFFLENBQUE7SUFDakIsQ0FBQyxDQUFBO0lBQ0QsSUFBTSxRQUFRLEdBQUc7UUFDZixJQUFJO2FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQzthQUNYLEdBQUcsQ0FBQyxhQUFhLENBQUM7YUFDbEIsR0FBRyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUU1RCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUNyRCxhQUFhLEVBQUUsQ0FBQTtRQUNmLDJEQUEyRDtRQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUNsRSxDQUFDLENBQUE7SUFDRCxPQUFPLENBQ0wsd0NBQWEsd0JBQXdCLEVBQUMsU0FBUyxFQUFDLFdBQVc7UUFDekQsNkJBQUssU0FBUyxFQUFDLE1BQU07WUFDbkIsb0JBQUMsY0FBYyxJQUNiLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFVBQUMsTUFBTTtvQkFDZixRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ2xCLENBQUMsR0FDRCxDQUNFO1FBQ04sb0JBQUMsSUFBSSxJQUFDLFNBQVMsUUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDLFFBQVE7WUFDOUQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNULG9CQUFDLElBQUksSUFBQyxJQUFJLFFBQUMsU0FBUyxFQUFDLFFBQVE7Z0JBQzNCLG9CQUFDLE1BQU0sZUFDRyxpQ0FBaUMsRUFDekMsU0FBUyxRQUNULE9BQU8sRUFBRSxVQUFVLEVBQ25CLE9BQU8sRUFBQyxNQUFNLEVBQ2QsS0FBSyxFQUFDLFdBQVcsa0JBR1YsQ0FDSixDQUNSLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDUixvQkFBQyxJQUFJLElBQUMsSUFBSSxRQUFDLFNBQVMsRUFBQyxRQUFRO2dCQUMzQixvQkFBQyxNQUFNLGVBQ0csMkJBQTJCLEVBQ25DLFNBQVMsUUFDVCxPQUFPLEVBQUUsUUFBUSxFQUNqQixPQUFPLEVBQUMsV0FBVyxFQUNuQixLQUFLLEVBQUMsU0FBUyxnQkFHUixDQUNKLENBQ0YsQ0FDSCxDQUNQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IFNvcnRTZWxlY3Rpb25zIGZyb20gJy4vc29ydC1zZWxlY3Rpb25zJ1xuaW1wb3J0IHsgdXNlQmFja2JvbmUgfSBmcm9tICcuLi8uLi9jb21wb25lbnQvc2VsZWN0aW9uLWNoZWNrYm94L3VzZUJhY2tib25lLmhvb2snXG5pbXBvcnQgR3JpZCBmcm9tICdAbXVpL21hdGVyaWFsL0dyaWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJ1xuaW1wb3J0IHVzZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L3NpbmdsZXRvbnMvdXNlci1pbnN0YW5jZSdcblxuY29uc3QgZ2V0UmVzdWx0U29ydCA9ICgpID0+IHtcbiAgcmV0dXJuIHVzZXIuZ2V0KCd1c2VyJykuZ2V0KCdwcmVmZXJlbmNlcycpLmdldCgncmVzdWx0U29ydCcpIHx8IFtdXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNsb3NlRHJvcGRvd246ICgpID0+IHZvaWRcbn1cblxuY29uc3QgUGVybWFuZW50U2VhcmNoU29ydCA9ICh7IGNsb3NlRHJvcGRvd24gfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3NvcnRzLCBzZXRTb3J0c10gPSBSZWFjdC51c2VTdGF0ZShnZXRSZXN1bHRTb3J0KCkpXG4gIGNvbnN0IFtoYXNTb3J0LCBzZXRIYXNTb3J0XSA9IFJlYWN0LnVzZVN0YXRlKHNvcnRzLmxlbmd0aCA+IDApXG4gIGNvbnN0IHsgbGlzdGVuVG8gfSA9IHVzZUJhY2tib25lKClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpc3RlblRvKHVzZXIuZ2V0KCd1c2VyJykuZ2V0KCdwcmVmZXJlbmNlcycpLCAnY2hhbmdlOnJlc3VsdFNvcnQnLCAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHRTb3J0ID0gZ2V0UmVzdWx0U29ydCgpXG4gICAgICBzZXRIYXNTb3J0KHJlc3VsdFNvcnQgIT09IHVuZGVmaW5lZCAmJiByZXN1bHRTb3J0Lmxlbmd0aCA+IDApXG4gICAgICBzZXRTb3J0cyhyZXN1bHRTb3J0KVxuICAgIH0pXG4gIH0sIFtdKVxuICBjb25zdCByZW1vdmVTb3J0ID0gKCkgPT4ge1xuICAgIHVzZXIuZ2V0KCd1c2VyJykuZ2V0KCdwcmVmZXJlbmNlcycpLnNldCgncmVzdWx0U29ydCcsICcnKVxuICAgIHVzZXIuZ2V0KCd1c2VyJykuZ2V0KCdwcmVmZXJlbmNlcycpLnNhdmVQcmVmZXJlbmNlcygpXG4gICAgY2xvc2VEcm9wZG93bigpXG4gIH1cbiAgY29uc3Qgc2F2ZVNvcnQgPSAoKSA9PiB7XG4gICAgdXNlclxuICAgICAgLmdldCgndXNlcicpXG4gICAgICAuZ2V0KCdwcmVmZXJlbmNlcycpXG4gICAgICAuc2V0KCdyZXN1bHRTb3J0Jywgc29ydHMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogc29ydHMpXG5cbiAgICB1c2VyLmdldCgndXNlcicpLmdldCgncHJlZmVyZW5jZXMnKS5zYXZlUHJlZmVyZW5jZXMoKVxuICAgIGNsb3NlRHJvcGRvd24oKVxuICAgIC8vIG9uY2UgYWdhaW4sIHNvbWV0aGluZyBpcyB3ZWlyZCB3aXRoIGFycmF5cyBhbmQgYmFja2JvbmU/XG4gICAgdXNlci5nZXQoJ3VzZXInKS5nZXQoJ3ByZWZlcmVuY2VzJykudHJpZ2dlcignY2hhbmdlOnJlc3VsdFNvcnQnKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLWlkPVwicmVzdWx0cy1zb3J0LWNvbnRhaW5lclwiIGNsYXNzTmFtZT1cIm1pbi13LTEyMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0yXCI+XG4gICAgICAgIDxTb3J0U2VsZWN0aW9uc1xuICAgICAgICAgIHZhbHVlPXtzb3J0c31cbiAgICAgICAgICBvbkNoYW5nZT17KG5ld1ZhbCkgPT4ge1xuICAgICAgICAgICAgc2V0U29ydHMobmV3VmFsKVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJyb3dcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgd3JhcD1cIm5vd3JhcFwiPlxuICAgICAgICB7aGFzU29ydCA/IChcbiAgICAgICAgICA8R3JpZCBpdGVtIGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkYXRhLWlkPVwicmVtb3ZlLWFsbC1yZXN1bHRzLXNvcnRzLWJ1dHRvblwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBvbkNsaWNrPXtyZW1vdmVTb3J0fVxuICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVtb3ZlIFNvcnRcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxHcmlkIGl0ZW0gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZGF0YS1pZD1cInNhdmUtcmVzdWx0cy1zb3J0cy1idXR0b25cIlxuICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICBvbkNsaWNrPXtzYXZlU29ydH1cbiAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlIFNvcnRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKFBlcm1hbmVudFNlYXJjaFNvcnQpXG4iXX0=