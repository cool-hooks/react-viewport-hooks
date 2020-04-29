import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { defaultOptions } from './defaults';
export var useNativeViewport = function (options) {
    if (options === void 0) { options = defaultOptions; }
    var updateOnChange = options.updateOnChange, source = options.source;
    var _a = useState(), vw = _a[0], setVw = _a[1];
    var _b = useState(), vh = _b[0], setVh = _b[1];
    useEffect(function () {
        var setSizes = function () {
            var _a = Dimensions.get(source), width = _a.width, height = _a.height;
            if (width !== vw) {
                setVw(width);
            }
            if (height !== vh) {
                setVh(height);
            }
        };
        setSizes();
        if (updateOnChange) {
            Dimensions.addEventListener('change', setSizes);
            return function () { return Dimensions.removeEventListener('change', setSizes); };
        }
    }, [source, updateOnChange, vh, vw]);
    return { vw: vw, vh: vh };
};
