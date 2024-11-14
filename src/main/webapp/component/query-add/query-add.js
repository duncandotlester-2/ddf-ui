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
import { __read } from "tslib";
import * as React from 'react';
import QueryBasic from '../../component/query-basic/query-basic.view';
import QueryAdvanced from '../../component/query-advanced/query-advanced';
import { useListenTo } from '../selection-checkbox/useBackbone.hook';
export var queryForms = [
    { id: 'basic', title: 'Basic Search', view: QueryBasic },
    {
        id: 'advanced',
        title: 'Advanced Search',
        view: QueryAdvanced,
    },
];
export var QueryAddReact = function (_a) {
    var model = _a.model, errorListener = _a.errorListener, Extensions = _a.Extensions;
    var _b = __read(React.useState(Math.random()), 2), setForceRender = _b[1];
    useListenTo(model, 'resetToDefaults change:type', function () {
        setForceRender(Math.random());
    });
    var formType = model.get('type');
    var form = queryForms.find(function (form) { return form.id === formType; }) || queryForms[0];
    return (React.createElement(React.Fragment, null,
        React.createElement("form", { target: "autocomplete", action: "/search/catalog/blank.html", className: "w-full" }, (function () {
            if (form.id === 'basic') {
                return (React.createElement(QueryBasic, { model: model, key: model.id, errorListener: errorListener, Extensions: Extensions }));
            }
            else {
                return (React.createElement(QueryAdvanced, { model: model, key: model.id, errorListener: errorListener, Extensions: Extensions }));
            }
        })())));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnktYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudC9xdWVyeS1hZGQvcXVlcnktYWRkLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJOztBQUVKLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBQzlCLE9BQU8sVUFBVSxNQUFNLDhDQUE4QyxDQUFBO0FBRXJFLE9BQU8sYUFBYSxNQUFNLCtDQUErQyxDQUFBO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQTtBQUVwRSxNQUFNLENBQUMsSUFBTSxVQUFVLEdBQUc7SUFDeEIsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtJQUN4RDtRQUNFLEVBQUUsRUFBRSxVQUFVO1FBQ2QsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixJQUFJLEVBQUUsYUFBYTtLQUNwQjtDQUNGLENBQUE7QUFVRCxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQUcsVUFBQyxFQUlWO1FBSGxCLEtBQUssV0FBQSxFQUNMLGFBQWEsbUJBQUEsRUFDYixVQUFVLGdCQUFBO0lBRUosSUFBQSxLQUFBLE9BQXFCLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUEsRUFBL0MsY0FBYyxRQUFpQyxDQUFBO0lBQ3hELFdBQVcsQ0FBQyxLQUFLLEVBQUUsNkJBQTZCLEVBQUU7UUFDaEQsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO0lBQy9CLENBQUMsQ0FBQyxDQUFBO0lBQ0YsSUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNsQyxJQUFNLElBQUksR0FDUCxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQXBCLENBQW9CLENBSTdDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JCLE9BQU8sQ0FDTCxvQkFBQyxLQUFLLENBQUMsUUFBUTtRQUNiLDhCQUNFLE1BQU0sRUFBQyxjQUFjLEVBQ3JCLE1BQU0sRUFBQyw0QkFBNEIsRUFDbkMsU0FBUyxFQUFDLFFBQVEsSUFFakIsQ0FBQztZQUNBLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFPLEVBQUU7Z0JBQ3ZCLE9BQU8sQ0FDTCxvQkFBQyxVQUFVLElBQ1QsS0FBSyxFQUFFLEtBQUssRUFDWixHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFDYixhQUFhLEVBQUUsYUFBYSxFQUM1QixVQUFVLEVBQUUsVUFBVSxHQUN0QixDQUNILENBQUE7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLENBQ0wsb0JBQUMsYUFBYSxJQUNaLEtBQUssRUFBRSxLQUFLLEVBQ1osR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQ2IsYUFBYSxFQUFFLGFBQWEsRUFDNUIsVUFBVSxFQUFFLFVBQVUsR0FDdEIsQ0FDSCxDQUFBO2FBQ0Y7UUFDSCxDQUFDLENBQUMsRUFBRSxDQUNDLENBQ1EsQ0FDbEIsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBRdWVyeUJhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudC9xdWVyeS1iYXNpYy9xdWVyeS1iYXNpYy52aWV3J1xuXG5pbXBvcnQgUXVlcnlBZHZhbmNlZCBmcm9tICcuLi8uLi9jb21wb25lbnQvcXVlcnktYWR2YW5jZWQvcXVlcnktYWR2YW5jZWQnXG5pbXBvcnQgeyB1c2VMaXN0ZW5UbyB9IGZyb20gJy4uL3NlbGVjdGlvbi1jaGVja2JveC91c2VCYWNrYm9uZS5ob29rJ1xuaW1wb3J0IHsgVmFsaWRhdGlvblJlc3VsdCB9IGZyb20gJy4uLy4uL3JlYWN0LWNvbXBvbmVudC9sb2NhdGlvbi92YWxpZGF0b3JzJ1xuZXhwb3J0IGNvbnN0IHF1ZXJ5Rm9ybXMgPSBbXG4gIHsgaWQ6ICdiYXNpYycsIHRpdGxlOiAnQmFzaWMgU2VhcmNoJywgdmlldzogUXVlcnlCYXNpYyB9LFxuICB7XG4gICAgaWQ6ICdhZHZhbmNlZCcsXG4gICAgdGl0bGU6ICdBZHZhbmNlZCBTZWFyY2gnLFxuICAgIHZpZXc6IFF1ZXJ5QWR2YW5jZWQsXG4gIH0sXG5dXG5cbnR5cGUgUXVlcnlBZGRSZWFjdFR5cGUgPSB7XG4gIG1vZGVsOiBhbnlcbiAgZXJyb3JMaXN0ZW5lcj86ICh2YWxpZGF0aW9uUmVzdWx0czoge1xuICAgIFtrZXk6IHN0cmluZ106IFZhbGlkYXRpb25SZXN1bHQgfCB1bmRlZmluZWRcbiAgfSkgPT4gdm9pZFxuICBFeHRlbnNpb25zPzogUmVhY3QuRnVuY3Rpb25Db21wb25lbnRcbn1cblxuZXhwb3J0IGNvbnN0IFF1ZXJ5QWRkUmVhY3QgPSAoe1xuICBtb2RlbCxcbiAgZXJyb3JMaXN0ZW5lcixcbiAgRXh0ZW5zaW9ucyxcbn06IFF1ZXJ5QWRkUmVhY3RUeXBlKSA9PiB7XG4gIGNvbnN0IFssIHNldEZvcmNlUmVuZGVyXSA9IFJlYWN0LnVzZVN0YXRlKE1hdGgucmFuZG9tKCkpXG4gIHVzZUxpc3RlblRvKG1vZGVsLCAncmVzZXRUb0RlZmF1bHRzIGNoYW5nZTp0eXBlJywgKCkgPT4ge1xuICAgIHNldEZvcmNlUmVuZGVyKE1hdGgucmFuZG9tKCkpXG4gIH0pXG4gIGNvbnN0IGZvcm1UeXBlID0gbW9kZWwuZ2V0KCd0eXBlJylcbiAgY29uc3QgZm9ybSA9XG4gICAgKHF1ZXJ5Rm9ybXMuZmluZCgoZm9ybSkgPT4gZm9ybS5pZCA9PT0gZm9ybVR5cGUpIGFzIHtcbiAgICAgIGlkOiBzdHJpbmdcbiAgICAgIHRpdGxlOiBzdHJpbmdcbiAgICAgIHZpZXc6IGFueVxuICAgIH0pIHx8IHF1ZXJ5Rm9ybXNbMF1cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Zm9ybVxuICAgICAgICB0YXJnZXQ9XCJhdXRvY29tcGxldGVcIlxuICAgICAgICBhY3Rpb249XCIvc2VhcmNoL2NhdGFsb2cvYmxhbmsuaHRtbFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXG4gICAgICA+XG4gICAgICAgIHsoKCkgPT4ge1xuICAgICAgICAgIGlmIChmb3JtLmlkID09PSAnYmFzaWMnKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UXVlcnlCYXNpY1xuICAgICAgICAgICAgICAgIG1vZGVsPXttb2RlbH1cbiAgICAgICAgICAgICAgICBrZXk9e21vZGVsLmlkfVxuICAgICAgICAgICAgICAgIGVycm9yTGlzdGVuZXI9e2Vycm9yTGlzdGVuZXJ9XG4gICAgICAgICAgICAgICAgRXh0ZW5zaW9ucz17RXh0ZW5zaW9uc31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPFF1ZXJ5QWR2YW5jZWRcbiAgICAgICAgICAgICAgICBtb2RlbD17bW9kZWx9XG4gICAgICAgICAgICAgICAga2V5PXttb2RlbC5pZH1cbiAgICAgICAgICAgICAgICBlcnJvckxpc3RlbmVyPXtlcnJvckxpc3RlbmVyfVxuICAgICAgICAgICAgICAgIEV4dGVuc2lvbnM9e0V4dGVuc2lvbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9KSgpfVxuICAgICAgPC9mb3JtPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ==