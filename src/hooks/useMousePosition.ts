import { useEffect, useState, useCallback, useRef } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState(() => {
    if (typeof window !== "undefined") {
      return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    }

    return { x: 0, y: 0 };
  });
  const frameRef = useRef<number | null>(null);
  const pendingRef = useRef(position);

  const handleMouse = useCallback((e: MouseEvent) => {
    pendingRef.current = { x: e.clientX, y: e.clientY };

    if (frameRef.current !== null) {
      return;
    }

    frameRef.current = window.requestAnimationFrame(() => {
      setPosition(pendingRef.current);
      frameRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [handleMouse]);

  return position;
}
