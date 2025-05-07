import { useEffect, useRef } from 'react';

/**
 * Stores the previous state value.
 *
 * @param value - The current state value.
 * @returns The previous value.
 */
export const usePreviousState = <T,>(value: T): T | null => {
  const prevRef = useRef<T>(null);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};
