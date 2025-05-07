import { useEffect, useRef } from 'react';

/**
 * A hook to track if the component is unmounted.
 *
 * @returns A boolean indicating whether the component is unmounted.
 */
export const useUnmounted = (): boolean => {
  const isUnmounted = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return isUnmounted.current;
};
