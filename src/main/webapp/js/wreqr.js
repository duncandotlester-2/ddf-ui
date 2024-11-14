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
import Backbone from 'backbone';
import 'backbone.wreqr';
var wreqr = {};
wreqr.vent = new Backbone.Wreqr.EventAggregator();
wreqr.commands = new Backbone.Wreqr.Commands();
wreqr.reqres = new Backbone.Wreqr.RequestResponse();
export default wreqr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3JlcXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbWFpbi93ZWJhcHAvanMvd3JlcXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFhSTtBQUNKLE9BQU8sUUFBUSxNQUFNLFVBQVUsQ0FBQTtBQUMvQixPQUFPLGdCQUFnQixDQUFBO0FBQ3ZCLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FDZjtBQUFDLEtBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSyxRQUFnQixDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FDbkU7QUFBQyxLQUFhLENBQUMsUUFBUSxHQUFHLElBQUssUUFBZ0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQ2hFO0FBQUMsS0FBYSxDQUFDLE1BQU0sR0FBRyxJQUFLLFFBQWdCLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO0FBQ3RFLGVBQWUsS0FJZCxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgQmFja2JvbmUgZnJvbSAnYmFja2JvbmUnXG5pbXBvcnQgJ2JhY2tib25lLndyZXFyJ1xuY29uc3Qgd3JlcXIgPSB7fVxuOyh3cmVxciBhcyBhbnkpLnZlbnQgPSBuZXcgKEJhY2tib25lIGFzIGFueSkuV3JlcXIuRXZlbnRBZ2dyZWdhdG9yKClcbjsod3JlcXIgYXMgYW55KS5jb21tYW5kcyA9IG5ldyAoQmFja2JvbmUgYXMgYW55KS5XcmVxci5Db21tYW5kcygpXG47KHdyZXFyIGFzIGFueSkucmVxcmVzID0gbmV3IChCYWNrYm9uZSBhcyBhbnkpLldyZXFyLlJlcXVlc3RSZXNwb25zZSgpXG5leHBvcnQgZGVmYXVsdCB3cmVxciBhcyB7XG4gIHZlbnQ6IGFueVxuICBjb21tYW5kczogYW55XG4gIHJlcXJlczogYW55XG59XG4iXX0=