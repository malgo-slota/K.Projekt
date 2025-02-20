import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options) {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef(null);
  const hasIntersected = useRef(false);  // Nowa zmienna, aby sprawdzić, czy obserwacja została już wywołana

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          // Jeśli element już był widoczny, nie wykonuj callbacka ponownie
          if (!hasIntersected.current && entry.isIntersecting) {
            setIsIntersecting(true);
            hasIntersected.current = true; // Zablokuj dalsze wywoływanie
          }
        },
        options
      );
  
      const currentElement = elementRef.current;
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [options]);

  return { isIntersecting, elementRef };
}