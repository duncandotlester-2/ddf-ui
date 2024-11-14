import { __read } from "tslib";
import * as React from 'react';
import { hot } from 'react-hot-loader';
import ResultItemCollection from './result-item.collection';
import Grid from '@mui/material/Grid';
import TableVisual from './table';
import Button from '@mui/material/Button';
import BackgroundInheritingDiv from '../../theme/background-inheriting-div';
import { LayoutContext } from '../../golden-layout/visual-settings.provider';
import { RESULTS_MODE } from '../settings-helpers';
export var ResultsViewContext = React.createContext({
    edit: null,
    setEdit: (function () { }),
});
var ResultsView = function (_a) {
    var selectionInterface = _a.selectionInterface, componentState = _a.componentState;
    var _b = React.useContext(LayoutContext), getValue = _b.getValue, setValue = _b.setValue;
    var _c = __read(React.useState(null), 2), mode = _c[0], setMode = _c[1];
    var _d = __read(React.useState(null), 2), edit = _d[0], setEdit = _d[1];
    React.useEffect(function () {
        setMode(getValue(RESULTS_MODE, componentState['results-mode']));
    }, []);
    React.useEffect(function () {
        mode && setValue(RESULTS_MODE, mode);
    }, [mode]);
    return (React.createElement(ResultsViewContext.Provider, { value: { edit: edit, setEdit: setEdit } },
        React.createElement(Grid, { container: true, direction: "column", className: "w-full h-full bg-inherit", wrap: "nowrap" },
            React.createElement(Grid, { className: "w-full h-full bg-inherit relative " },
                edit !== null ? (React.createElement(BackgroundInheritingDiv, { className: "absolute left-0 top-0 w-full h-full z-10" },
                    React.createElement("div", { className: "w-full h-full p-2" },
                        "Currently editing: ",
                        edit.plain.metacard.properties.title,
                        React.createElement(Button, { onClick: function () {
                                setEdit(null);
                            } }, "Cancel")))) : null,
                (function () {
                    if (mode === 'card') {
                        return (React.createElement(ResultItemCollection, { mode: mode, setMode: setMode, selectionInterface: selectionInterface }));
                    }
                    else {
                        return (React.createElement(TableVisual, { selectionInterface: selectionInterface, mode: mode, setMode: setMode }));
                    }
                })()))));
};
export default hot(module)(ResultsView);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy12aXN1YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvY29tcG9uZW50L3Zpc3VhbGl6YXRpb24vcmVzdWx0cy12aXN1YWwvcmVzdWx0cy12aXN1YWwudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxvQkFBb0IsTUFBTSwwQkFBMEIsQ0FBQTtBQUMzRCxPQUFPLElBQUksTUFBTSxvQkFBb0IsQ0FBQTtBQUNyQyxPQUFPLFdBQVcsTUFBTSxTQUFTLENBQUE7QUFRakMsT0FBTyxNQUFNLE1BQU0sc0JBQXNCLENBQUE7QUFDekMsT0FBTyx1QkFBdUIsTUFBTSx1Q0FBdUMsQ0FBQTtBQUMzRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sOENBQThDLENBQUE7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBU2xELE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUM7SUFDcEQsSUFBSSxFQUFFLElBQThCO0lBQ3BDLE9BQU8sRUFBRSxDQUFDLGNBQU8sQ0FBQyxDQUEyQztDQUM5RCxDQUFDLENBQUE7QUFFRixJQUFNLFdBQVcsR0FBRyxVQUFDLEVBQTZDO1FBQTNDLGtCQUFrQix3QkFBQSxFQUFFLGNBQWMsb0JBQUE7SUFDakQsSUFBQSxLQUF5QixLQUFLLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxFQUF0RCxRQUFRLGNBQUEsRUFBRSxRQUFRLGNBQW9DLENBQUE7SUFDeEQsSUFBQSxLQUFBLE9BQWtCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUEsRUFBckMsSUFBSSxRQUFBLEVBQUUsT0FBTyxRQUF3QixDQUFBO0lBQ3RDLElBQUEsS0FBQSxPQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLElBQThCLENBQUMsSUFBQSxFQUEvRCxJQUFJLFFBQUEsRUFBRSxPQUFPLFFBQWtELENBQUE7SUFFdEUsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDakUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBRU4sS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLElBQUksSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3RDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFFVixPQUFPLENBQ0wsb0JBQUMsa0JBQWtCLENBQUMsUUFBUSxJQUFDLEtBQUssRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFO1FBQ25ELG9CQUFDLElBQUksSUFDSCxTQUFTLFFBQ1QsU0FBUyxFQUFDLFFBQVEsRUFDbEIsU0FBUyxFQUFDLDBCQUEwQixFQUNwQyxJQUFJLEVBQUMsUUFBUTtZQUViLG9CQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsb0NBQW9DO2dCQUNqRCxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNmLG9CQUFDLHVCQUF1QixJQUFDLFNBQVMsRUFBQywwQ0FBMEM7b0JBQzNFLDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7O3dCQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLO3dCQUN4RCxvQkFBQyxNQUFNLElBQ0wsT0FBTyxFQUFFO2dDQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDZixDQUFDLGFBR00sQ0FDTCxDQUNrQixDQUMzQixDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUNQLENBQUM7b0JBQ0EsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO3dCQUNuQixPQUFPLENBQ0wsb0JBQUMsb0JBQW9CLElBQ25CLElBQUksRUFBRSxJQUFJLEVBQ1YsT0FBTyxFQUFFLE9BQU8sRUFDaEIsa0JBQWtCLEVBQUUsa0JBQWtCLEdBQ3RDLENBQ0gsQ0FBQTtxQkFDRjt5QkFBTTt3QkFDTCxPQUFPLENBQ0wsb0JBQUMsV0FBVyxJQUNWLGtCQUFrQixFQUFFLGtCQUFrQixFQUN0QyxJQUFJLEVBQUUsSUFBSSxFQUNWLE9BQU8sRUFBRSxPQUFPLEdBQ2hCLENBQ0gsQ0FBQTtxQkFDRjtnQkFDSCxDQUFDLENBQUMsRUFBRSxDQUNDLENBQ0YsQ0FDcUIsQ0FDL0IsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IFJlc3VsdEl0ZW1Db2xsZWN0aW9uIGZyb20gJy4vcmVzdWx0LWl0ZW0uY29sbGVjdGlvbidcbmltcG9ydCBHcmlkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvR3JpZCdcbmltcG9ydCBUYWJsZVZpc3VhbCBmcm9tICcuL3RhYmxlJ1xuLy8gQHRzLWV4cGVjdC1lcnJvciB0cy1taWdyYXRlKDYxMzMpIEZJWE1FOiAnQ2lyY3VsYXJQcm9ncmVzcycgaXMgZGVjbGFyZWQgYnV0IGl0cyB2YWx1ZSBpcyBuZS4uLiBSZW1vdmUgdGhpcyBjb21tZW50IHRvIHNlZSB0aGUgZnVsbCBlcnJvciBtZXNzYWdlXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbXVpL21hdGVyaWFsL0NpcmN1bGFyUHJvZ3Jlc3MnXG4vLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNjEzMykgRklYTUU6ICd1c2VMYXp5UmVzdWx0c0Zyb21TZWxlY3Rpb25JbnRlcmZhY2UnIGlzIGRlY2xhcmVkLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbmltcG9ydCB7IHVzZUxhenlSZXN1bHRzRnJvbVNlbGVjdGlvbkludGVyZmFjZSB9IGZyb20gJy4uLy4uL3NlbGVjdGlvbi1pbnRlcmZhY2UvaG9va3MnXG4vLyBAdHMtZXhwZWN0LWVycm9yIHRzLW1pZ3JhdGUoNjEzMykgRklYTUU6ICd1c2VTdGF0dXNPZkxhenlSZXN1bHRzJyBpcyBkZWNsYXJlZCBidXQgaXRzIHZhbHVlLi4uIFJlbW92ZSB0aGlzIGNvbW1lbnQgdG8gc2VlIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2VcbmltcG9ydCB7IHVzZVN0YXR1c09mTGF6eVJlc3VsdHMgfSBmcm9tICcuLi8uLi8uLi9qcy9tb2RlbC9MYXp5UXVlcnlSZXN1bHQvaG9va3MnXG5pbXBvcnQgeyBMYXp5UXVlcnlSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9qcy9tb2RlbC9MYXp5UXVlcnlSZXN1bHQvTGF6eVF1ZXJ5UmVzdWx0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbidcbmltcG9ydCBCYWNrZ3JvdW5kSW5oZXJpdGluZ0RpdiBmcm9tICcuLi8uLi90aGVtZS9iYWNrZ3JvdW5kLWluaGVyaXRpbmctZGl2J1xuaW1wb3J0IHsgTGF5b3V0Q29udGV4dCB9IGZyb20gJy4uLy4uL2dvbGRlbi1sYXlvdXQvdmlzdWFsLXNldHRpbmdzLnByb3ZpZGVyJ1xuaW1wb3J0IHsgUkVTVUxUU19NT0RFIH0gZnJvbSAnLi4vc2V0dGluZ3MtaGVscGVycydcbmltcG9ydCB7IFJlc3VsdHNTdGF0ZSB9IGZyb20gJy4uLy4uL2dvbGRlbi1sYXlvdXQvZ29sZGVuLWxheW91dC50eXBlcydcbnR5cGUgUHJvcHMgPSB7XG4gIHNlbGVjdGlvbkludGVyZmFjZTogYW55XG4gIGNvbXBvbmVudFN0YXRlOiBSZXN1bHRzU3RhdGVcbn1cblxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnY2FyZCcgfCAndGFibGUnXG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzVmlld0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgZWRpdDogbnVsbCBhcyBudWxsIHwgTGF6eVF1ZXJ5UmVzdWx0LFxuICBzZXRFZGl0OiAoKCkgPT4ge30pIGFzIFJlYWN0LkRpc3BhdGNoPG51bGwgfCBMYXp5UXVlcnlSZXN1bHQ+LFxufSlcblxuY29uc3QgUmVzdWx0c1ZpZXcgPSAoeyBzZWxlY3Rpb25JbnRlcmZhY2UsIGNvbXBvbmVudFN0YXRlIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZ2V0VmFsdWUsIHNldFZhbHVlIH0gPSBSZWFjdC51c2VDb250ZXh0KExheW91dENvbnRleHQpXG4gIGNvbnN0IFttb2RlLCBzZXRNb2RlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwgYXMgbnVsbCB8IExhenlRdWVyeVJlc3VsdClcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1vZGUoZ2V0VmFsdWUoUkVTVUxUU19NT0RFLCBjb21wb25lbnRTdGF0ZVsncmVzdWx0cy1tb2RlJ10pKVxuICB9LCBbXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIG1vZGUgJiYgc2V0VmFsdWUoUkVTVUxUU19NT0RFLCBtb2RlKVxuICB9LCBbbW9kZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVzdWx0c1ZpZXdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGVkaXQsIHNldEVkaXQgfX0+XG4gICAgICA8R3JpZFxuICAgICAgICBjb250YWluZXJcbiAgICAgICAgZGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBiZy1pbmhlcml0XCJcbiAgICAgICAgd3JhcD1cIm5vd3JhcFwiXG4gICAgICA+XG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctaW5oZXJpdCByZWxhdGl2ZSBcIj5cbiAgICAgICAgICB7ZWRpdCAhPT0gbnVsbCA/IChcbiAgICAgICAgICAgIDxCYWNrZ3JvdW5kSW5oZXJpdGluZ0RpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdG9wLTAgdy1mdWxsIGgtZnVsbCB6LTEwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBwLTJcIj5cbiAgICAgICAgICAgICAgICBDdXJyZW50bHkgZWRpdGluZzoge2VkaXQucGxhaW4ubWV0YWNhcmQucHJvcGVydGllcy50aXRsZX1cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVkaXQobnVsbClcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZ3JvdW5kSW5oZXJpdGluZ0Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICB7KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RlID09PSAnY2FyZCcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UmVzdWx0SXRlbUNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgICAgICAgICAgICBzZXRNb2RlPXtzZXRNb2RlfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uSW50ZXJmYWNlPXtzZWxlY3Rpb25JbnRlcmZhY2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGFibGVWaXN1YWxcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbkludGVyZmFjZT17c2VsZWN0aW9uSW50ZXJmYWNlfVxuICAgICAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgICAgIHNldE1vZGU9e3NldE1vZGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKCl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L1Jlc3VsdHNWaWV3Q29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShSZXN1bHRzVmlldylcbiJdfQ==