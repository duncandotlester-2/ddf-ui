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
var errorMessages = {
    malformedWkt: "Malformed WKT. Syntax for supported geometries:\n                  POINT (50 40)\n                  LINESTRING (30 10, 10 30, 40 40)\n                  POLYGON ((30 10, 40 40, 20 40, 10 20, 30 10))\n                  MULTIPOINT (10 40, 40 30, 20 20, 30 10)\n                  MULTILINESTRING ((10 10, 20 20, 10 40), (40 40, 30 30, 40 20, 30 10))\n                  MULTIPOLYGON (((30 20, 45 40, 10 40, 30 20)), ((15 5, 40 10, 10 20, 5 10, 15 5)))\n                  GEOMETRYCOLLECTION(POINT(4 6),LINESTRING(4 6,7 10))\n                  ",
    invalidWktCoordinates: 'Invalid coordinates. Note that WKT coordinates are ordered longitude then latitude.',
    invalidCoordinates: 'Invalid coordinates',
    invalidUsngGrid: 'Invalid USNG / MGRS grid',
    invalidRadius: 'Radius must be greater than 0 and at most 10,000 kilometers',
    invalidList: 'One or more entries are invalid',
    invalidBoundingBoxDd: "Invalid bounding box. Coordinates must satisfy the following conditions:\n                           North > South\n                           East > West\n                           North - South >= 0.0001\u00B0\n                           East - West >= 0.0001\u00B0\n                          ",
    invalidBoundingBoxDms: "Invalid bounding box. Coordinates must satisfy the following conditions:\n                            North > South\n                            East > West\n                            North - South >= 0.36\" (seconds)\n                            East - West >= 0.36\" (seconds)\n                           ",
    tooFewPointsLine: 'Lines must contain 2 or more points',
    tooFewPointsPolygon: 'Polygons must contain 3 or more points',
    firstLastPointMismatch: 'First and last points must be the same',
};
export default errorMessages;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudC9sb2NhdGlvbi1uZXcvdXRpbHMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixJQUFNLGFBQWEsR0FBRztJQUNwQixZQUFZLEVBQUUsMmhCQVFHO0lBQ2pCLHFCQUFxQixFQUNuQixxRkFBcUY7SUFDdkYsa0JBQWtCLEVBQUUscUJBQXFCO0lBQ3pDLGVBQWUsRUFBRSwwQkFBMEI7SUFDM0MsYUFBYSxFQUFFLDZEQUE2RDtJQUM1RSxXQUFXLEVBQUUsaUNBQWlDO0lBQzlDLG9CQUFvQixFQUFFLDBTQUtHO0lBQ3pCLHFCQUFxQixFQUFFLHVUQUtHO0lBQzFCLGdCQUFnQixFQUFFLHFDQUFxQztJQUN2RCxtQkFBbUIsRUFBRSx3Q0FBd0M7SUFDN0Qsc0JBQXNCLEVBQUUsd0NBQXdDO0NBQ2pFLENBQUE7QUFFRCxlQUFlLGFBQWEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSBDb2RpY2UgRm91bmRhdGlvblxuICpcbiAqIFRoaXMgaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXJcbiAqIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlXG4gKiBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0XG4gKiBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gU2VlIHRoZSBHTlVcbiAqIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuIEEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiBpcyBkaXN0cmlidXRlZCBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbSBhbmQgY2FuIGJlIGZvdW5kIGF0XG4gKiA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzL2xncGwuaHRtbD4uXG4gKlxuICoqL1xuY29uc3QgZXJyb3JNZXNzYWdlcyA9IHtcbiAgbWFsZm9ybWVkV2t0OiBgTWFsZm9ybWVkIFdLVC4gU3ludGF4IGZvciBzdXBwb3J0ZWQgZ2VvbWV0cmllczpcbiAgICAgICAgICAgICAgICAgIFBPSU5UICg1MCA0MClcbiAgICAgICAgICAgICAgICAgIExJTkVTVFJJTkcgKDMwIDEwLCAxMCAzMCwgNDAgNDApXG4gICAgICAgICAgICAgICAgICBQT0xZR09OICgoMzAgMTAsIDQwIDQwLCAyMCA0MCwgMTAgMjAsIDMwIDEwKSlcbiAgICAgICAgICAgICAgICAgIE1VTFRJUE9JTlQgKDEwIDQwLCA0MCAzMCwgMjAgMjAsIDMwIDEwKVxuICAgICAgICAgICAgICAgICAgTVVMVElMSU5FU1RSSU5HICgoMTAgMTAsIDIwIDIwLCAxMCA0MCksICg0MCA0MCwgMzAgMzAsIDQwIDIwLCAzMCAxMCkpXG4gICAgICAgICAgICAgICAgICBNVUxUSVBPTFlHT04gKCgoMzAgMjAsIDQ1IDQwLCAxMCA0MCwgMzAgMjApKSwgKCgxNSA1LCA0MCAxMCwgMTAgMjAsIDUgMTAsIDE1IDUpKSlcbiAgICAgICAgICAgICAgICAgIEdFT01FVFJZQ09MTEVDVElPTihQT0lOVCg0IDYpLExJTkVTVFJJTkcoNCA2LDcgMTApKVxuICAgICAgICAgICAgICAgICAgYCxcbiAgaW52YWxpZFdrdENvb3JkaW5hdGVzOlxuICAgICdJbnZhbGlkIGNvb3JkaW5hdGVzLiBOb3RlIHRoYXQgV0tUIGNvb3JkaW5hdGVzIGFyZSBvcmRlcmVkIGxvbmdpdHVkZSB0aGVuIGxhdGl0dWRlLicsXG4gIGludmFsaWRDb29yZGluYXRlczogJ0ludmFsaWQgY29vcmRpbmF0ZXMnLFxuICBpbnZhbGlkVXNuZ0dyaWQ6ICdJbnZhbGlkIFVTTkcgLyBNR1JTIGdyaWQnLFxuICBpbnZhbGlkUmFkaXVzOiAnUmFkaXVzIG11c3QgYmUgZ3JlYXRlciB0aGFuIDAgYW5kIGF0IG1vc3QgMTAsMDAwIGtpbG9tZXRlcnMnLFxuICBpbnZhbGlkTGlzdDogJ09uZSBvciBtb3JlIGVudHJpZXMgYXJlIGludmFsaWQnLFxuICBpbnZhbGlkQm91bmRpbmdCb3hEZDogYEludmFsaWQgYm91bmRpbmcgYm94LiBDb29yZGluYXRlcyBtdXN0IHNhdGlzZnkgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTm9ydGggPiBTb3V0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgRWFzdCA+IFdlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcnRoIC0gU291dGggPj0gMC4wMDAxwrBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhc3QgLSBXZXN0ID49IDAuMDAwMcKwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGAsXG4gIGludmFsaWRCb3VuZGluZ0JveERtczogYEludmFsaWQgYm91bmRpbmcgYm94LiBDb29yZGluYXRlcyBtdXN0IHNhdGlzZnkgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcnRoID4gU291dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXN0ID4gV2VzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vcnRoIC0gU291dGggPj0gMC4zNlwiIChzZWNvbmRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhc3QgLSBXZXN0ID49IDAuMzZcIiAoc2Vjb25kcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXG4gIHRvb0Zld1BvaW50c0xpbmU6ICdMaW5lcyBtdXN0IGNvbnRhaW4gMiBvciBtb3JlIHBvaW50cycsXG4gIHRvb0Zld1BvaW50c1BvbHlnb246ICdQb2x5Z29ucyBtdXN0IGNvbnRhaW4gMyBvciBtb3JlIHBvaW50cycsXG4gIGZpcnN0TGFzdFBvaW50TWlzbWF0Y2g6ICdGaXJzdCBhbmQgbGFzdCBwb2ludHMgbXVzdCBiZSB0aGUgc2FtZScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGVycm9yTWVzc2FnZXNcbiJdfQ==