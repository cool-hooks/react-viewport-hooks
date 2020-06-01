import { useState, useEffect } from 'react';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useViewport = (options?: Options) => {
  const { updateOnResize, defaultVW, defaultVH } = {
    ...defaultOptions,
    ...options,
  };

  const [vw, setVW] = useState(defaultVW as number);
  const [vh, setVH] = useState(defaultVH as number);

  useEffect(() => {
    const setSizes = () => {
      if (window.innerWidth !== vw) {
        setVW(window.innerWidth);
      }

      if (window.innerHeight !== vh) {
        setVH(window.innerHeight);
      }
    };

    setSizes();

    if (updateOnResize) {
      window.addEventListener('resize', setSizes);

      return () => window.removeEventListener('resize', setSizes);
    }
  }, [updateOnResize, vh, vw]);

  return { vw, vh };
};
