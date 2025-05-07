import { useEffect, useState } from 'react';

/**
 * A hook to track if the component is mounted.
 *
 * @returns A boolean indicating whether the component is mounted.
 */
export const useMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted;
};
