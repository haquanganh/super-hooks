import { useEffect, useState } from 'react';

/**
 * Custom hook for synchronizing state with sessionStorage.
 *
 * @param key - The sessionStorage key.
 * @param initialValue - The initial value to set if the key does not exist in sessionStorage.
 * @returns A stateful value, and a function to update it.
 */
export const useSessionStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  // Get from sessionStorage or fall back to the initial value
  const storedValue = sessionStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    // Update sessionStorage when the value changes
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
