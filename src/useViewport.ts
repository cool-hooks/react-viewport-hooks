import { useState, useEffect } from 'react';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useViewport = (options?: Options) => {
  const { updateOnResize, defaultVw, defaultVh } = {
    ...defaultOptions,
    ...options,
  };

  const [vw, setVW] = useState(defaultVw as number);
  const [vh, setVH] = useState(defaultVh as number);

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
