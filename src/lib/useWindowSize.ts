import { useState, useEffect, useRef } from "react";
import { useMounted } from "./useMounted";

/**
 * A hook that provides the dimensions
 * of the window. Responsive to window
 * resizes.
 */
export const useWindowSize = (): {
  windowWidth: number | undefined;
  windowHeight: number | undefined;
} => {
  const mounted = useMounted();

  const [width, setWidth] = useState<number | undefined>();
  const [height, setHeight] = useState<number | undefined>();
  const lastApplied = useRef({ w: 0, h: 0 });

  useEffect(() => {
    if (!mounted) return;

    const applyDimensions = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const prev = lastApplied.current;

      if (w > 0) {
        setWidth(w);
      }
      if (h <= 0) {
        return;
      }

      if (prev.w === 0) {
        setHeight(h);
        lastApplied.current = { w, h };
        return;
      }

      if (prev.w !== w) {
        setHeight(h);
        lastApplied.current = { w, h };
        return;
      }
    };

    applyDimensions();
  }, [mounted]);

  return { windowWidth: width, windowHeight: height };
};

export const useWindowWidth = (): number | undefined =>
  useWindowSize().windowWidth;

export const useWindowHeight = (): number | undefined =>
  useWindowSize().windowHeight;