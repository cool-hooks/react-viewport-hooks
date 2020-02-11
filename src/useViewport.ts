import { useState, useEffect } from 'react';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useViewport = (options: Options = defaultOptions) => {
  const [vw, setVW] = useState(0);
  const [vh, setVH] = useState(0);

  const { updateOnResize } = options;

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
