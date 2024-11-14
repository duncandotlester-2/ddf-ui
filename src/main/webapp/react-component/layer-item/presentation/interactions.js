import { __assign, __makeTemplateObject } from "tslib";
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
import { IsButton, HighlightBehavior } from '.';
var Interactions = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  text-align: right;\n"], ["\n  text-align: right;\n"])));
var InteractionsButton = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  width: ", ";\n  height: ", ";\n  vertical-align: top;\n"], ["\n  ", ";\n  ", ";\n  width: ", ";\n  height: ", ";\n  vertical-align: top;\n"])), function (props) { return IsButton(props.theme); }, function (props) {
    return HighlightBehavior({ initialOpacity: props.theme.minimumOpacity });
}, function (props) { return props.theme.minimumButtonSize; }, function (props) { return props.theme.minimumButtonSize; });
var Warning = styled(InteractionsButton)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-block;\n  color: ", ";\n  cursor: default;\n"], ["\n  display: inline-block;\n  color: ", ";\n  cursor: default;\n"
    /* stylelint-disable block-no-empty */
])), function (props) { return props.theme.warningColor; });
/* stylelint-disable block-no-empty */
var Remove = styled(InteractionsButton)(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var Show = styled(InteractionsButton)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  display: inline-block !important;\n  vertical-align: middle;\n"], ["\n  position: relative;\n  display: inline-block !important;\n  vertical-align: middle;\n"])));
var ShowIcon = styled.span(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  display: inline;\n"], ["\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  display: inline;\n"])));
var ContentShow = function (_a) {
    var visibility = _a.visibility;
    var className = "fa ".concat(visibility.show ? 'fa-eye' : 'fa-eye-slash');
    return React.createElement(ShowIcon, { className: className });
};
var render = function (props) {
    var _a = props.layerInfo, isRemovable = _a.isRemovable, _b = _a.warning, warning = _b === void 0 ? '' : _b;
    var _c = props.actions, updateLayerShow = _c.updateLayerShow, onRemove = _c.onRemove;
    return (React.createElement(Interactions, null,
        warning !== '' && (React.createElement(Warning, { "data-id": "view-warnings-button", "data-help": "View map layer warnings.", title: warning },
            React.createElement("span", { className: " fa fa-warning" }))),
        isRemovable && (React.createElement(Remove, { "data-id": "remove-layer-button", "data-help": "Remove map layer from user preferences.", title: "Remove map layer from user preferences.", onClick: onRemove },
            React.createElement("span", { className: "fa fa-minus" }))),
        React.createElement(Show, { "data-id": "visibility-button", "data-help": "Toggle layer visibility.", title: "Toggle layer visibility.", onClick: updateLayerShow },
            React.createElement(ContentShow, __assign({}, props)))));
};
export var LayerInteractions = hot(module)(render);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJhY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9sYXllci1pdGVtL3ByZXNlbnRhdGlvbi9pbnRlcmFjdGlvbnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0osT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUE7QUFDOUIsT0FBTyxNQUFNLE1BQU0sbUJBQW1CLENBQUE7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBQ3RDLE9BQU8sRUFBcUIsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sR0FBRyxDQUFBO0FBRWxFLElBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxHQUFHLDZGQUFBLDBCQUU5QixJQUFBLENBQUE7QUFFRCxJQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxNQUFNLGtKQUFBLE1BQ3BDLEVBQWdDLE9BQ2hDLEVBQ2lFLGNBQzFELEVBQXdDLGVBQ3ZDLEVBQXdDLDZCQUVuRCxLQU5HLFVBQUMsS0FBSyxJQUFLLE9BQUEsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBckIsQ0FBcUIsRUFDaEMsVUFBQyxLQUFLO0lBQ04sT0FBQSxpQkFBaUIsQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQWpFLENBQWlFLEVBQzFELFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBN0IsQ0FBNkIsRUFDdkMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUE3QixDQUE2QixDQUVuRCxDQUFBO0FBRUQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLHFJQUFBLHVDQUUvQixFQUFtQyx5QkFFN0M7SUFDRCxzQ0FBc0M7S0FIM0IsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBeEIsQ0FBd0IsQ0FFN0MsQ0FBQTtBQUNELHNDQUFzQztBQUN0QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUMscUVBQUEsRUFBRSxJQUFBLENBQUE7QUFFM0MsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLDhKQUFBLDJGQUl0QyxJQUFBLENBQUE7QUFFRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSw4TEFBQSwySEFNM0IsSUFBQSxDQUFBO0FBRUQsSUFBTSxXQUFXLEdBQUcsVUFBQyxFQUFpQztRQUEvQixVQUFVLGdCQUFBO0lBQy9CLElBQU0sU0FBUyxHQUFHLGFBQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUUsQ0FBQTtJQUNyRSxPQUFPLG9CQUFDLFFBQVEsSUFBQyxTQUFTLEVBQUUsU0FBUyxHQUFJLENBQUE7QUFDM0MsQ0FBQyxDQUFBO0FBRUQsSUFBTSxNQUFNLEdBQUcsVUFBQyxLQUF3QjtJQUNoQyxJQUFBLEtBQWdDLEtBQUssQ0FBQyxTQUFTLEVBQTdDLFdBQVcsaUJBQUEsRUFBRSxlQUFZLEVBQVosT0FBTyxtQkFBRyxFQUFFLEtBQW9CLENBQUE7SUFDL0MsSUFBQSxLQUFnQyxLQUFLLENBQUMsT0FBTyxFQUEzQyxlQUFlLHFCQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFBO0lBQ25ELE9BQU8sQ0FDTCxvQkFBQyxZQUFZO1FBQ1YsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUNqQixvQkFBQyxPQUFPLGVBQ0Usc0JBQXNCLGVBQ3BCLDBCQUEwQixFQUNwQyxLQUFLLEVBQUUsT0FBTztZQUVkLDhCQUFNLFNBQVMsRUFBQyxnQkFBZ0IsR0FBRyxDQUMzQixDQUNYO1FBRUEsV0FBVyxJQUFJLENBQ2Qsb0JBQUMsTUFBTSxlQUNHLHFCQUFxQixlQUNuQix5Q0FBeUMsRUFDbkQsS0FBSyxFQUFDLHlDQUF5QyxFQUMvQyxPQUFPLEVBQUUsUUFBUTtZQUVqQiw4QkFBTSxTQUFTLEVBQUMsYUFBYSxHQUFHLENBQ3pCLENBQ1Y7UUFFRCxvQkFBQyxJQUFJLGVBQ0ssbUJBQW1CLGVBQ2pCLDBCQUEwQixFQUNwQyxLQUFLLEVBQUMsMEJBQTBCLEVBQ2hDLE9BQU8sRUFBRSxlQUFlO1lBRXhCLG9CQUFDLFdBQVcsZUFBSyxLQUFLLEVBQUksQ0FDckIsQ0FDTSxDQUNoQixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLElBQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyJ1xuaW1wb3J0IHsgUHJlc2VudGF0aW9uUHJvcHMsIElzQnV0dG9uLCBIaWdobGlnaHRCZWhhdmlvciB9IGZyb20gJy4nXG5cbmNvbnN0IEludGVyYWN0aW9ucyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuYFxuXG5jb25zdCBJbnRlcmFjdGlvbnNCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICAkeyhwcm9wcykgPT4gSXNCdXR0b24ocHJvcHMudGhlbWUpfTtcbiAgJHsocHJvcHMpID0+XG4gICAgSGlnaGxpZ2h0QmVoYXZpb3IoeyBpbml0aWFsT3BhY2l0eTogcHJvcHMudGhlbWUubWluaW11bU9wYWNpdHkgfSl9O1xuICB3aWR0aDogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLm1pbmltdW1CdXR0b25TaXplfTtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUubWluaW11bUJ1dHRvblNpemV9O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuYFxuXG5jb25zdCBXYXJuaW5nID0gc3R5bGVkKEludGVyYWN0aW9uc0J1dHRvbilgXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS53YXJuaW5nQ29sb3J9O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG5gXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBibG9jay1uby1lbXB0eSAqL1xuY29uc3QgUmVtb3ZlID0gc3R5bGVkKEludGVyYWN0aW9uc0J1dHRvbilgYFxuXG5jb25zdCBTaG93ID0gc3R5bGVkKEludGVyYWN0aW9uc0J1dHRvbilgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5gXG5cbmNvbnN0IFNob3dJY29uID0gc3R5bGVkLnNwYW5gXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGRpc3BsYXk6IGlubGluZTtcbmBcblxuY29uc3QgQ29udGVudFNob3cgPSAoeyB2aXNpYmlsaXR5IH06IFByZXNlbnRhdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzTmFtZSA9IGBmYSAke3Zpc2liaWxpdHkuc2hvdyA/ICdmYS1leWUnIDogJ2ZhLWV5ZS1zbGFzaCd9YFxuICByZXR1cm4gPFNob3dJY29uIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSAvPlxufVxuXG5jb25zdCByZW5kZXIgPSAocHJvcHM6IFByZXNlbnRhdGlvblByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXNSZW1vdmFibGUsIHdhcm5pbmcgPSAnJyB9ID0gcHJvcHMubGF5ZXJJbmZvXG4gIGNvbnN0IHsgdXBkYXRlTGF5ZXJTaG93LCBvblJlbW92ZSB9ID0gcHJvcHMuYWN0aW9uc1xuICByZXR1cm4gKFxuICAgIDxJbnRlcmFjdGlvbnM+XG4gICAgICB7d2FybmluZyAhPT0gJycgJiYgKFxuICAgICAgICA8V2FybmluZ1xuICAgICAgICAgIGRhdGEtaWQ9XCJ2aWV3LXdhcm5pbmdzLWJ1dHRvblwiXG4gICAgICAgICAgZGF0YS1oZWxwPVwiVmlldyBtYXAgbGF5ZXIgd2FybmluZ3MuXCJcbiAgICAgICAgICB0aXRsZT17d2FybmluZ31cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiBmYSBmYS13YXJuaW5nXCIgLz5cbiAgICAgICAgPC9XYXJuaW5nPlxuICAgICAgKX1cblxuICAgICAge2lzUmVtb3ZhYmxlICYmIChcbiAgICAgICAgPFJlbW92ZVxuICAgICAgICAgIGRhdGEtaWQ9XCJyZW1vdmUtbGF5ZXItYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLWhlbHA9XCJSZW1vdmUgbWFwIGxheWVyIGZyb20gdXNlciBwcmVmZXJlbmNlcy5cIlxuICAgICAgICAgIHRpdGxlPVwiUmVtb3ZlIG1hcCBsYXllciBmcm9tIHVzZXIgcHJlZmVyZW5jZXMuXCJcbiAgICAgICAgICBvbkNsaWNrPXtvblJlbW92ZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLW1pbnVzXCIgLz5cbiAgICAgICAgPC9SZW1vdmU+XG4gICAgICApfVxuXG4gICAgICA8U2hvd1xuICAgICAgICBkYXRhLWlkPVwidmlzaWJpbGl0eS1idXR0b25cIlxuICAgICAgICBkYXRhLWhlbHA9XCJUb2dnbGUgbGF5ZXIgdmlzaWJpbGl0eS5cIlxuICAgICAgICB0aXRsZT1cIlRvZ2dsZSBsYXllciB2aXNpYmlsaXR5LlwiXG4gICAgICAgIG9uQ2xpY2s9e3VwZGF0ZUxheWVyU2hvd31cbiAgICAgID5cbiAgICAgICAgPENvbnRlbnRTaG93IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvU2hvdz5cbiAgICA8L0ludGVyYWN0aW9ucz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgTGF5ZXJJbnRlcmFjdGlvbnMgPSBob3QobW9kdWxlKShyZW5kZXIpXG4iXX0=