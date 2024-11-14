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
import About from './presentation';
import moment from 'moment';
import { Environment } from '../../js/Environment';
import { useConfiguration } from '../../js/model/Startup/configuration.hooks';
var AboutContainer = function () {
    var config = useConfiguration().config;
    return (React.createElement(About, { date: moment(Environment.commitDate).format('MMMM Do YYYY'), branding: (config === null || config === void 0 ? void 0 : config.customBranding) || '', isDirty: Environment.isDirty, commitHash: Environment.commitHash, commitDate: Environment.commitDate, product: (config === null || config === void 0 ? void 0 : config.product) || '', version: (config === null || config === void 0 ? void 0 : config.version) || '' }));
};
export default AboutContainer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL3JlYWN0LWNvbXBvbmVudC9hYm91dC9jb250YWluZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBYUk7QUFDSixPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQTtBQUM5QixPQUFPLEtBQUssTUFBTSxnQkFBZ0IsQ0FBQTtBQUNsQyxPQUFPLE1BQU0sTUFBTSxRQUFRLENBQUE7QUFDM0IsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBQ2xELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFBO0FBRTdFLElBQU0sY0FBYyxHQUFHO0lBQ2IsSUFBQSxNQUFNLEdBQUssZ0JBQWdCLEVBQUUsT0FBdkIsQ0FBdUI7SUFDckMsT0FBTyxDQUNMLG9CQUFDLEtBQUssSUFDSixJQUFJLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQzNELFFBQVEsRUFBRSxDQUFBLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxjQUFjLEtBQUksRUFBRSxFQUN0QyxPQUFPLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFDNUIsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFVLEVBQ2xDLFVBQVUsRUFBRSxXQUFXLENBQUMsVUFBVSxFQUNsQyxPQUFPLEVBQUUsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsT0FBTyxLQUFJLEVBQUUsRUFDOUIsT0FBTyxFQUFFLENBQUEsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sS0FBSSxFQUFFLEdBQzlCLENBQ0gsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGVBQWUsY0FBYyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIENvZGljZSBGb3VuZGF0aW9uXG4gKlxuICogVGhpcyBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlclxuICogR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGVcbiAqIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLCBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXRcbiAqIGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVVxuICogTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy4gQSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGlzIGRpc3RyaWJ1dGVkIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtIGFuZCBjYW4gYmUgZm91bmQgYXRcbiAqIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvbGdwbC5odG1sPi5cbiAqXG4gKiovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBYm91dCBmcm9tICcuL3ByZXNlbnRhdGlvbidcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuLi8uLi9qcy9FbnZpcm9ubWVudCdcbmltcG9ydCB7IHVzZUNvbmZpZ3VyYXRpb24gfSBmcm9tICcuLi8uLi9qcy9tb2RlbC9TdGFydHVwL2NvbmZpZ3VyYXRpb24uaG9va3MnXG5cbmNvbnN0IEFib3V0Q29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbmZpZyB9ID0gdXNlQ29uZmlndXJhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPEFib3V0XG4gICAgICBkYXRlPXttb21lbnQoRW52aXJvbm1lbnQuY29tbWl0RGF0ZSkuZm9ybWF0KCdNTU1NIERvIFlZWVknKX1cbiAgICAgIGJyYW5kaW5nPXtjb25maWc/LmN1c3RvbUJyYW5kaW5nIHx8ICcnfVxuICAgICAgaXNEaXJ0eT17RW52aXJvbm1lbnQuaXNEaXJ0eX1cbiAgICAgIGNvbW1pdEhhc2g9e0Vudmlyb25tZW50LmNvbW1pdEhhc2h9XG4gICAgICBjb21taXREYXRlPXtFbnZpcm9ubWVudC5jb21taXREYXRlfVxuICAgICAgcHJvZHVjdD17Y29uZmlnPy5wcm9kdWN0IHx8ICcnfVxuICAgICAgdmVyc2lvbj17Y29uZmlnPy52ZXJzaW9uIHx8ICcnfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWJvdXRDb250YWluZXJcbiJdfQ==