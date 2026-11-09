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
} from "react-icons/si";


const GITHUB_URL = "https://github.com/devwithefran99";

const categories = ["All", "Laravel", "React", "Next.js"];

// tech নামের সাথে icon মিলিয়ে দেয়। নতুন tech লাগলে এখানে জুড়ে দাও।
const techIcons = {
  Laravel: { icon: SiLaravel, color: "#FF2D20" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Next.js": { icon: SiNextdotjs, adaptive: true },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
};


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
    // ✏️ এই description টা placeholder, নিজের মতো লিখে নাও
    description:
      "A React project built with a component-based architecture and a clean, responsive interface.",
    features: ["Component-based", "Responsive"],
    tech: ["React"],
    image: null,
  },
];
// =====================================================

// Live site এর screenshot (WordPress mShots), screenshot না দিলে এটা কাজ করবে
const thumbFor = (url) =>
  `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;

const hostOf = (url) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

function TechChip({ name }) {
  const meta = techIcons[name];
  const Icon = meta?.icon;
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-2.5 py-1 text-[11px] font-medium text-heading/80 ">
      {Icon && (
        <Icon
          size={12}
          className={meta.adaptive ? "text-heading " : ""}
          style={meta.color ? { color: meta.color } : undefined}
        />
      )}
      {name}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const src = project.image ?? thumbFor(project.url);

  return (
    <article
      className="skill-anim group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-card/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_24px_60px_color-mix(in_srgb,var(--primary)_14%,transparent)] "
      style={{
        animation: "skill-in 0.5s ease both",
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* ---------- Browser preview ---------- */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live site`}
        className="relative block p-3 pb-0"
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-page ">
          {/* Fake browser bar */}
          <div className="flex items-center gap-2 border-b border-line bg-card/80 px-3 py-2 ">
            <span className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-amber-400/80" />
              <span className="h-2 w-2 rounded-full bg-green-400/80" />
            </span>
            <span className="mx-auto max-w-[70%] truncate rounded-md bg-page px-3 py-0.5 text-[10px] text-paragraph/80 ">
              {hostOf(project.url)}
            </span>
            <span className="w-8" />
          </div>

          {/* Preview area */}
          <div className="relative aspect-[16/10] overflow-hidden">
            {/* Placeholder (screenshot না এলে এটাই দেখাবে) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-primary/15 via-page to-secondary/15 ">
              <span className="text-4xl font-bold text-primary/40">
                {project.title.charAt(0)}
              </span>
              <span className="text-[10px] uppercase tracking-[2px] text-paragraph/60 ">
                {hostOf(project.url)}
              </span>
            </div>

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
              <span className="flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-card text-heading shadow-xl transition-transform duration-500 group-hover:translate-y-0">
                <FiArrowUpRight size={20} />
              </span>
            </div>

            {/* Live badge */}
            <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-card/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-heading/80 shadow-sm backdrop-blur ">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_90%,transparent)]" />
              Live
            </span>
          </div>
        </div>
      </a>

      {/* ---------- Content ---------- */}
      <div className="flex flex-1 flex-col p-5 pt-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-primary/20 bg-primary/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-primary ">
            {project.category}
          </span>
          <span className="text-2xl font-bold leading-none text-line ">
            {project.id}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold tracking-tight text-heading ">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-7 text-paragraph ">
          {project.description}
        </p>

        {/* Feature tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.features.map((f) => (
            <span
              key={f}
              className="rounded-md bg-page px-2 py-1 text-[10px] font-medium text-paragraph "
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

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
            className="group/btn flex shrink-0 items-center gap-1.5 rounded-xl bg-primary hover:bg-primary-hover px-3.5 py-2 text-[11px] font-semibold text-on-primary shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40"
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
      <div className="pointer-events-none absolute right-[-6%] top-[6%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[6%] left-[-6%] h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
            <FiFolder className="text-primary" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
              Projects
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Live projects I&apos;ve shipped
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-paragraph ">
            Real products running on the web, built with Laravel, React and
            Next.js. Open any card to see it live.
          </p>
        </div>

        {/* ================= FILTER ================= */}
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
                      ? "border-transparent bg-primary hover:bg-primary-hover text-on-primary shadow-lg shadow-primary/25"
                      : "border-line bg-card/60 text-paragraph hover:border-primary/40 hover:text-primary-hover "
                  }
                `}
              >
                {cat}
                <span className="ml-1.5 opacity-70">{countOf(cat)}</span>
              </button>
            );
          })}
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <ProjectCard
              key={`${active}-${project.id}`}
              project={project}
              index={i}
            />
          ))}
        </div>

        {/* ================= MORE ON GITHUB ================= */}
        <div className="mt-12 text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-card/60 px-5 py-3 text-xs font-semibold text-heading/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-hover "
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