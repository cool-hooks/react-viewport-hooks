import { useState, useEffect } from 'react';

export const useViewport = ({
  updateOnResize = true
}: {
  updateOnResize: boolean;
}) => {
  const [vw, setVW] = useState(window.innerWidth);
  const [vh, setVH] = useState(window.innerHeight);

  useEffect(() => {
    if (updateOnResize) {
      window.addEventListener('resize', () => {
        setVW(window.innerWidth);
        setVH(window.innerHeight);
      });
    }
  }, [updateOnResize]);

  return { vw, vh };
};
