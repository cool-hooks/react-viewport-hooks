import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useNativeViewport = (options: Options = defaultOptions) => {
  const { updateOnChange, source } = options;

  const [vw, setVw] = useState<number>();
  const [vh, setVh] = useState<number>();

  useEffect(() => {
    const setSizes = () => {
      const { width, height } = Dimensions.get(source);

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

      return () => Dimensions.removeEventListener('change', setSizes);
    }
  }, [source, updateOnChange, vh, vw]);

  return { vw, vh };
};
