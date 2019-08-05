import { useState, useEffect } from 'react';

const defaultOptions = {
  updateOnResize: true
};

export const useViewport = (options = defaultOptions) => {
  const [vw, setVW] = useState(window.innerWidth);
  const [vh, setVH] = useState(window.innerHeight);

  const { updateOnResize } = options;

  useEffect(() => {
    if (updateOnResize) {
      window.addEventListener('resize', () => {
        if (window.innerWidth !== vw) {
          setVW(window.innerWidth);
        }

        if (window.innerHeight !== vh) {
          setVH(window.innerHeight);
        }
      });
    }
  }, [updateOnResize, vh, vw]);

  return { vw, vh };
};
