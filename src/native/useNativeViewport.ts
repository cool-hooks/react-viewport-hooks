import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { defaultOptions } from '../defaults';

import { Options } from '../interfaces/options';

export const useNativeViewport = (options: Options = defaultOptions) => {
  const { updateOnResize, defaultVW, defaultVH } = options;

  const [vw, setVW] = useState(defaultVW);
  const [vh, setVH] = useState(defaultVH);

  useEffect(() => {
    const setSizes = () => {
      const { width, height } = Dimensions.get('window');

      if (width !== vw) {
        setVW(width);
      }

      if (height !== vh) {
        setVH(height);
      }
    };

    setSizes();

    if (updateOnResize) {
      Dimensions.addEventListener('change', setSizes);

      return () => Dimensions.removeEventListener('change', setSizes);
    }
  }, [updateOnResize, vh, vw]);

  return { vw, vh };
};
