import { useState, useEffect, useMemo } from 'react';

import type { Options } from './types/Options';

const defaultOptions = {
  defaultVh: undefined,
  defaultVw: undefined,
  updateOnResize: true,
};

export const useViewport = (options?: Options) => {
  const { updateOnResize, defaultVw, defaultVh } = useMemo(
    () => ({
      ...defaultOptions,
      ...(options || {}),
    }),
    [options]
  );

  const [vw, setVw] = useState(defaultVw);
  const [vh, setVh] = useState(defaultVh);

  useEffect(() => {
    const setSizes = () => {
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

      return () => window.removeEventListener('resize', setSizes);
    }
  }, [updateOnResize, vh, vw]);

  return { vw, vh };
};
