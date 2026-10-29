import { useEffect, useRef } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import * as Icons from "lucide-react";

export function Icon({ name, className = "h-6 w-6" }) {
  const C = Icons[name] || Icons.Circle;
  return <C className={className} aria-hidden="true" />;
}

export function Counter({ value, decimals = 0, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const reduce = useReducedMotion();

  const fmt = (v) =>
    prefix +
    v.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }) +
    suffix;

  useEffect(() => {
    if (!ref.current) return;
    if (!inView || reduce) {
      ref.current.textContent = fmt(value);
      return;
    }
    const c = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = fmt(v);
      },
    });
    return () => c.stop();
  }, [inView, value, decimals, prefix, suffix, reduce]);

  return <span ref={ref}>{fmt(0)}</span>;
}

export function Section({ id, title, intro, dark = false, children }) {
  return (
    <section id={id} className={dark ? "bg-forest-deep text-white" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <h2 className="max-w-3xl text-3xl font-extrabold sm:text-5xl">{title}</h2>
        {intro && <p className={`mt-5 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/80" : "text-ink/75"}`}>{intro}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.div>
  );
}