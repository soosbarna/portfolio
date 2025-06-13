// Utility for dynamic 20-60-20 layout sizing

export function getDynamicLayoutWidths(windowWidth: number) {
  // Default ratios
  let left = '20vw';
  let center = '60vw';
  let right = '20vw';

  if (windowWidth < 600) {
    // Small screens: less padding, more content
    left = '5vw';
    center = '90vw';
    right = '5vw';
  } else if (windowWidth < 1000) {
    // Medium screens: moderate padding
    left = '10vw';
    center = '80vw';
    right = '10vw';
  }
  // Large screens: default 20-60-20
  return { left, center, right };
}

// Optionally, a hook for React usage
import { useState, useEffect } from 'react';

export function useDynamicLayoutWidths() {
  const [widths, setWidths] = useState(() => getDynamicLayoutWidths(window.innerWidth));

  useEffect(() => {
    function handleResize() {
      setWidths(getDynamicLayoutWidths(window.innerWidth));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return widths;
} 