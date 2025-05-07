import { useEffect, useState } from 'react';

interface UseOnScreenProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

/**
 * A hook to determine if an element is in the viewport.
 *
 * @param ref - A React ref pointing to the element to detect visibility.
 * @param options - Options for the IntersectionObserver (root, rootMargin, threshold).
 * @returns A boolean indicating if the element is in the viewport.
 */
export const useOnScreen = (
  ref: React.RefObject<HTMLElement>,
  { root = null, rootMargin = '0px', threshold = 0.1 }: UseOnScreenProps = {}
): boolean => {
  const [isOnScreen, setIsOnScreen] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [ref, root, rootMargin, threshold]);

  return isOnScreen;
};
