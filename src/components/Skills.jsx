"use client";

import { useState } from "react";
import { FiCpu, FiLayers } from "react-icons/fi";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiNamecheap,
  SiCpanel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const categories = ["All", "Frontend", "Backend", "Database", "Tools", "Deployment"];

const skills = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: SiCss, color: "#1572B6" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, adaptive: true },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Bootstrap", category: "Frontend", icon: SiBootstrap, color: "#7952B3" },
  { name: "jQuery", category: "Frontend", icon: SiJquery, color: "#0769AD" },
  { name : "Ajax", category: "Frontend", icon: SiJquery, color: "#0769AD" },
  // Backend
  { name: "PHP", category: "Backend", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", category: "Backend", icon: SiLaravel, color: "#FF2D20" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", category: "Backend", icon: SiExpress, adaptive: true },
  // Database
  { name: "MySQL", category: "Database", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", category: "Database", icon: SiMongodb, color: "#47A248" },
  // Tools
  { name: "Git", category: "Tools", icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "Tools", icon: SiGithub, adaptive: true },
  { name: "VS Code", category: "Tools", icon: VscVscode, color: "#007ACC" },
  { name: "npm", category: "Tools", icon: SiNpm, color: "#CB3837" },
  { name: "Vite", category: "Tools", icon: SiVite, color: "#646CFF" },
  { name: "Figma", category: "Tools", icon: SiFigma, color: "#F24E1E" },
  // Deployment & Hosting
  { name: "Netlify", category: "Deployment", icon: SiNetlify, color: "#00C7B7" },
  { name: "Vercel", category: "Deployment", icon: SiVercel, adaptive: true },
  { name: "Namecheap", category: "Deployment", icon: SiNamecheap, color: "#FF5C00" },
  { name: "cPanel", category: "Deployment", icon: SiCpanel, color: "#FF6C2C" },
];

// উপরের দুইটা বড় card (নাম দিয়ে skills থেকে icon তুলে আনে)
const stacks = [
  {
    id: "01",
    title: "Laravel Stack",
    tagline:
      "Backend-driven applications: e-commerce systems, business websites and admin panels with clean, practical architecture.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "jQuery"],
  },
  {
    id: "02",
    title: "MERN Stack",
    tagline:
      "Modern, API-driven web apps with a React front end, a Node and Express back end, and MongoDB for data.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
];

const learning = ["React", "TypeScript", "Next.js"];
const exploring = ["AI Integration", "AI-Assisted Development"];
// =====================================================

const byName = Object.fromEntries(skills.map((s) => [s.name, s]));

function SkillIcon({ skill, size = 22 }) {
  const Icon = skill.icon;
  return (
    <Icon
      size={size}
      className={skill.adaptive ? "text-heading " : ""}
      style={skill.color ? { color: skill.color } : undefined}
    />
  );
}

function TechChip({ name }) {
  const skill = byName[name];
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-heading/80 shadow-sm transition-colors duration-300 hover:border-primary/40 ">
      {skill && <SkillIcon skill={skill} size={14} />}
      {name}
    </span>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  const countOf = (cat) =>
    cat === "All" ? skills.length : skills.filter((s) => s.category === cat).length;

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-6%] top-[8%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[4%] right-[-6%] h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
            <FiLayers className="text-primary" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
              Skills
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Tech I build with
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-paragraph ">
            A focused toolkit across{" "}
            <span className="font-semibold text-heading ">
              Laravel
            </span>{" "}
            and the{" "}
            <span className="font-semibold text-heading ">
              MERN stack
            </span>
            , chosen for shipping fast, maintainable products.
          </p>
        </div>

        {/* ================= CORE STACKS ================= */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {stacks.map((stack) => (
            <div
              key={stack.id}
              className="group relative overflow-hidden rounded-3xl border border-line bg-card/70 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_color-mix(in_srgb,var(--primary)_12%,transparent)] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/25" />

              <div className="relative flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] text-primary ">
                    Core stack
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-heading ">
                    {stack.title}
                  </h3>
                </div>
                <span className="text-4xl font-bold leading-none text-line ">
                  {stack.id}
                </span>
              </div>

              <p className="relative mt-3 text-sm leading-7 text-paragraph ">
                {stack.tagline}
              </p>

              <div className="relative mt-6 h-px w-full bg-gradient-to-r from-primary/50 via-primary/10 to-transparent" />

              <div className="relative mt-5 flex flex-wrap gap-2">
                {stack.tech.map((name) => (
                  <TechChip key={name} name={name} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= FILTER ================= */}
        <div className="mt-14 flex flex-wrap justify-center gap-2">
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

        {/* ================= SKILL GRID ================= */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {visible.map((skill, i) => (
            <div
              key={`${active}-${skill.name}`}
              className="skill-anim group relative overflow-hidden rounded-2xl border border-line bg-card/70 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--primary)_12%,transparent)] "
              style={{
                animation: "skill-in 0.5s ease both",
                animationDelay: `${i * 35}ms`,
              }}
            >
              {/* Brand-color hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(160px circle at 20% 0%, ${
                    skill.color ?? "#8b5cf6"
                  }26, transparent 70%)`,
                }}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 ${
                    skill.adaptive ? "bg-heading/10 " : ""
                  }`}
                  style={
                    skill.color
                      ? { backgroundColor: `${skill.color}1f` }
                      : undefined
                  }
                >
                  <SkillIcon skill={skill} />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-heading ">
                    {skill.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[1.5px] text-paragraph/80 ">
                    {skill.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LEARNING / EXPLORING ================= */}
        <div className="mt-14 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/[0.07] via-transparent to-secondary/[0.07] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_90%,transparent)]" />
                <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
                  Currently learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {learning.map((name) => (
                  <TechChip key={name} name={name} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 flex items-center gap-2">
                <FiCpu className="text-primary" size={12} />
                <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
                  Exploring
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {exploring.map((name) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-heading/80 shadow-sm "
                  >
                    <FiCpu size={14} className="text-primary" />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}