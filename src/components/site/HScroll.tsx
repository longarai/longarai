import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  /** aria label for the scroll region */
  label: string;
  className?: string;
};

/**
 * Horizontal, snap-scrolling rail with keyboard/arrow controls.
 * Used to keep dense sections short vertically.
 */
export function HScroll({ children, label, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={ref}
        onScroll={update}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {children}
      </div>

      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          disabled={atStart}
          aria-label="Anterior"
          className="border-border text-foreground hover:border-foreground/50 rounded-full border p-2 transition-colors disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          disabled={atEnd}
          aria-label="Próximo"
          className="border-border text-foreground hover:border-foreground/50 rounded-full border p-2 transition-colors disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
        <span className="font-mono-tech text-muted-foreground ml-2 text-[11px] tracking-[0.2em] uppercase">
          arraste para o lado
        </span>
      </div>
    </div>
  );
}