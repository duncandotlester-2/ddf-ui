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
// some systems like keycloak attach query params which interfere with react router / golden layout and their use of query params (when using hash routing)
export function removeRedirectQueryParams() {
    if (location.href.includes("".concat(location.pathname, "?"))) {
        var preHashStuff = location.href.split('?')[0];
        location.href = preHashStuff + location.hash;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXF1ZXJ5LXBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tYWluL3dlYmFwcC9oYW5kbGUtcXVlcnktcGFyYW1zLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQWFJO0FBRUosMkpBQTJKO0FBQzNKLE1BQU0sVUFBVSx5QkFBeUI7SUFDdkMsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFHLFFBQVEsQ0FBQyxRQUFRLE1BQUcsQ0FBQyxFQUFFO1FBQ25ELElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hELFFBQVEsQ0FBQyxJQUFJLEdBQUcsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUE7S0FDN0M7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5cbi8vIHNvbWUgc3lzdGVtcyBsaWtlIGtleWNsb2FrIGF0dGFjaCBxdWVyeSBwYXJhbXMgd2hpY2ggaW50ZXJmZXJlIHdpdGggcmVhY3Qgcm91dGVyIC8gZ29sZGVuIGxheW91dCBhbmQgdGhlaXIgdXNlIG9mIHF1ZXJ5IHBhcmFtcyAod2hlbiB1c2luZyBoYXNoIHJvdXRpbmcpXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUmVkaXJlY3RRdWVyeVBhcmFtcygpIHtcbiAgaWYgKGxvY2F0aW9uLmhyZWYuaW5jbHVkZXMoYCR7bG9jYXRpb24ucGF0aG5hbWV9P2ApKSB7XG4gICAgY29uc3QgcHJlSGFzaFN0dWZmID0gbG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdXG4gICAgbG9jYXRpb24uaHJlZiA9IHByZUhhc2hTdHVmZiArIGxvY2F0aW9uLmhhc2hcbiAgfVxufVxuIl19