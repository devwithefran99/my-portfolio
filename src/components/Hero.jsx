"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FiArrowUpRight,
  FiDownload,
  FiCode,
  FiLayers,
  FiServer,
  FiCpu,
  FiActivity,
} from "react-icons/fi";
import {
  SiLaravel,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";

// =====================================================
//  ✏️  এই অংশটুকু নিজের মতো বদলাও
// =====================================================
const profile = {
  name: "Your Name",
  roles: [
    "Full Stack Developer",
    "Laravel Developer",
    "MERN Stack Developer",
    "Next.js Developer",
  ],
  description:
    "I build fast, scalable web applications with Laravel and the MERN stack, from database design and APIs to polished, responsive interfaces.",
  image: "/profile.png", // public/ folder এ নিজের ছবি রাখো
};

const stats = [
  { value: "5+", label: "Projects", icon: FiCode },
  { value: "2", label: "Core Stacks", icon: FiLayers },
  { value: "15+", label: "Technologies", icon: FiCpu },
  { value: "100%", label: "Dedication", icon: FiActivity },
];

// Orbit এ যে badge গুলো ঘুরবে (angle নিজে নিজেই সমান ভাগ হবে)
const orbitBadges = [
  { icon: SiLaravel, label: "Laravel", color: "#FF2D20" },
  { icon: SiPhp, label: "PHP", color: "#777BB4" },
  { icon: SiMysql, label: "MySQL", color: "#4479A1" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiExpress, label: "Express", adaptive: true },
  { icon: SiReact, label: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  { icon: SiNextdotjs, label: "Next.js", adaptive: true },
];
// =====================================================

const ORBIT_DURATION = "32s";

export default function Hero() {
  // ---------- Typing effect ----------
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = profile.roles[wordIndex];
    const fullyTyped = !isDeleting && text === current;
    const fullyDeleted = isDeleting && text === "";

    let delay = isDeleting ? 50 : 100;
    if (fullyTyped) delay = 1400;
    if (fullyDeleted) delay = 350;

    const timer = setTimeout(() => {
      if (fullyTyped) {
        setIsDeleting(true);
      } else if (fullyDeleted) {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % profile.roles.length);
      } else {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  // ---------- Mouse দিয়ে 3D tilt ----------
  const wrapRef = useRef(null);
  const sceneRef = useRef(null);

  const handleMove = (e) => {
    if (!wrapRef.current || !sceneRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    sceneRef.current.style.transform = `rotateX(${(-y * 14).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)`;
  };

  const resetTilt = () => {
    if (sceneRef.current) {
      sceneRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      {/* ---------- Background: dot grid + glow ---------- */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.28)_1px,transparent_0)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]"
      />
      <div className="pointer-events-none absolute left-[2%] top-[12%] h-72 w-72 rounded-full bg-emerald-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute right-[4%] top-[22%] h-80 w-80 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= LEFT : CONTENT ================= */}
          <div className="relative z-10 order-2 text-center lg:order-1 lg:text-left">
            {/* Status badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              <span className="text-[10px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
                Available for opportunities
              </span>
            </div>

            <p className="mb-2 text-sm text-slate-500 dark:text-white/50">
              Hello, I&apos;m
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl xl:text-6xl">
              {profile.name}
              <span className="text-emerald-500">.</span>
            </h1>

            {/* Typing text */}
            <div className="mt-4 min-h-[44px] text-xl font-semibold sm:text-2xl md:text-3xl">
              <span className="text-slate-500 dark:text-white/60">
                I&apos;m a{" "}
              </span>
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="ml-1 inline-block h-6 w-[2px] translate-y-1 animate-pulse bg-emerald-500 sm:h-7" />
            </div>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-white/50 lg:mx-0">
              {profile.description}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40"
              >
                Explore Projects
                <FiArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-5 py-3 text-xs font-semibold text-slate-700 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:text-white"
              >
                Download CV
                <FiDownload size={14} />
              </a>
            </div>

            {/* Mini stack line */}
            <div className="mt-7 flex items-center justify-center gap-4 text-[10px] text-slate-500 dark:text-white/40 lg:justify-start">
              <span className="flex items-center gap-1.5">
                <FiServer className="text-emerald-500" />
                PHP / Laravel
              </span>
              <span className="h-3 w-px bg-slate-300 dark:bg-white/10" />
              <span className="flex items-center gap-1.5">
                <FiLayers className="text-emerald-500" />
                MERN
              </span>
              <span className="h-3 w-px bg-slate-300 dark:bg-white/10" />
              <span className="flex items-center gap-1.5">
                <FiCode className="text-emerald-500" />
                Next.js
              </span>
            </div>
          </div>

          {/* ================= RIGHT : 3D ORBIT ================= */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div
              ref={wrapRef}
              onMouseMove={handleMove}
              onMouseLeave={resetTilt}
              className="
                relative flex h-[300px] w-[300px] items-center justify-center
                sm:h-[440px] sm:w-[440px] lg:h-[540px] lg:w-[540px]
                [--r:112px] sm:[--r:172px] lg:[--r:220px]
              "
              style={{ perspective: "1200px" }}
            >
              {/* Back glow (3D এর বাইরে, তাই blur ঠিক থাকে) */}
              <div className="pointer-events-none absolute inset-[18%] rounded-full bg-emerald-500/25 blur-[70px] dark:bg-emerald-500/20" />

              {/* ---------- 3D scene ---------- */}
              <div
                ref={sceneRef}
                className="relative h-full w-full transition-transform duration-200 ease-out"
                style={{ transformStyle: "preserve-3d", "--tilt": "65deg" }}
              >
                {/* Profile image (z = 0 plane) */}
                <div className="absolute inset-[20%]">
                  <div
                    className="orbit-anim relative h-full w-full"
                    style={{ animation: "float-y 6s ease-in-out infinite" }}
                  >
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-500 opacity-80 blur-[2px]" />
                    <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-2xl shadow-emerald-500/30 dark:border-slate-900 dark:bg-slate-800">
                      <Image
                        src={profile.image}
                        alt={profile.name}
                        fill
                        priority
                        sizes="(min-width: 1024px) 320px, (min-width: 640px) 260px, 180px"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* Tilted orbit plane */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: "rotateX(var(--tilt))",
                  }}
                >
                  {/* Orbit path rings */}
                  <div
                    className="absolute rounded-full border border-emerald-500/30"
                    style={{
                      width: "calc(var(--r) * 2)",
                      height: "calc(var(--r) * 2)",
                    }}
                  />
                  <div
                    className="absolute rounded-full border border-dashed border-cyan-500/25"
                    style={{
                      width: "calc(var(--r) * 2.3)",
                      height: "calc(var(--r) * 2.3)",
                    }}
                  />

                  {/* Spinning layer */}
                  <div
                    className="orbit-anim absolute left-1/2 top-1/2 h-0 w-0"
                    style={{
                      transformStyle: "preserve-3d",
                      animation: `orbit-spin ${ORBIT_DURATION} linear infinite`,
                    }}
                  >
                    {orbitBadges.map((badge, i) => {
                      const angle = (360 / orbitBadges.length) * i;
                      const Icon = badge.icon;

                      return (
                        <div
                          key={badge.label}
                          className="absolute left-0 top-0 h-0 w-0"
                          style={{
                            transformStyle: "preserve-3d",
                            transform: `rotateZ(${angle}deg) translateX(var(--r))`,
                          }}
                        >
                          {/* Counter-rotate: badge সবসময় সোজা, screen এর দিকে মুখ করে */}
                          <div
                            className="orbit-anim absolute left-0 top-0 h-0 w-0"
                            style={{
                              "--a": `${angle}deg`,
                              transformStyle: "preserve-3d",
                              animation: `orbit-counter ${ORBIT_DURATION} linear infinite`,
                            }}
                          >
                            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
                              <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200 bg-white/95 px-2.5 py-2 shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/90 dark:shadow-black/40 sm:px-3.5">
                                <Icon
                                  className={`h-4 w-4 sm:h-[18px] sm:w-[18px] ${
                                    badge.adaptive
                                      ? "text-slate-900 dark:text-white"
                                      : ""
                                  }`}
                                  style={
                                    badge.color
                                      ? { color: badge.color }
                                      : undefined
                                  }
                                />
                                <span className="hidden text-[11px] font-semibold text-slate-700 dark:text-white/80 sm:block">
                                  {badge.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STAT CARDS ================= */}
        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-emerald-500/[0.06]"
              >
                <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-emerald-500/10 blur-2xl transition-all duration-500 group-hover:bg-emerald-500/25" />

                <div className="relative flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
                    {item.value}
                  </h3>
                  <div className="rounded-lg border border-emerald-500/10 bg-emerald-500/10 p-2 text-emerald-600 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 dark:text-emerald-400">
                    <Icon size={16} />
                  </div>
                </div>

                <p className="mt-2 text-[10px] uppercase tracking-[1.5px] text-slate-500 dark:text-white/40">
                  {item.label}
                </p>

                <div className="mt-4 h-px w-full bg-gradient-to-r from-emerald-500/50 via-emerald-500/10 to-transparent" />

                <span className="absolute bottom-3 right-4 text-[8px] text-slate-300 dark:text-white/10">
                  0{index + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}