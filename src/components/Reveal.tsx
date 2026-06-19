import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useRef, useState, type Key, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds (e.g. for staggering grid items). */
  delay?: number;
  /** Vertical offset the element animates up from. */
  y?: number;
  // Required so `<Reveal key={...}>` type-checks in this project's TS/JSX config.
  // React strips `key` before it reaches props, so this is inert at runtime — but
  // without it, tsc errors ("Property 'key' does not exist on type 'RevealProps'")
  // at every list call site. Do NOT remove.
  key?: Key;
}

/**
 * Scroll-reveal wrapper that is GUARANTEED to end up visible.
 *
 * The previous homepage sections used framer-motion `whileInView` with an
 * `initial={{ opacity: 0 }}`. If the in-view trigger never fired — fast scroll,
 * IntersectionObserver quirks, route transitions, StrictMode double-mounts — the
 * section stayed at opacity:0 and looked blank/broken.
 *
 * This component reveals on intersection BUT also:
 *  - reveals immediately for `prefers-reduced-motion` users, and
 *  - has a hard timeout fallback so content always becomes visible within ~1.2s
 *    regardless of whether the observer ever fired.
 */
export default function Reveal({ children, className = '', delay = 0, y = 20 }: RevealProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (prefersReduced) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    // Hard fallback: never leave content permanently hidden.
    const fallback = window.setTimeout(() => setShown(true), 1200);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          window.clearTimeout(fallback);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.01 },
    );
    observer.observe(el);
    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [prefersReduced]);

  const offset = prefersReduced ? 0 : y;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : offset }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
