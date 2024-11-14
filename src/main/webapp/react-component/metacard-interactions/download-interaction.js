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
import { MetacardInteraction } from './metacard-interactions';
import { hot } from 'react-hot-loader';
import { StartupDataStore } from '../../js/model/Startup/startup';
import { useDialog } from '../../component/dialog';
import { useDownloadComponent } from '../../component/download/download';
var isDownloadable = function (model) {
    return model.some(function (result) { return result.getDownloadUrl(); });
};
var DownloadProduct = function (_a) {
    var model = _a.model;
    var setProps = useDialog().setProps;
    var DownloadComponent = useDownloadComponent();
    if (!model || model.length === 0) {
        return null;
    }
    if (!isDownloadable(model)) {
        return null;
    }
    return (React.createElement(MetacardInteraction, { text: "Download", help: "Downloads the result's associated product directly to your machine.", icon: "fa fa-download", onClick: function () {
            setProps({
                open: true,
                children: React.createElement(DownloadComponent, { lazyResults: model }),
            });
        } }, isRemoteResourceCached(model) && (React.createElement("span", { "data-help": "Displayed if the remote resource has been cached locally.", className: "download-cached" }, "Local"))));
};
var isRemoteResourceCached = function (model) {
    if (!model || model.length <= 0)
        return false;
    return (model[0].isResourceLocal &&
        model[0].plain.metacard.properties['source-id'] !==
            StartupDataStore.Sources.localSourceId);
};
export default hot(module)(DownloadProduct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWQtaW50ZXJhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvcmVhY3QtY29tcG9uZW50L21ldGFjYXJkLWludGVyYWN0aW9ucy9kb3dubG9hZC1pbnRlcmFjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFBO0FBRTlCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBQzdELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQTtBQUV0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQTtBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFFeEUsSUFBTSxjQUFjLEdBQUcsVUFBQyxLQUF3QjtJQUM5QyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLElBQUssT0FBQSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtBQUN4RCxDQUFDLENBQUE7QUFFRCxJQUFNLGVBQWUsR0FBRyxVQUFDLEVBQW1DO1FBQWpDLEtBQUssV0FBQTtJQUN0QixJQUFBLFFBQVEsR0FBSyxTQUFTLEVBQUUsU0FBaEIsQ0FBZ0I7SUFDaEMsSUFBTSxpQkFBaUIsR0FBRyxvQkFBb0IsRUFBRSxDQUFBO0lBQ2hELElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEMsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELE9BQU8sQ0FDTCxvQkFBQyxtQkFBbUIsSUFDbEIsSUFBSSxFQUFDLFVBQVUsRUFDZixJQUFJLEVBQUMscUVBQXFFLEVBQzFFLElBQUksRUFBQyxnQkFBZ0IsRUFDckIsT0FBTyxFQUFFO1lBQ1AsUUFBUSxDQUFDO2dCQUNQLElBQUksRUFBRSxJQUFJO2dCQUNWLFFBQVEsRUFBRSxvQkFBQyxpQkFBaUIsSUFBQyxXQUFXLEVBQUUsS0FBSyxHQUFJO2FBQ3BELENBQUMsQ0FBQTtRQUNKLENBQUMsSUFFQSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQywyQ0FDWSwyREFBMkQsRUFDckUsU0FBUyxFQUFDLGlCQUFpQixZQUd0QixDQUNSLENBQ21CLENBQ3ZCLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxJQUFNLHNCQUFzQixHQUFHLFVBQUMsS0FBd0I7SUFDdEQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUM7UUFBRSxPQUFPLEtBQUssQ0FBQTtJQUU3QyxPQUFPLENBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWU7UUFDeEIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUM3QyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUN6QyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsZUFBZSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgQ29kaWNlIEZvdW5kYXRpb25cbiAqXG4gKiBUaGlzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxuICogTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dFxuICogZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLiBBIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogaXMgZGlzdHJpYnV0ZWQgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0gYW5kIGNhbiBiZSBmb3VuZCBhdFxuICogPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLmh0bWw+LlxuICpcbiAqKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWV0YWNhcmRJbnRlcmFjdGlvblByb3BzIH0gZnJvbSAnLidcbmltcG9ydCB7IE1ldGFjYXJkSW50ZXJhY3Rpb24gfSBmcm9tICcuL21ldGFjYXJkLWludGVyYWN0aW9ucydcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXInXG5pbXBvcnQgeyBMYXp5UXVlcnlSZXN1bHQgfSBmcm9tICcuLi8uLi9qcy9tb2RlbC9MYXp5UXVlcnlSZXN1bHQvTGF6eVF1ZXJ5UmVzdWx0J1xuaW1wb3J0IHsgU3RhcnR1cERhdGFTdG9yZSB9IGZyb20gJy4uLy4uL2pzL21vZGVsL1N0YXJ0dXAvc3RhcnR1cCdcbmltcG9ydCB7IHVzZURpYWxvZyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9kaWFsb2cnXG5pbXBvcnQgeyB1c2VEb3dubG9hZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudC9kb3dubG9hZC9kb3dubG9hZCdcblxuY29uc3QgaXNEb3dubG9hZGFibGUgPSAobW9kZWw6IExhenlRdWVyeVJlc3VsdFtdKTogYm9vbGVhbiA9PiB7XG4gIHJldHVybiBtb2RlbC5zb21lKChyZXN1bHQpID0+IHJlc3VsdC5nZXREb3dubG9hZFVybCgpKVxufVxuXG5jb25zdCBEb3dubG9hZFByb2R1Y3QgPSAoeyBtb2RlbCB9OiBNZXRhY2FyZEludGVyYWN0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgeyBzZXRQcm9wcyB9ID0gdXNlRGlhbG9nKClcbiAgY29uc3QgRG93bmxvYWRDb21wb25lbnQgPSB1c2VEb3dubG9hZENvbXBvbmVudCgpXG4gIGlmICghbW9kZWwgfHwgbW9kZWwubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBpZiAoIWlzRG93bmxvYWRhYmxlKG1vZGVsKSkge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TWV0YWNhcmRJbnRlcmFjdGlvblxuICAgICAgdGV4dD1cIkRvd25sb2FkXCJcbiAgICAgIGhlbHA9XCJEb3dubG9hZHMgdGhlIHJlc3VsdCdzIGFzc29jaWF0ZWQgcHJvZHVjdCBkaXJlY3RseSB0byB5b3VyIG1hY2hpbmUuXCJcbiAgICAgIGljb249XCJmYSBmYS1kb3dubG9hZFwiXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHNldFByb3BzKHtcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIGNoaWxkcmVuOiA8RG93bmxvYWRDb21wb25lbnQgbGF6eVJlc3VsdHM9e21vZGVsfSAvPixcbiAgICAgICAgfSlcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lzUmVtb3RlUmVzb3VyY2VDYWNoZWQobW9kZWwpICYmIChcbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBkYXRhLWhlbHA9XCJEaXNwbGF5ZWQgaWYgdGhlIHJlbW90ZSByZXNvdXJjZSBoYXMgYmVlbiBjYWNoZWQgbG9jYWxseS5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRvd25sb2FkLWNhY2hlZFwiXG4gICAgICAgID5cbiAgICAgICAgICBMb2NhbFxuICAgICAgICA8L3NwYW4+XG4gICAgICApfVxuICAgIDwvTWV0YWNhcmRJbnRlcmFjdGlvbj5cbiAgKVxufVxuXG5jb25zdCBpc1JlbW90ZVJlc291cmNlQ2FjaGVkID0gKG1vZGVsOiBMYXp5UXVlcnlSZXN1bHRbXSk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIW1vZGVsIHx8IG1vZGVsLmxlbmd0aCA8PSAwKSByZXR1cm4gZmFsc2VcblxuICByZXR1cm4gKFxuICAgIG1vZGVsWzBdLmlzUmVzb3VyY2VMb2NhbCAmJlxuICAgIG1vZGVsWzBdLnBsYWluLm1ldGFjYXJkLnByb3BlcnRpZXNbJ3NvdXJjZS1pZCddICE9PVxuICAgICAgU3RhcnR1cERhdGFTdG9yZS5Tb3VyY2VzLmxvY2FsU291cmNlSWRcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShEb3dubG9hZFByb2R1Y3QpXG4iXX0=