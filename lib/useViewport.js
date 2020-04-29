import { useState, useEffect } from 'react';
import { defaultOptions } from './defaults';
export var useViewport = function (options) {
    if (options === void 0) { options = defaultOptions; }
    var updateOnResize = options.updateOnResize, defaultVw = options.defaultVw, defaultVh = options.defaultVh;
    var _a = useState(defaultVw), vw = _a[0], setVw = _a[1];
    var _b = useState(defaultVh), vh = _b[0], setVh = _b[1];
    var _c = useState(defaultVw), initialVw = _c[0], setInitialVw = _c[1];
    var _d = useState(defaultVh), initialVh = _d[0], setInitialVh = _d[1];
    useEffect(function () {
        setInitialVw(window.innerWidth);
        setInitialVh(window.innerHeight);
    }, []);
    useEffect(function () {
        var setSizes = function () {
            if (window.innerWidth !== vw) {
                setVw(window.innerWidth);
            }
            if (window.innerHeight !== vh) {
                setVh(window.innerHeight);
            }
        };
        setSizes();
        if (updateOnResize) {
            window.addEventListener('resize', setSizes);
            return function () { return window.removeEventListener('resize', setSizes); };
        }
    }, [updateOnResize, vh, vw]);
    return { vw: vw, vh: vh, initialVw: initialVw, initialVh: initialVh };
};
