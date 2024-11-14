import { __read } from "tslib";
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { useBackbone } from '../selection-checkbox/useBackbone.hook';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
var Phonetics = function (_a) {
    var model = _a.model;
    var _b = __read(React.useState(Boolean(model.get('phonetics'))), 2), phonetics = _b[0], setPhonetics = _b[1];
    var listenTo = useBackbone().listenTo;
    React.useEffect(function () {
        listenTo(model, 'change:phonetics', function () {
            setPhonetics(model.get('phonetics'));
        });
    }, []);
    return (React.createElement(FormControlLabel, { labelPlacement: "start", control: React.createElement(Checkbox, { color: "default", checked: phonetics, onChange: function (e) {
                model.set('phonetics', e.target.checked);
            } }), label: "Similar word matching" }));
};
export default hot(module)(Phonetics);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmV0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudC9xdWVyeS1zZXR0aW5ncy9waG9uZXRpY3MudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3BFLE9BQU8sZ0JBQWdCLE1BQU0sZ0NBQWdDLENBQUE7QUFDN0QsT0FBTyxRQUFRLE1BQU0sd0JBQXdCLENBQUE7QUFPN0MsSUFBTSxTQUFTLEdBQUcsVUFBQyxFQUFnQjtRQUFkLEtBQUssV0FBQTtJQUNsQixJQUFBLEtBQUEsT0FBNEIsS0FBSyxDQUFDLFFBQVEsQ0FDOUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDaEMsSUFBQSxFQUZNLFNBQVMsUUFBQSxFQUFFLFlBQVksUUFFN0IsQ0FBQTtJQUNPLElBQUEsUUFBUSxHQUFLLFdBQVcsRUFBRSxTQUFsQixDQUFrQjtJQUNsQyxLQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2QsUUFBUSxDQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRTtZQUNsQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ04sT0FBTyxDQUNMLG9CQUFDLGdCQUFnQixJQUNmLGNBQWMsRUFBQyxPQUFPLEVBQ3RCLE9BQU8sRUFDTCxvQkFBQyxRQUFRLElBQ1AsS0FBSyxFQUFDLFNBQVMsRUFDZixPQUFPLEVBQUUsU0FBUyxFQUNsQixRQUFRLEVBQUUsVUFBQyxDQUFDO2dCQUNWLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUMsQ0FBQyxHQUNELEVBRUosS0FBSyxFQUFDLHVCQUF1QixHQUM3QixDQUNILENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCB7IHVzZUJhY2tib25lIH0gZnJvbSAnLi4vc2VsZWN0aW9uLWNoZWNrYm94L3VzZUJhY2tib25lLmhvb2snXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sTGFiZWwnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG11aS9tYXRlcmlhbC9DaGVja2JveCdcbmltcG9ydCB7IFF1ZXJ5VHlwZSB9IGZyb20gJy4uLy4uL2pzL21vZGVsL1F1ZXJ5J1xuXG50eXBlIFByb3BzID0ge1xuICBtb2RlbDogUXVlcnlUeXBlXG59XG5cbmNvbnN0IFBob25ldGljcyA9ICh7IG1vZGVsIH06IFByb3BzKSA9PiB7XG4gIGNvbnN0IFtwaG9uZXRpY3MsIHNldFBob25ldGljc10gPSBSZWFjdC51c2VTdGF0ZShcbiAgICBCb29sZWFuKG1vZGVsLmdldCgncGhvbmV0aWNzJykpXG4gIClcbiAgY29uc3QgeyBsaXN0ZW5UbyB9ID0gdXNlQmFja2JvbmUoKVxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxpc3RlblRvKG1vZGVsLCAnY2hhbmdlOnBob25ldGljcycsICgpID0+IHtcbiAgICAgIHNldFBob25ldGljcyhtb2RlbC5nZXQoJ3Bob25ldGljcycpKVxuICAgIH0pXG4gIH0sIFtdKVxuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICBsYWJlbFBsYWNlbWVudD1cInN0YXJ0XCJcbiAgICAgIGNvbnRyb2w9e1xuICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICBjb2xvcj1cImRlZmF1bHRcIlxuICAgICAgICAgIGNoZWNrZWQ9e3Bob25ldGljc31cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLnNldCgncGhvbmV0aWNzJywgZS50YXJnZXQuY2hlY2tlZClcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgfVxuICAgICAgbGFiZWw9XCJTaW1pbGFyIHdvcmQgbWF0Y2hpbmdcIlxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoUGhvbmV0aWNzKVxuIl19