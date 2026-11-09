"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DURATION = 2200; // progress animation length (ms)
const EXIT_DELAY = 320; // hold at 100% before the curtain lifts
const EXIT_DURATION = 900; // must match the transition duration below

const statusFor = (value) => {
  if (value >= 100) return "Welcome";
  if (value >= 72) return "Polishing details";
  if (value >= 38) return "Preparing experience";
  return "Loading assets";
};

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("preloader-lock");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      const reducedFrame = requestAnimationFrame(() => {
        setProgress(100);
        setLeaving(true);
      });
      const reducedTimer = window.setTimeout(() => {
        setHidden(true);
        root.classList.remove("preloader-lock");
      }, 200);

      return () => {
        cancelAnimationFrame(reducedFrame);
        window.clearTimeout(reducedTimer);
        root.classList.remove("preloader-lock");
      };
    }

    let raf = 0;
    let exitTimer = 0;
    let removeTimer = 0;
    const start = performance.now();

    const finish = () => {
      setProgress(100);
      exitTimer = window.setTimeout(() => {
        setLeaving(true);
        removeTimer = window.setTimeout(() => {
          setHidden(true);
          root.classList.remove("preloader-lock");
        }, EXIT_DURATION);
      }, EXIT_DELAY);
    };

    const tick = (now) => {
      const t = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setProgress(eased * 100);

      if (t < 1) raf = requestAnimationFrame(tick);
      else finish();
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      root.classList.remove("preloader-lock");
    };
  }, []);

  if (hidden) return null;

  const value = Math.round(progress);
  const display = String(value).padStart(3, "0");

  return (
    <div
      id="preloader"
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[999] flex flex-col overflow-hidden bg-page transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        leaving ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* ---------- Ambient background ---------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="preloader-drift-a absolute -left-[20%] -top-[25%] h-[70vmax] w-[70vmax] rounded-full bg-primary/20 blur-[120px] dark:bg-primary/15" />
        <div className="preloader-drift-b absolute -bottom-[30%] -right-[20%] h-[60vmax] w-[60vmax] rounded-full bg-secondary/20 blur-[120px] dark:bg-secondary/15" />
        <div className="preloader-grid absolute inset-0" />
      </div>

      {/* ---------- Top meta bar ---------- */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5 sm:px-8 sm:pt-7">
        <span className="preloader-fade text-[9px] font-medium uppercase tracking-[0.35em] text-paragraph/55 sm:text-[10px]">
          Portfolio
        </span>
        <span className="preloader-fade flex items-center gap-2 text-[9px] uppercase tracking-[0.3em] text-paragraph/55 sm:text-[10px]">
          <span className="preloader-dot h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Loading
        </span>
      </div>

      {/* ---------- Center stage ---------- */}
      <div
        className={`relative z-10 flex flex-1 flex-col items-center justify-center px-5 transition-opacity duration-300 ${
          leaving ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="overflow-hidden px-1 py-1">
          <Image
            src="/Image/erfan-shawon-logo.png"
            alt="Erfan Shawon"
            width={1600}
            height={691}
            priority
            className="preloader-logo h-9 w-auto sm:h-11 md:h-12"
          />
        </div>

        <span className="preloader-fade mt-4 text-[8px] uppercase tracking-[0.45em] text-paragraph/45 sm:mt-5 sm:text-[9px]">
          Full Stack Developer
        </span>

        <div className="preloader-fade-late mt-10 w-full max-w-[260px] sm:mt-12 sm:max-w-[340px]">
          <div className="mb-2.5 flex items-end justify-between gap-4">
            <span className="text-[9px] uppercase tracking-[0.28em] text-paragraph/55 sm:text-[10px]">
              {statusFor(value)}
            </span>
            <span className="text-xs font-medium tabular-nums tracking-[0.15em] text-heading sm:text-sm">
              {display}
              <span className="text-paragraph/40">%</span>
            </span>
          </div>

          <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-line/80">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
              style={{ width: `${progress}%` }}
            />
            <div className="preloader-sweep absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/60 to-transparent mix-blend-overlay" />
          </div>
        </div>
      </div>

      {/* ---------- Bottom meta bar ---------- */}
      <div className="relative z-10 flex items-center justify-between px-5 pb-5 text-[8px] uppercase tracking-[0.3em] text-paragraph/40 sm:px-8 sm:pb-7 sm:text-[9px]">
        <span>Chattogram, Bangladesh</span>
        <span className="hidden sm:inline">Laravel &bull; MERN &bull; Next.js</span>
        <span className="sm:hidden">Laravel &bull; MERN</span>
      </div>

      {/* Thin luminous edge */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />
    </div>
  );
}
