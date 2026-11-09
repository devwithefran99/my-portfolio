import Image from "next/image";
import {
  FiUser,
  FiDownload,
  FiCheckCircle,
  FiLayers,
  FiMapPin,
  FiTarget,
  FiBookOpen,
} from "react-icons/fi";
import {
  SiPhp,
  SiLaravel,
  SiMysql,
  SiMongodb,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";


const profile = {
  name: "Erfan Hossen",
  role: "Full Stack Web Developer",
  location: "Chattogram, Bangladesh",
  image: "/Image/About-me.png",
};

const quickFacts = [
  { value: "1+", label: "Year Exp." },
  { value: "6", label: "Live Projects" },
  { value: "2", label: "Core Stacks" },
];

const tags = ["Laravel", "MERN Stack", "Next.js", "E-commerce", "Clean UI"];

const stack = [
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, adaptive: true },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
];
// =====================================================

const cardBase =
  "group relative overflow-hidden rounded-3xl border border-line bg-card/70 p-6 backdrop-blur-xl transition-all duration-500 hover:border-primary/40 hover:shadow-[0_24px_60px_color-mix(in_srgb,var(--primary)_12%,transparent)] sm:p-8";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-[-6%] top-[18%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-6%] top-[30%] h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
            <FiUser className="text-primary" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
              About Me
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Building the web, end to end
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-paragraph ">
            A little about who I am, how I like to work and the tools I build with.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.45fr]">
          {/* ============ LEFT : PROFILE CARD ============ */}
          <div className={`${cardBase} hover:-translate-y-1`}>
            <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary/15 blur-[90px]" />

            {/* Top indicator */}
            <div className="relative z-10 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_12px_color-mix(in_srgb,var(--primary)_90%,transparent)]" />
              <span className="text-[10px] uppercase tracking-[2px] text-paragraph/80 ">
                Profile
              </span>
            </div>

            {/* Image with orbit rings */}
            <div className="relative mx-auto mt-6 flex h-[270px] w-full max-w-[320px] items-center justify-center">
              <div className="absolute h-44 w-44 rounded-full bg-primary/25 blur-[60px]" />

              <div className="absolute h-[250px] w-[250px] rounded-full border border-primary/25" />
              <div className="absolute h-[225px] w-[225px] animate-spin rounded-full border border-dashed border-secondary/30 [animation-duration:30s]" />

              {/* Orbit nodes */}
              <span className="absolute left-[16%] top-[22%] h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_color-mix(in_srgb,var(--primary)_100%,transparent)]" />
              <span className="absolute bottom-[22%] right-[16%] h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_12px_color-mix(in_srgb,var(--secondary)_100%,transparent)]" />

              <div className="relative h-[190px] w-[190px]">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-secondary opacity-80 blur-[2px]" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-card bg-page shadow-2xl shadow-primary/30 ">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    sizes="190px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Profile info */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-heading ">
                {profile.name}
              </h3>
              <p className="mt-1 text-xs text-paragraph/80 ">
                {profile.role}
              </p>

              <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-paragraph/80 ">
                <FiMapPin size={12} className="text-primary" />
                {profile.location}
              </p>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
                <FiCheckCircle size={12} className="text-primary" />
                <span className="text-[10px] text-paragraph ">
                  Open to opportunities
                </span>
              </div>

              <a
                href="/cv.pdf"
                download
                className="group/btn mx-auto mt-5 flex w-fit items-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-5 py-3 text-xs font-semibold text-on-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/40"
              >
                <FiDownload
                  size={14}
                  className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
                />
                Download CV
              </a>
            </div>

            {/* Quick facts */}
            <div className="relative z-10 mt-7 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card/60 ">
              {quickFacts.map((f) => (
                <div key={f.label} className="px-2 py-3 text-center">
                  <p className="text-lg font-bold text-heading ">
                    {f.value}
                  </p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[1.5px] text-paragraph/80 ">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ RIGHT SIDE ============ */}
          <div className="grid gap-5">
            {/* ---------- ABOUT CARD ---------- */}
            <div className={cardBase}>
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-secondary/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-primary/15 bg-primary/10 p-2.5 text-primary ">
                    <FiUser size={19} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[2px] text-paragraph/60 ">
                      Introduction
                    </span>
                    <h3 className="text-2xl font-bold text-heading ">
                      About Me
                      <span className="text-primary">.</span>
                    </h3>
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-paragraph ">
                  I&apos;m a full stack web developer from Chattogram,
                  Bangladesh. I build responsive, scalable web applications and
                  e-commerce systems, with a strong focus on clean UI and
                  practical backend architecture.
                </p>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-paragraph ">
                  I work across two stacks, PHP / Laravel and MERN, and I&apos;m
                  now going deeper into Next.js and TypeScript. I care more about
                  solving real-world problems than theory, so I like shipping
                  products that people actually use.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-line bg-card/70 px-3 py-1.5 text-[10px] font-medium text-paragraph transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary-hover "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ---------- STACK ---------- */}
            <div className={cardBase}>
              <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-primary/15 bg-primary/10 p-2.5 text-primary ">
                    <FiLayers size={19} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[2px] text-paragraph/60 ">
                      Toolkit
                    </span>
                    <h3 className="text-2xl font-bold text-heading ">
                      Core Stack
                      <span className="text-primary">.</span>
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                  {stack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2.5 rounded-xl border border-line bg-card/60 p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/[0.06] "
                      >
                        <Icon
                          size={16}
                          className={
                            item.adaptive ? "text-heading " : ""
                          }
                          style={item.color ? { color: item.color } : undefined}
                        />
                        <span className="text-xs font-medium text-paragraph ">
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/[0.05] p-3.5">
                    <FiTarget size={14} className="mt-0.5 shrink-0 text-primary" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[1.5px] text-paragraph/60 ">
                        Currently building
                      </p>
                      <p className="mt-0.5 text-xs text-paragraph ">
                        Laravel &amp; eCommerce projects
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-xl border border-secondary/15 bg-secondary/[0.05] p-3.5">
                    <FiBookOpen size={14} className="mt-0.5 shrink-0 text-secondary" />
                    <div>
                      <p className="text-[9px] uppercase tracking-[1.5px] text-paragraph/60 ">
                        Currently learning
                      </p>
                      <p className="mt-0.5 text-xs text-paragraph ">
                        React · TypeScript · Next.js
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}