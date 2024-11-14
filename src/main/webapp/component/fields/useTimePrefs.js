import { __read } from "tslib";
import { useState, useEffect } from 'react';
import { useBackbone } from '../selection-checkbox/useBackbone.hook';
import user from '../singletons/user-instance';
var useTimePrefs = function (action) {
    var _a = useBackbone(), listenTo = _a.listenTo, stopListening = _a.stopListening;
    var _b = __read(useState(Math.random()), 2), setForceRender = _b[1];
    useEffect(function () {
        var callback = function () {
            setForceRender(Math.random());
            action && action();
        };
        listenTo(user.getPreferences(), 'change:dateTimeFormat change:timeZone', callback);
        return function () {
            return stopListening(user.getPreferences(), 'change:dateTimeFormat change:timeZone', callback);
        };
    }, [action]);
};
export default useTimePrefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVGltZVByZWZzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21haW4vd2ViYXBwL2NvbXBvbmVudC9maWVsZHMvdXNlVGltZVByZWZzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPLENBQUE7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdDQUF3QyxDQUFBO0FBQ3BFLE9BQU8sSUFBSSxNQUFNLDZCQUE2QixDQUFBO0FBRTlDLElBQU0sWUFBWSxHQUFHLFVBQUMsTUFBbUI7SUFDakMsSUFBQSxLQUE4QixXQUFXLEVBQUUsRUFBekMsUUFBUSxjQUFBLEVBQUUsYUFBYSxtQkFBa0IsQ0FBQTtJQUMzQyxJQUFBLEtBQUEsT0FBcUIsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFBLEVBQXpDLGNBQWMsUUFBMkIsQ0FBQTtJQUVsRCxTQUFTLENBQUM7UUFDUixJQUFNLFFBQVEsR0FBRztZQUNmLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQTtZQUM3QixNQUFNLElBQUksTUFBTSxFQUFFLENBQUE7UUFDcEIsQ0FBQyxDQUFBO1FBQ0QsUUFBUSxDQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsdUNBQXVDLEVBQ3ZDLFFBQVEsQ0FDVCxDQUFBO1FBQ0QsT0FBTztZQUNMLE9BQUEsYUFBYSxDQUNYLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsdUNBQXVDLEVBQ3ZDLFFBQVEsQ0FDVDtRQUpELENBSUMsQ0FBQTtJQUNMLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7QUFDZCxDQUFDLENBQUE7QUFFRCxlQUFlLFlBQVksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUJhY2tib25lIH0gZnJvbSAnLi4vc2VsZWN0aW9uLWNoZWNrYm94L3VzZUJhY2tib25lLmhvb2snXG5pbXBvcnQgdXNlciBmcm9tICcuLi9zaW5nbGV0b25zL3VzZXItaW5zdGFuY2UnXG5cbmNvbnN0IHVzZVRpbWVQcmVmcyA9IChhY3Rpb24/OiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IHsgbGlzdGVuVG8sIHN0b3BMaXN0ZW5pbmcgfSA9IHVzZUJhY2tib25lKClcbiAgY29uc3QgWywgc2V0Rm9yY2VSZW5kZXJdID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgc2V0Rm9yY2VSZW5kZXIoTWF0aC5yYW5kb20oKSlcbiAgICAgIGFjdGlvbiAmJiBhY3Rpb24oKVxuICAgIH1cbiAgICBsaXN0ZW5UbyhcbiAgICAgIHVzZXIuZ2V0UHJlZmVyZW5jZXMoKSxcbiAgICAgICdjaGFuZ2U6ZGF0ZVRpbWVGb3JtYXQgY2hhbmdlOnRpbWVab25lJyxcbiAgICAgIGNhbGxiYWNrXG4gICAgKVxuICAgIHJldHVybiAoKSA9PlxuICAgICAgc3RvcExpc3RlbmluZyhcbiAgICAgICAgdXNlci5nZXRQcmVmZXJlbmNlcygpLFxuICAgICAgICAnY2hhbmdlOmRhdGVUaW1lRm9ybWF0IGNoYW5nZTp0aW1lWm9uZScsXG4gICAgICAgIGNhbGxiYWNrXG4gICAgICApXG4gIH0sIFthY3Rpb25dKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaW1lUHJlZnNcbiJdfQ==