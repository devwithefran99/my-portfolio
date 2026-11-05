"use client";

import { useState } from "react";
import { FiArrowUpRight, FiExternalLink, FiFolder } from "react-icons/fi";

import {
  SiGithub,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiCss,
} from "react-icons/si";

// =====================================================
// ✏️ নিজের মতো পরিবর্তন করতে পারো
// =====================================================

const GITHUB_URL = "https://github.com/devwithefran99";

const categories = ["All", "Laravel", "React", "Next.js"];


// Technology icons
const techIcons = {
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Next.js": { icon: SiNextdotjs, adaptive: true },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  CSS: { icon: SiCss, color: "#1572B6" },
};

// Project information
const projects = [
  {
    id: "01",
    title: "BanglaBazar24/7",
    category: "Laravel",
    url: "https://banglabazar247.store",
    description:
      "A full-featured online grocery store for Chattogram, selling fresh meat, dried fish, tea and daily groceries with fast delivery and cash on delivery.",
    features: ["Cart & Checkout", "Wishlist", "Social Login", "Flash Sales"],
    tech: ["Laravel", "PHP"],
    image: null,
  },
  {
    id: "02",
    title: "Special Motor Winding",
    category: "Laravel",
    url: "https://specialmotorwinding.com",
    description:
      "A bilingual business website for a motor rewinding and repair workshop in Abu Dhabi, built to turn visitors into service bookings.",
    features: ["English / Arabic", "Booking Form", "Service Pages", "WhatsApp CTA"],
    tech: ["Laravel", "PHP"],
    image: null,
  },
  {
    id: "03",
    title: "SharafatAlam Portfolio",
    category: "React",
    url: "https://sharafatalam.netlify.app",
    description:
      "A modern developer portfolio for an AI and ML engineer, with an animated hero, orbiting tech badges and a clean dark interface.",
    features: ["Animated Hero", "Responsive", "Dark UI"],
    tech: ["React", "Tailwind CSS"],
    image: null,
  },
  {
    id: "04",
    title: "Uddokta-BD",
    category: "Next.js",
    url: "https://uddokta-bd.vercel.app",
    description:
      "A social development events platform where communities discover upcoming events, volunteer and track their collective impact.",
    features: ["Event Listing", "Auth", "Impact Stats", "Newsletter"],
    tech: ["Next.js", "Node.js"],
    image: null,
  },
  {
    id: "05",
    title: "FitGym",
    category: "Next.js",
    url: "https://fitgym-ctg.vercel.app",
    description:
      "A workout library covering every major muscle group, with detailed exercise pages and a personal plan to save your favourite lifts.",
    features: ["Workout Library", "My Plan", "Dynamic Routes"],
    tech: ["Next.js"],
    image: null,
  },
  {
    id: "06",
    title: "DevStack",
    category: "React",
    url: "https://dev-stack-by-react.netlify.app",
    description:
      "A React project built with a component-based architecture and a clean, responsive interface.",
    features: ["Component-based", "Responsive"],
    tech: ["React"],
    image: null,
  },
];

// =====================================================

// Live website screenshot
const thumbFor = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;

const hostOf = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

// Technology chip component
function TechChip({ name }) {
  const meta = techIcons[name];
  const Icon = meta?.icon;

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-white/80">
      {Icon && (
        <Icon
          size={12}
          className={meta.adaptive ? "text-slate-900 dark:text-white" : ""}
          style={meta.color ? { color: meta.color } : undefined}
        />
      )}
      {name}
    </span>
  );
}

// Project card component
function ProjectCard({ project, index }) {
  const src = project.image ?? thumbFor(project.url);

  return (
    <article
      className="skill-anim group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(16,185,129,0.14)] dark:border-white/10 dark:bg-white/[0.035]"
      style={{
        animation: "skill-in 0.5s ease both",
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Browser preview */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live site`}
        className="relative block p-3 pb-0"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-slate-900">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 bg-white/80 px-3 py-2 dark:border-white/10 dark:bg-slate-950/60">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </span>

            <span className="mx-auto max-w-[70%] truncate rounded-md bg-slate-100 px-3 py-0.5 text-[10px] text-slate-500 dark:bg-white/5 dark:text-white/40">
              {hostOf(project.url)}
            </span>

            <span className="w-8" />
          </div>

          {/* Preview area */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-emerald-500/15 via-slate-100 to-cyan-500/15 dark:via-slate-900">
              <span className="text-4xl font-bold text-emerald-500/40">
                {project.title.charAt(0)}
              </span>

              <span className="text-[10px] uppercase tracking-[2px] text-slate-400 dark:text-white/30">
                {hostOf(project.url)}
              </span>
            </div>

            {/* Website screenshot */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${project.title} preview`}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-500 group-hover:bg-slate-950/40 group-hover:opacity-100">
              <span className="flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl transition-transform duration-500 group-hover:translate-y-0">
                <FiArrowUpRight size={20} />
              </span>
            </div>

            {/* Live badge */}
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-700 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:text-white/80">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
              Live
            </span>
          </div>
        </div>
      </a>

      {/* Project content */}
      <div className="flex flex-1 flex-col p-5 pt-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-emerald-700 dark:text-emerald-400">
            {project.category}
          </span>

          <span className="text-2xl font-bold leading-none text-slate-200 dark:text-white/10">
            {project.id}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-7 text-slate-600 dark:text-white/50">
          {project.description}
        </p>

        {/* Feature tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.map((f) => (
            <span
              key={f}
              className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-white/50"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-emerald-500/50 via-emerald-500/10 to-transparent" />

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechChip key={t} name={t} />
            ))}
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-3.5 py-2 text-[11px] font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/40"
          >
            Live Site

            <FiExternalLink
              size={12}
              className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </article>
  );
}

// =====================================================
// Projects section
// =====================================================

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const countOf = (cat) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-6%] top-[6%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[6%] left-[-6%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5">
            <FiFolder className="text-emerald-500" size={12} />

            <span className="text-[10px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
              Projects
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Live projects I&apos;ve shipped
            <span className="text-emerald-500">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/50">
            Real products running on the web, built with Laravel, React and
            Next.js. Open any card to see it live.
          </p>
        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isActive = active === cat;

            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={isActive}
                className={`
                  rounded-xl border px-4 py-2 text-xs font-medium transition-all duration-300
                  ${
                    isActive
                      ? "border-transparent bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25"
                      : "border-slate-200 bg-white/60 text-slate-600 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60 dark:hover:text-white"
                  }
                `}
              >
                {cat}

                <span className="ml-1.5 opacity-70">
                  {countOf(cat)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard
              key={`${active}-${project.id}`}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* More on GitHub */}
        <div className="mt-12 text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-5 py-3 text-xs font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70 dark:hover:text-white"
          >
            <SiGithub size={14} />
            More projects on GitHub
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}