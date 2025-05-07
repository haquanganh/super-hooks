import { useState } from 'react';

/**
 * Custom hook to manage cookies in React.
 *
 * @param cookieName - The name of the cookie.
 * @param initialValue - The initial value to set if the cookie does not exist.
 * @returns A stateful value (cookie value), and functions to set or delete the cookie.
 */
export const useCookie = <T,>(
  cookieName: string,
  initialValue: T
): [T, (value: T) => void, () => void] => {
  // Helper function to get a cookie by name
  const getCookie = (name: string): string | undefined => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
  };

  // Get the cookie value or fall back to the initial value
  const storedValue = getCookie(cookieName);
  const parsedValue = storedValue ? JSON.parse(storedValue) : initialValue;

  const [cookieValue, setCookieValue] = useState<T>(parsedValue);

  // Function to set a cookie
  const setCookie = (value: T): void => {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1); // Cookie expires in 1 year
    document.cookie = `${cookieName}=${JSON.stringify(
      value
    )};expires=${expires.toUTCString()};path=/`;
    setCookieValue(value);
  };

  // Function to delete a cookie
  const deleteCookie = (): void => {
    document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    setCookieValue(initialValue);
  };

  return [cookieValue, setCookie, deleteCookie];
};
