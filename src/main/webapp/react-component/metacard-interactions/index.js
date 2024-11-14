import { __assign } from "tslib";
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
import { hot } from 'react-hot-loader';
import { Divider } from './metacard-interactions';
import ExtensionPoints from '../../extension-points';
var MetacardInteractions = function (props) {
    return (React.createElement(React.Fragment, null, ExtensionPoints.metacardInteractions.map(function (Component, i) {
        var componentName = Component.toString();
        var key = componentName + '-' + i;
        return React.createElement(Component, __assign({ key: key }, props));
    })));
};
var Component = MetacardInteractions;
export default hot(module)(Component);
export { Divider };
export { MetacardInteraction } from './metacard-interactions';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvcmVhY3QtY29tcG9uZW50L21ldGFjYXJkLWludGVyYWN0aW9ucy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDdEMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHlCQUF5QixDQUFBO0FBQ2pELE9BQU8sZUFBZSxNQUFNLHdCQUF3QixDQUFBO0FBZ0JwRCxJQUFNLG9CQUFvQixHQUFHLFVBQUMsS0FBK0I7SUFDM0QsT0FBTyxDQUNMLDBDQUNHLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsVUFBQyxTQUFTLEVBQUUsQ0FBQztRQUNyRCxJQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDMUMsSUFBTSxHQUFHLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDbkMsT0FBTyxvQkFBQyxTQUFTLGFBQUMsR0FBRyxFQUFFLEdBQUcsSUFBTSxLQUFLLEVBQUksQ0FBQTtJQUMzQyxDQUFDLENBQUMsQ0FDRCxDQUNKLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxJQUFNLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQTtBQUV0QyxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUVyQyxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUE7QUFFbEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgQ29kaWNlIEZvdW5kYXRpb25cbiAqXG4gKiBUaGlzIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyXG4gKiBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZVxuICogTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dFxuICogZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuIFNlZSB0aGUgR05VXG4gKiBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLiBBIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogaXMgZGlzdHJpYnV0ZWQgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0gYW5kIGNhbiBiZSBmb3VuZCBhdFxuICogPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy9sZ3BsLmh0bWw+LlxuICpcbiAqKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaG90IH0gZnJvbSAncmVhY3QtaG90LWxvYWRlcidcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICcuL21ldGFjYXJkLWludGVyYWN0aW9ucydcbmltcG9ydCBFeHRlbnNpb25Qb2ludHMgZnJvbSAnLi4vLi4vZXh0ZW5zaW9uLXBvaW50cydcbmltcG9ydCB7IExhenlRdWVyeVJlc3VsdCB9IGZyb20gJy4uLy4uL2pzL21vZGVsL0xhenlRdWVyeVJlc3VsdC9MYXp5UXVlcnlSZXN1bHQnXG5cbmV4cG9ydCB0eXBlIE1ldGFjYXJkSW50ZXJhY3Rpb25Qcm9wcyA9IHtcbiAgbW9kZWw/OiBMYXp5UXVlcnlSZXN1bHRbXVxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIFJlc3VsdCA9IHtcbiAgZ2V0OiAoa2V5OiBhbnkpID0+IGFueVxuICBpc1Jlc291cmNlOiAoKSA9PiBib29sZWFuXG4gIGlzUmV2aXNpb246ICgpID0+IGJvb2xlYW5cbiAgaXNEZWxldGVkOiAoKSA9PiBib29sZWFuXG4gIGlzUmVtb3RlOiAoKSA9PiBib29sZWFuXG59XG5cbmNvbnN0IE1ldGFjYXJkSW50ZXJhY3Rpb25zID0gKHByb3BzOiBNZXRhY2FyZEludGVyYWN0aW9uUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge0V4dGVuc2lvblBvaW50cy5tZXRhY2FyZEludGVyYWN0aW9ucy5tYXAoKENvbXBvbmVudCwgaSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gQ29tcG9uZW50LnRvU3RyaW5nKClcbiAgICAgICAgY29uc3Qga2V5ID0gY29tcG9uZW50TmFtZSArICctJyArIGlcbiAgICAgICAgcmV0dXJuIDxDb21wb25lbnQga2V5PXtrZXl9IHsuLi5wcm9wc30gLz5cbiAgICAgIH0pfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IENvbXBvbmVudCA9IE1ldGFjYXJkSW50ZXJhY3Rpb25zXG5cbmV4cG9ydCBkZWZhdWx0IGhvdChtb2R1bGUpKENvbXBvbmVudClcblxuZXhwb3J0IHsgRGl2aWRlciB9XG5cbmV4cG9ydCB7IE1ldGFjYXJkSW50ZXJhY3Rpb24gfSBmcm9tICcuL21ldGFjYXJkLWludGVyYWN0aW9ucydcbiJdfQ==