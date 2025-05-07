import { useCallback, useState } from 'react';

/**
 * A simple toggle hook for boolean state.
 *
 * @param initialValue - Initial state value (default: false).
 * @returns [value, toggle, setTrue, setFalse]
 */
export const useToggle = (
  initialValue = false
): [boolean, () => void, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setTrue, setFalse];
};
