import { useState, useEffect } from 'react';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useViewport = (options: Options = defaultOptions) => {
  const { updateOnResize, defaultVW, defaultVH } = options;

  const [vw, setVW] = useState(defaultVW);
  const [vh, setVH] = useState(defaultVH);

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
