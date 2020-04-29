import { useState, useEffect } from 'react';

import { defaultOptions } from './defaults';

import { Options } from './interfaces/options';

export const useViewport = (options: Options = defaultOptions) => {
  const { updateOnResize, defaultVw, defaultVh } = options;

  const [vw, setVw] = useState(defaultVw);
  const [vh, setVh] = useState(defaultVh);

  const [initialVw, setInitialVw] = useState(defaultVw);
  const [initialVh, setInitialVh] = useState(defaultVh);

  useEffect(() => {
    setInitialVw(window.innerWidth);

    setInitialVh(window.innerHeight);
  }, []);

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

  return { vw, vh, initialVw, initialVh };
};
