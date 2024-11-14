import { __read } from "tslib";
import * as React from 'react';
import _cloneDeep from 'lodash.clonedeep';
import { hot } from 'react-hot-loader';
import SortSelections from './sort-selections';
import { useBackbone } from '../../component/selection-checkbox/useBackbone.hook';
/**
 * If we don't do this, we might muck with how backbone determines changes.  That's because we might modify the object directly, then update it.
 * So then it would see the set, determine there are no changes, and weird things would be afoot.
 * @param param0
 */
var getCopyOfSortsFromModel = function (_a) {
    var model = _a.model;
    return _cloneDeep(model.get('sorts'));
};
var PermanentSearchSort = function (_a) {
    var model = _a.model;
    var _b = __read(React.useState(getCopyOfSortsFromModel({ model: model })), 2), sorts = _b[0], setSorts = _b[1];
    var listenTo = useBackbone().listenTo;
    React.useEffect(function () {
        listenTo(model, 'change:sorts', function () {
            setSorts(getCopyOfSortsFromModel({ model: model }));
        });
    }, []);
    return (React.createElement(SortSelections, { value: sorts, onChange: function (newVal) {
            model.set('sorts', newVal);
            // something to do with this being an array causes the event not to trigger, I think?
            model.trigger('change:sorts');
        } }));
};
export default hot(module)(PermanentSearchSort);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWFuZW50LXNlYXJjaC1zb3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9xdWVyeS1zb3J0LXNlbGVjdGlvbi9wZXJtYW5lbnQtc2VhcmNoLXNvcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQTtBQUN6QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxjQUFjLE1BQU0sbUJBQW1CLENBQUE7QUFDOUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFEQUFxRCxDQUFBO0FBT2pGOzs7O0dBSUc7QUFDSCxJQUFNLHVCQUF1QixHQUFHLFVBQUMsRUFBZ0I7UUFBZCxLQUFLLFdBQUE7SUFDdEMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO0FBQ3ZDLENBQUMsQ0FBQTtBQUVELElBQU0sbUJBQW1CLEdBQUcsVUFBQyxFQUFnQjtRQUFkLEtBQUssV0FBQTtJQUM1QixJQUFBLEtBQUEsT0FBb0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxJQUFBLEVBQXJFLEtBQUssUUFBQSxFQUFFLFFBQVEsUUFBc0QsQ0FBQTtJQUNwRSxJQUFBLFFBQVEsR0FBSyxXQUFXLEVBQUUsU0FBbEIsQ0FBa0I7SUFDbEMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUNkLFFBQVEsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFO1lBQzlCLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzlDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTyxDQUNMLG9CQUFDLGNBQWMsSUFDYixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxVQUFDLE1BQU07WUFDZixLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQTtZQUMxQixxRkFBcUY7WUFDckYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUMvQixDQUFDLEdBQ0QsQ0FDSCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF9jbG9uZURlZXAgZnJvbSAnbG9kYXNoLmNsb25lZGVlcCdcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgU29ydFNlbGVjdGlvbnMgZnJvbSAnLi9zb3J0LXNlbGVjdGlvbnMnXG5pbXBvcnQgeyB1c2VCYWNrYm9uZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9zZWxlY3Rpb24tY2hlY2tib3gvdXNlQmFja2JvbmUuaG9vaydcbmltcG9ydCB7IFF1ZXJ5VHlwZSB9IGZyb20gJy4uLy4uL2pzL21vZGVsL1F1ZXJ5J1xuXG50eXBlIFByb3BzID0ge1xuICBtb2RlbDogUXVlcnlUeXBlXG59XG5cbi8qKlxuICogSWYgd2UgZG9uJ3QgZG8gdGhpcywgd2UgbWlnaHQgbXVjayB3aXRoIGhvdyBiYWNrYm9uZSBkZXRlcm1pbmVzIGNoYW5nZXMuICBUaGF0J3MgYmVjYXVzZSB3ZSBtaWdodCBtb2RpZnkgdGhlIG9iamVjdCBkaXJlY3RseSwgdGhlbiB1cGRhdGUgaXQuXG4gKiBTbyB0aGVuIGl0IHdvdWxkIHNlZSB0aGUgc2V0LCBkZXRlcm1pbmUgdGhlcmUgYXJlIG5vIGNoYW5nZXMsIGFuZCB3ZWlyZCB0aGluZ3Mgd291bGQgYmUgYWZvb3QuXG4gKiBAcGFyYW0gcGFyYW0wXG4gKi9cbmNvbnN0IGdldENvcHlPZlNvcnRzRnJvbU1vZGVsID0gKHsgbW9kZWwgfTogUHJvcHMpID0+IHtcbiAgcmV0dXJuIF9jbG9uZURlZXAobW9kZWwuZ2V0KCdzb3J0cycpKVxufVxuXG5jb25zdCBQZXJtYW5lbnRTZWFyY2hTb3J0ID0gKHsgbW9kZWwgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3NvcnRzLCBzZXRTb3J0c10gPSBSZWFjdC51c2VTdGF0ZShnZXRDb3B5T2ZTb3J0c0Zyb21Nb2RlbCh7IG1vZGVsIH0pKVxuICBjb25zdCB7IGxpc3RlblRvIH0gPSB1c2VCYWNrYm9uZSgpXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGlzdGVuVG8obW9kZWwsICdjaGFuZ2U6c29ydHMnLCAoKSA9PiB7XG4gICAgICBzZXRTb3J0cyhnZXRDb3B5T2ZTb3J0c0Zyb21Nb2RlbCh7IG1vZGVsIH0pKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxTb3J0U2VsZWN0aW9uc1xuICAgICAgdmFsdWU9e3NvcnRzfVxuICAgICAgb25DaGFuZ2U9eyhuZXdWYWwpID0+IHtcbiAgICAgICAgbW9kZWwuc2V0KCdzb3J0cycsIG5ld1ZhbClcbiAgICAgICAgLy8gc29tZXRoaW5nIHRvIGRvIHdpdGggdGhpcyBiZWluZyBhbiBhcnJheSBjYXVzZXMgdGhlIGV2ZW50IG5vdCB0byB0cmlnZ2VyLCBJIHRoaW5rP1xuICAgICAgICBtb2RlbC50cmlnZ2VyKCdjaGFuZ2U6c29ydHMnKVxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKFBlcm1hbmVudFNlYXJjaFNvcnQpXG4iXX0=