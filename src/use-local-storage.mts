import { useEffect, useState } from 'react';

/**
 * Custom hook for synchronizing state with localStorage.
 *
 * @param key - The localStorage key.
 * @param initialValue - The initial value to set if the key does not exist in localStorage.
 * @returns A stateful value, and a function to update it.
 */
export const useLocalStorage = <T,>(
  key: string,
  initialValue: T
): [T, (value: T) => void] => {
  // Get from localStorage or fall back to the initial value
  const storedValue = localStorage.getItem(key);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState<T>(parsedValue);

  useEffect(() => {
    // Update localStorage when the value changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
