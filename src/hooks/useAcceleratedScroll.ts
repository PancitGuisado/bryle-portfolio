import { useEffect } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const EASING = 0.14;
const SMALL_WHEEL_BOOST = 1.45;
const LARGE_WHEEL_BOOST = 1.75;
const MIN_WHEEL_IMPULSE = 28;
const KEYBOARD_STEP = 140;
const PAGE_STEP_RATIO = 0.85;

function hasScrollableParent(node: HTMLElement | null, deltaY: number) {
  let element = node;

  while (element && element !== document.body) {
    const style = window.getComputedStyle(element);
    const overflowY = style.overflowY;
    const canScroll =
      /(auto|scroll|overlay)/.test(overflowY) &&
      element.scrollHeight > element.clientHeight + 1;

    if (canScroll) {
      const atTop = element.scrollTop <= 0;
      const atBottom =
        element.scrollTop + element.clientHeight >= element.scrollHeight - 1;

      if ((deltaY < 0 && !atTop) || (deltaY > 0 && !atBottom)) {
        return true;
      }
    }

    element = element.parentElement;
  }

  return false;
}

export function useAcceleratedScroll() {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    let current = window.scrollY;
    let target = window.scrollY;
    let animationFrame = 0;

    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    const animate = () => {
      const difference = target - current;

      if (Math.abs(difference) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        animationFrame = 0;
        return;
      }

      current += difference * EASING;
      window.scrollTo(0, current);
      animationFrame = window.requestAnimationFrame(animate);
    };

    const start = () => {
      if (!animationFrame) {
        current = window.scrollY;
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const normalizeWheelDelta = (event: WheelEvent) => {
      if (event.deltaMode === 1) {
        return event.deltaY * 16;
      }

      if (event.deltaMode === 2) {
        return event.deltaY * window.innerHeight;
      }

      return event.deltaY;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        return;
      }

      const wheelDelta = normalizeWheelDelta(event);
      const targetElement = event.target as HTMLElement | null;

      if (hasScrollableParent(targetElement, wheelDelta)) {
        return;
      }

      event.preventDefault();

      const direction = Math.sign(wheelDelta);
      const impulse =
        Math.abs(wheelDelta) < MIN_WHEEL_IMPULSE
          ? direction * MIN_WHEEL_IMPULSE
          : wheelDelta;
      const boost = Math.abs(impulse) < 80 ? SMALL_WHEEL_BOOST : LARGE_WHEEL_BOOST;
      const nextTarget = target + impulse * boost;

      target = clamp(nextTarget, 0, maxScroll());
      start();
    };

    const isInteractiveElement = (node: EventTarget | null) => {
      const element = node as HTMLElement | null;
      if (!element) {
        return false;
      }

      return Boolean(
        element.closest(
          'input, textarea, select, [contenteditable="true"], [role="textbox"]'
        )
      );
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        isInteractiveElement(event.target)
      ) {
        return;
      }

      const pageStep = window.innerHeight * PAGE_STEP_RATIO;
      let delta = 0;

      switch (event.key) {
        case "ArrowDown":
          delta = KEYBOARD_STEP;
          break;
        case "ArrowUp":
          delta = -KEYBOARD_STEP;
          break;
        case "PageDown":
        case " ":
          delta = pageStep;
          break;
        case "PageUp":
          delta = -pageStep;
          break;
        case "Home":
          target = 0;
          event.preventDefault();
          start();
          return;
        case "End":
          target = maxScroll();
          event.preventDefault();
          start();
          return;
        default:
          return;
      }

      event.preventDefault();
      target = clamp(target + delta, 0, maxScroll());
      start();
    };

    const onResize = () => {
      const clamped = clamp(target, 0, maxScroll());
      target = clamped;
      current = clamp(window.scrollY, 0, maxScroll());
    };

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;

      if (!anchor) {
        return;
      }

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      const destination = document.querySelector(hash) as HTMLElement | null;
      if (!destination) {
        return;
      }

      event.preventDefault();

      const rootStyles = window.getComputedStyle(document.documentElement);
      const offset = parseFloat(rootStyles.scrollPaddingTop || "0");
      const nextTarget = destination.getBoundingClientRect().top + window.scrollY - offset;

      target = clamp(nextTarget, 0, maxScroll());
      start();
      window.history.replaceState(null, "", hash);
    };

    const onUserScroll = () => {
      if (!animationFrame) {
        current = window.scrollY;
        target = window.scrollY;
      }
    };

    document.addEventListener("wheel", onWheel, { passive: false });
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onUserScroll, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      document.removeEventListener("wheel", onWheel);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onUserScroll);
      document.removeEventListener("click", onAnchorClick);
    };
  }, []);
}
