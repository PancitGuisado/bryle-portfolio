import { useRef, useEffect } from "react";

export function use3DTilt(maxRotation = 8, scale = 1.02) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Ensure style transformations can be preserve-3d
    el.style.transformStyle = "preserve-3d";

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xc = rect.width / 2;
      const yc = rect.height / 2;

      const rotateX = -(y - yc) / (rect.height / (maxRotation * 2));
      const rotateY = (x - xc) / (rect.width / (maxRotation * 2));

      el.style.transition = "none";
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`;

      const glare = el.querySelector(".card-glare") as HTMLElement;
      if (glare) {
        glare.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.08) 0%, transparent 60%)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease, border-color 0.3s ease";
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;

      const glare = el.querySelector(".card-glare") as HTMLElement;
      if (glare) {
        glare.style.background = "transparent";
      }
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [maxRotation, scale]);

  return elementRef;
}
export default use3DTilt;
