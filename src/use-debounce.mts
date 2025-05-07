import { useEffect, useState } from 'react';

/**
 * Delays updating the value until after a specified delay.
 *
 * @param value - The input value to debounce.
 * @param delay - Delay in milliseconds (default: 300ms).
 * @returns The debounced value.
 */
export const useDebounce = <T,>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
