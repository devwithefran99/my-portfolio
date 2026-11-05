import {
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiTrendingUp,
  FiDownload,
} from "react-icons/fi";

// =====================================================
//  ✏️  এই অংশটুকু নিজের মতো বদলাও
//  planned: true দিলে dashed marker আসে (ভবিষ্যতের plan এর জন্য)
// =====================================================
const experience = [
  {
    icon: FiBriefcase,
    title: "Web Developer & Social Media Manager",
    org: "BanglaBazar24/7",
    badge: "1 Year",
    description:
      "Built and maintained the online grocery platform, while running the brand's social media presence.",
    highlights: ["Laravel", "E-commerce", "Social Media"],
  },
  {
    icon: FiTrendingUp,
    title: "Industrial Attachment",
    org: "Creative IT",
    badge: "Attachment",
    description:
      "Completed an industrial attachment, gaining hands-on experience in a real professional environment.",
    highlights: [],
  },
];

const education = [
  {
    icon: FiBookOpen,
    title: "Bachelor of Science (BSc)",
    org: "Higher studies",
    badge: "Planned",
    planned: true,
    description:
      "Planning to continue higher studies with a BSc to build a stronger academic foundation.",
    highlights: [],
  },
  {
    icon: FiAward,
    title: "Web Design & Development for Freelancing (Level 3)",
    org: "NSDA",
    badge: "Completed",
    description:
      "Skill-development course focused on building websites professionally and working as a freelancer.",
    highlights: ["Web Design", "Web Development", "Freelancing"],
  },
  {
    icon: FiBookOpen,
    title: "Diploma in Computer Science",
    org: "Your Institute", // ✏️ নিজের institute এর নাম লেখো
    badge: "Completed",
    description:
      "Built a solid foundation in computer science and programming fundamentals.",
    highlights: [],
  },
];
// =====================================================

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_24px_60px_rgba(16,185,129,0.12)] dark:border-white/10 dark:bg-white/[0.035] sm:p-8";

function Entry({ item, isLast }) {
  const Icon = item.icon;

  return (
    <div className="relative pl-10">
      {/* Timeline line */}
      {!isLast && (
        <span className="absolute -bottom-6 left-[13px] top-8 w-px bg-gradient-to-b from-emerald-500/40 to-cyan-500/10" />
      )}

      {/* Marker */}
      <span
        className={`absolute left-0 top-3 flex h-[27px] w-[27px] items-center justify-center rounded-full border bg-white text-emerald-600 dark:bg-slate-950 dark:text-emerald-400 ${
          item.planned
            ? "border-dashed border-emerald-500/60"
            : "border-emerald-500/40 shadow-[0_0_14px_rgba(16,185,129,0.35)]"
        }`}
      >
        <Icon size={13} />
      </span>

      {/* Content card */}
      <div className="rounded-2xl border border-slate-200 bg-white/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-emerald-500/[0.04] dark:border-white/10 dark:bg-white/[0.03]">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h4 className="text-sm font-semibold leading-snug text-slate-900 dark:text-white">
            {item.title}
          </h4>
          <span
            className={`shrink-0 rounded-full px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider ${
              item.planned
                ? "border border-dashed border-cyan-500/50 text-cyan-700 dark:text-cyan-400"
                : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
            }`}
          >
            {item.badge}
          </span>
        </div>

        <p className="mt-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          {item.org}
        </p>

        <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-white/45">
          {item.description}
        </p>

        {item.highlights.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {item.highlights.map((h) => (
              <span
                key={h}
                className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-white/50"
              >
                {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Column({ icon: Icon, eyebrow, title, items, glow }) {
  return (
    <div className={cardBase}>
      <div
        className={`pointer-events-none absolute -top-20 h-52 w-52 rounded-full blur-[80px] ${glow}`}
      />

      <div className="relative z-10">
        <div className="mb-7 flex items-center gap-3">
          <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
            <Icon size={19} />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-[2px] text-slate-400 dark:text-white/30">
              {eyebrow}
            </span>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              {title}
              <span className="text-emerald-500">.</span>
            </h3>
          </div>
        </div>

        <div className="space-y-6">
          {items.map((item, i) => (
            <Entry
              key={item.title}
              item={item}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Resume() {
  return (
    <section
      id="resume"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute left-[-6%] top-[10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[6%] right-[-6%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5">
            <FiAward className="text-emerald-500" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
              Resume
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Education &amp; Experience
            <span className="text-emerald-500">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/50">
            Where I&apos;ve worked, what I&apos;ve studied, and where I&apos;m
            heading next.
          </p>
        </div>

        {/* ================= TWO COLUMNS ================= */}
        <div className="grid gap-5 lg:grid-cols-2">
          <Column
            icon={FiBriefcase}
            eyebrow="Journey"
            title="Experience"
            items={experience}
            glow="-right-20 bg-emerald-500/10"
          />
          <Column
            icon={FiBookOpen}
            eyebrow="Learning"
            title="Education"
            items={education}
            glow="-left-20 bg-cyan-500/10"
          />
        </div>

        {/* ================= CV CTA ================= */}
        <div className="mt-10 text-center">
          <a
            href="/cv.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40"
          >
            Download full CV
            <FiDownload
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}