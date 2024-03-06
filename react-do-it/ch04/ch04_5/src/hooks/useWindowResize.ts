import { useEffect, useState } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);

  useEffect(() => {
    setWidthHeight(_ => [window.innerWidth, window.innerHeight]);
  }, []);
  useEventListener(window, 'resize', () => {
    setWidthHeight(_ => [window.innerWidth, window.innerHeight]);
  });

  return widthHeight;
};
