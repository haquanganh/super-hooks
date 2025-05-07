import { useEffect, useRef } from 'react';

/**
 * Custom hook for logging component mount, unmount, and updates.
 *
 * @param componentName - The name of the component for logging.
 * @param rest - Any additional parameters you want to log on updates.
 */
const useLogger = (componentName: string, ...rest: any[]) => {
  const isMounted = useRef(false);

  // Logs on component mount and unmount (similar to `useEffectOnce`)
  useEffect(() => {
    if (!isMounted.current) {
      console.log(`${componentName} mounted`, ...rest);
      isMounted.current = true;
    }
    return () => {
      console.log(`${componentName} unmounted`);
    };
  }, []); // Empty dependency array for mount/unmount behavior

  // Logs on every update (similar to `useUpdateEffect`)
  useEffect(() => {
    if (isMounted.current) {
      console.log(`${componentName} updated`, ...rest);
    }
  }, [componentName, ...rest]); // Dependency array for updates
};

export default useLogger;
