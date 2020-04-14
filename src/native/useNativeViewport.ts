import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useNativeViewport = (options: Options = defaultOptions) => {
  const { updateOnChange, source } = options;

  const [vw, setVW] = useState<number>();
  const [vh, setVH] = useState<number>();

  useEffect(() => {
    const setSizes = () => {
      const { width, height } = Dimensions.get(source);

      if (width !== vw) {
        setVW(width);
      }

      if (height !== vh) {
        setVH(height);
      }
    };

    setSizes();

    if (updateOnChange) {
      Dimensions.addEventListener('change', setSizes);

      return () => Dimensions.removeEventListener('change', setSizes);
    }
  }, [source, updateOnChange, vh, vw]);

  return { vw, vh };
};
