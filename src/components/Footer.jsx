import {
  FiMail,
  FiMapPin,
  FiArrowUp,
  FiArrowUpRight,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

// =====================================================
//  ✏️  এই অংশটুকু নিজের মতো বদলাও
// =====================================================
const brand = {
  name: "YourName", // Navbar এর নামের সাথে মিলিয়ে নাও
  tagline:
    "Full stack web developer building fast, scalable web applications and e-commerce systems with Laravel and the MERN stack.",
};

const contact = {
  email: "devwithefran99@gmail.com",
  whatsapp: "8801782717567",
  whatsappLabel: "+880 1782 717567",
  location: "Chattogram, Bangladesh",
};

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const whatIDo = [
  "Laravel Web Applications",
  "E-commerce Systems",
  "MERN & Next.js Apps",
  "Business Websites",
];

const socials = [
  { name: "GitHub", href: "https://github.com/devwithefran99", icon: FaGithub },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-with-shawon-2b0261385",
    icon: FaLinkedinIn,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1F6qv68c7V",
    icon: FaFacebookF,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/8801782717567`,
    icon: FaWhatsapp,
  },
];
// =====================================================

const headingCls =
  "mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-slate-400 dark:text-white/30";

const linkCls =
  "group inline-flex items-center gap-1.5 text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-50/70 px-4 pt-16 dark:border-white/10 dark:bg-slate-950 sm:px-6 lg:px-8">
      {/* Top accent line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-emerald-500/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* ---------- Brand ---------- */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-emerald-500/20">
                {"</>"}
              </span>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                {brand.name}
                <span className="text-emerald-500">.dev</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-600 dark:text-white/45">
              {brand.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    title={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* ---------- Quick links ---------- */}
          <div>
            <h4 className={headingCls}>Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className={linkCls}>
                    <span className="h-px w-0 bg-emerald-500 transition-all duration-300 group-hover:w-3" />
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- What I do ---------- */}
          <div>
            <h4 className={headingCls}>What I Do</h4>
            <ul className="space-y-3">
              {whatIDo.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-slate-600 dark:text-white/50"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ---------- Contact ---------- */}
          <div>
            <h4 className={headingCls}>Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                >
                  <FiMail size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-slate-600 transition-colors duration-300 hover:text-emerald-600 dark:text-white/50 dark:hover:text-emerald-400"
                >
                  <FaWhatsapp size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                  {contact.whatsappLabel}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-white/50">
                <FiMapPin size={15} className="mt-0.5 shrink-0 text-emerald-500" />
                {contact.location}
              </li>
            </ul>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/25 dark:text-emerald-400 dark:hover:text-white"
            >
              Start a project
              <FiArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 py-6 dark:border-white/10 sm:flex-row">
          <p className="text-center text-[11px] text-slate-500 dark:text-white/40 sm:text-left">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <p className="text-center text-[11px] text-slate-400 dark:text-white/30">
            Designed &amp; built with Next.js &amp; Tailwind CSS
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-3.5 py-2 text-[11px] font-medium text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:text-emerald-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/50 dark:hover:text-emerald-400"
          >
            Back to top
            <FiArrowUp
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}