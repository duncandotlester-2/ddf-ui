import { __extends, __makeTemplateObject } from "tslib";
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
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import { IsButton, HighlightBehavior, GrabCursor } from '.';
/* stylelint-disable block-no-empty */
var Rearrange = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var RearrangeButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  z-index: 1;\n  position: absolute;\n  height: calc(0.5 * ", ");\n  line-height: calc(0.5 * ", ");\n"], ["\n  ", ";\n  ", ";\n  z-index: 1;\n  position: absolute;\n  height: calc(0.5 * ", ");\n  line-height: calc(0.5 * ", ");\n"])), function (props) { return IsButton(props.theme); }, HighlightBehavior({ initialOpacity: 0 }), function (props) { return props.theme.minimumButtonSize; }, function (props) { return props.theme.minimumButtonSize; });
var Down = styled(RearrangeButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  top: calc(100% - 0.5 * ", ");\n"], ["\n  top: calc(100% - 0.5 * ", ");\n"])), function (props) { return props.theme.minimumButtonSize; });
var Up = styled(RearrangeButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  top: 0px;\n"], ["\n  top: 0px;\n"])));
var RearrangeIcon = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"])));
var Drag = styled.button(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  vertical-align: middle;\n  position: absolute;\n  top: 0px;\n  height: 100%;\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  vertical-align: middle;\n  position: absolute;\n  top: 0px;\n  height: 100%;\n"])), function (props) { return IsButton(props.theme); }, function (props) {
    return HighlightBehavior({ initialOpacity: props.theme.minimumOpacity });
}, GrabCursor);
var RearrangeUp = function (props, forwardedRef) {
    var isTop = props.order.isTop;
    var handleClick = props.actions.moveUp;
    return (!isTop && (React.createElement(Up, { ref: forwardedRef, onClick: handleClick },
        React.createElement(RearrangeIcon, { className: "fa fa-angle-up" }))));
};
var RearrangeDown = function (props, forwardedRef) {
    var isBottom = props.order.isBottom;
    var handleClick = props.actions.moveDown;
    return (!isBottom && (React.createElement(Down, { ref: forwardedRef, onClick: handleClick },
        React.createElement(RearrangeIcon, { className: "fa fa-angle-down" }))));
};
var LayerRearrange = /** @class */ (function (_super) {
    __extends(LayerRearrange, _super);
    function LayerRearrange(props) {
        var _this = _super.call(this, props) || this;
        _this.down = React.createRef();
        _this.up = React.createRef();
        return _this;
    }
    LayerRearrange.prototype.componentDidMount = function () {
        var _a = this.props.order, isTop = _a.isTop, isBottom = _a.isBottom;
        var id = this.props.layerInfo.id;
        var focusModel = this.props.options.focusModel;
        if (focusModel.id === id) {
            var focusRef_1 = focusModel.isUp() ? this.up : this.down;
            focusRef_1 = isTop ? this.down : focusRef_1;
            focusRef_1 = isBottom ? this.up : focusRef_1;
            setTimeout(function () { return focusRef_1.current.focus(); }, 0);
        }
    };
    LayerRearrange.prototype.render = function () {
        return (React.createElement(Rearrange, null,
            RearrangeUp(this.props, this.up),
            RearrangeDown(this.props, this.down),
            React.createElement(Drag, { "data-id": "layer-rearrange-button", className: "layer-rearrange" },
                React.createElement("span", { className: "fa fa-arrows-v" }))));
    };
    return LayerRearrange;
}(React.Component));
export default hot(module)(LayerRearrange);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhcnJhbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9sYXllci1pdGVtL3ByZXNlbnRhdGlvbi9yZWFycmFuZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0osT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUE7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3RDLE9BQU8sRUFBcUIsUUFBUSxFQUFFLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLEdBQUcsQ0FBQTtBQUU5RSxzQ0FBc0M7QUFDdEMsSUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEdBQUcscUVBQUEsRUFBRSxJQUFBLENBQUE7QUFFOUIsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sOExBQUEsTUFDakMsRUFBZ0MsT0FDaEMsRUFBd0MsZ0VBR3JCLEVBQXdDLGdDQUNuQyxFQUF3QyxNQUNuRSxLQU5HLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsRUFDaEMsaUJBQWlCLENBQUMsRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFHckIsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUE3QixDQUE2QixFQUNuQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQTdCLENBQTZCLENBQ25FLENBQUE7QUFDRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLHdHQUFBLDZCQUNULEVBQXdDLE1BQ2xFLEtBRDBCLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBN0IsQ0FBNkIsQ0FDbEUsQ0FBQTtBQUNELElBQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsb0ZBQUEsaUJBRWpDLElBQUEsQ0FBQTtBQUNELElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLDBLQUFBLHVHQUtoQyxJQUFBLENBQUE7QUFFRCxJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxrTEFBQSxNQUN0QixFQUFnQyxPQUNoQyxFQUNpRSxPQUNqRSxFQUFVLHFGQUtiLEtBUkcsVUFBQyxLQUFLLElBQUssT0FBQSxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFyQixDQUFxQixFQUNoQyxVQUFDLEtBQUs7SUFDTixPQUFBLGlCQUFpQixDQUFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFBakUsQ0FBaUUsRUFDakUsVUFBVSxDQUtiLENBQUE7QUFDRCxJQUFNLFdBQVcsR0FBRyxVQUNsQixLQUF3QixFQUN4QixZQUFnRDtJQUV4QyxJQUFBLEtBQUssR0FBSyxLQUFLLENBQUMsS0FBSyxNQUFoQixDQUFnQjtJQUNyQixJQUFRLFdBQVcsR0FBSyxLQUFLLENBQUMsT0FBTyxPQUFsQixDQUFrQjtJQUU3QyxPQUFPLENBQ0wsQ0FBQyxLQUFLLElBQUksQ0FDUixvQkFBQyxFQUFFLElBQUMsR0FBRyxFQUFFLFlBQW1CLEVBQUUsT0FBTyxFQUFFLFdBQVc7UUFDaEQsb0JBQUMsYUFBYSxJQUFDLFNBQVMsRUFBQyxnQkFBZ0IsR0FBRyxDQUN6QyxDQUNOLENBQ0YsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELElBQU0sYUFBYSxHQUFHLFVBQ3BCLEtBQXdCLEVBQ3hCLFlBQWdEO0lBRXhDLElBQUEsUUFBUSxHQUFLLEtBQUssQ0FBQyxLQUFLLFNBQWhCLENBQWdCO0lBQ3hCLElBQVUsV0FBVyxHQUFLLEtBQUssQ0FBQyxPQUFPLFNBQWxCLENBQWtCO0lBRS9DLE9BQU8sQ0FDTCxDQUFDLFFBQVEsSUFBSSxDQUNYLG9CQUFDLElBQUksSUFBQyxHQUFHLEVBQUUsWUFBbUIsRUFBRSxPQUFPLEVBQUUsV0FBVztRQUNsRCxvQkFBQyxhQUFhLElBQUMsU0FBUyxFQUFDLGtCQUFrQixHQUFHLENBQ3pDLENBQ1IsQ0FDRixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBQ0Q7SUFBNkIsa0NBQXNDO0lBR2pFLHdCQUFZLEtBQXdCO1FBQXBDLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBR2I7UUFGQyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUM3QixLQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQTs7SUFDN0IsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNRLElBQUEsS0FBc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQXBDLEtBQUssV0FBQSxFQUFFLFFBQVEsY0FBcUIsQ0FBQTtRQUNwQyxJQUFBLEVBQUUsR0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBekIsQ0FBeUI7UUFDM0IsSUFBQSxVQUFVLEdBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLFdBQXZCLENBQXVCO1FBRXpDLElBQUksVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxVQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1lBQ3RELFVBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVEsQ0FBQTtZQUN2QyxVQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFRLENBQUE7WUFDeEMsVUFBVSxDQUFDLGNBQU0sT0FBQSxVQUFRLENBQUMsT0FBUSxDQUFDLEtBQUssRUFBRSxFQUF6QixDQUF5QixFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQy9DO0lBQ0gsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxPQUFPLENBQ0wsb0JBQUMsU0FBUztZQUNQLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQyxvQkFBQyxJQUFJLGVBQVMsd0JBQXdCLEVBQUMsU0FBUyxFQUFDLGlCQUFpQjtnQkFDaEUsOEJBQU0sU0FBUyxFQUFDLGdCQUFnQixHQUFHLENBQzlCLENBQ0csQ0FDYixDQUFBO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxDQUE2QixLQUFLLENBQUMsU0FBUyxHQWlDM0M7QUFFRCxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCB7IFByZXNlbnRhdGlvblByb3BzLCBJc0J1dHRvbiwgSGlnaGxpZ2h0QmVoYXZpb3IsIEdyYWJDdXJzb3IgfSBmcm9tICcuJ1xuXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBibG9jay1uby1lbXB0eSAqL1xuY29uc3QgUmVhcnJhbmdlID0gc3R5bGVkLmRpdmBgXG5cbmNvbnN0IFJlYXJyYW5nZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICR7KHByb3BzKSA9PiBJc0J1dHRvbihwcm9wcy50aGVtZSl9O1xuICAke0hpZ2hsaWdodEJlaGF2aW9yKHsgaW5pdGlhbE9wYWNpdHk6IDAgfSl9O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYygwLjUgKiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWluaW11bUJ1dHRvblNpemV9KTtcbiAgbGluZS1oZWlnaHQ6IGNhbGMoMC41ICogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1pbmltdW1CdXR0b25TaXplfSk7XG5gXG5jb25zdCBEb3duID0gc3R5bGVkKFJlYXJyYW5nZUJ1dHRvbilgXG4gIHRvcDogY2FsYygxMDAlIC0gMC41ICogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1pbmltdW1CdXR0b25TaXplfSk7XG5gXG5jb25zdCBVcCA9IHN0eWxlZChSZWFycmFuZ2VCdXR0b24pYFxuICB0b3A6IDBweDtcbmBcbmNvbnN0IFJlYXJyYW5nZUljb24gPSBzdHlsZWQuc3BhbmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbmBcblxuY29uc3QgRHJhZyA9IHN0eWxlZC5idXR0b25gXG4gICR7KHByb3BzKSA9PiBJc0J1dHRvbihwcm9wcy50aGVtZSl9O1xuICAkeyhwcm9wcykgPT5cbiAgICBIaWdobGlnaHRCZWhhdmlvcih7IGluaXRpYWxPcGFjaXR5OiBwcm9wcy50aGVtZS5taW5pbXVtT3BhY2l0eSB9KX07XG4gICR7R3JhYkN1cnNvcn07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbmBcbmNvbnN0IFJlYXJyYW5nZVVwID0gKFxuICBwcm9wczogUHJlc2VudGF0aW9uUHJvcHMsXG4gIGZvcndhcmRlZFJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50PlxuKSA9PiB7XG4gIGNvbnN0IHsgaXNUb3AgfSA9IHByb3BzLm9yZGVyXG4gIGNvbnN0IHsgbW92ZVVwOiBoYW5kbGVDbGljayB9ID0gcHJvcHMuYWN0aW9uc1xuXG4gIHJldHVybiAoXG4gICAgIWlzVG9wICYmIChcbiAgICAgIDxVcCByZWY9e2ZvcndhcmRlZFJlZiBhcyBhbnl9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPFJlYXJyYW5nZUljb24gY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtdXBcIiAvPlxuICAgICAgPC9VcD5cbiAgICApXG4gIClcbn1cblxuY29uc3QgUmVhcnJhbmdlRG93biA9IChcbiAgcHJvcHM6IFByZXNlbnRhdGlvblByb3BzLFxuICBmb3J3YXJkZWRSZWY6IFJlYWN0LlJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD5cbikgPT4ge1xuICBjb25zdCB7IGlzQm90dG9tIH0gPSBwcm9wcy5vcmRlclxuICBjb25zdCB7IG1vdmVEb3duOiBoYW5kbGVDbGljayB9ID0gcHJvcHMuYWN0aW9uc1xuXG4gIHJldHVybiAoXG4gICAgIWlzQm90dG9tICYmIChcbiAgICAgIDxEb3duIHJlZj17Zm9yd2FyZGVkUmVmIGFzIGFueX0gb25DbGljaz17aGFuZGxlQ2xpY2t9PlxuICAgICAgICA8UmVhcnJhbmdlSWNvbiBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1kb3duXCIgLz5cbiAgICAgIDwvRG93bj5cbiAgICApXG4gIClcbn1cbmNsYXNzIExheWVyUmVhcnJhbmdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByZXNlbnRhdGlvblByb3BzLCB7fT4ge1xuICBwcml2YXRlIGRvd246IFJlYWN0LlJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD5cbiAgcHJpdmF0ZSB1cDogUmVhY3QuUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50PlxuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJlc2VudGF0aW9uUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmRvd24gPSBSZWFjdC5jcmVhdGVSZWYoKVxuICAgIHRoaXMudXAgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpc1RvcCwgaXNCb3R0b20gfSA9IHRoaXMucHJvcHMub3JkZXJcbiAgICBjb25zdCB7IGlkIH0gPSB0aGlzLnByb3BzLmxheWVySW5mb1xuICAgIGNvbnN0IHsgZm9jdXNNb2RlbCB9ID0gdGhpcy5wcm9wcy5vcHRpb25zXG5cbiAgICBpZiAoZm9jdXNNb2RlbC5pZCA9PT0gaWQpIHtcbiAgICAgIGxldCBmb2N1c1JlZiA9IGZvY3VzTW9kZWwuaXNVcCgpID8gdGhpcy51cCA6IHRoaXMuZG93blxuICAgICAgZm9jdXNSZWYgPSBpc1RvcCA/IHRoaXMuZG93biA6IGZvY3VzUmVmXG4gICAgICBmb2N1c1JlZiA9IGlzQm90dG9tID8gdGhpcy51cCA6IGZvY3VzUmVmXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGZvY3VzUmVmLmN1cnJlbnQhLmZvY3VzKCksIDApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhcnJhbmdlPlxuICAgICAgICB7UmVhcnJhbmdlVXAodGhpcy5wcm9wcywgdGhpcy51cCl9XG4gICAgICAgIHtSZWFycmFuZ2VEb3duKHRoaXMucHJvcHMsIHRoaXMuZG93bil9XG4gICAgICAgIDxEcmFnIGRhdGEtaWQ9XCJsYXllci1yZWFycmFuZ2UtYnV0dG9uXCIgY2xhc3NOYW1lPVwibGF5ZXItcmVhcnJhbmdlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3dzLXZcIiAvPlxuICAgICAgICA8L0RyYWc+XG4gICAgICA8L1JlYXJyYW5nZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaG90KG1vZHVsZSkoTGF5ZXJSZWFycmFuZ2UpXG4iXX0=