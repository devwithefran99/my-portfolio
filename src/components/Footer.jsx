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
// ✏️ এই অংশটুকু নিজের মতো বদলাও
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
  "mb-5 text-[10px] font-semibold uppercase tracking-[2px] text-paragraph/60 ";

const linkCls =
  "group inline-flex items-center gap-1.5 text-sm text-paragraph transition-colors duration-300 hover:text-primary-hover ";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-card/70 px-4 pt-16 sm:px-6 lg:px-8">
      {/* Top accent line */}
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-secondary/10 blur-[110px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* ---------- Brand ---------- */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-sm font-bold text-on-primary shadow-lg shadow-primary/20">
                {"</>"}
              </span>
              <span className="text-base font-bold tracking-tight text-heading ">
                {brand.name}
                <span className="text-primary">.dev</span>
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-7 text-paragraph ">
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
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-card/70 text-paragraph transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-on-primary hover:shadow-lg hover:shadow-primary/30 "
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
                    <span className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-3" />
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
                  className="flex items-start gap-2 text-sm text-paragraph "
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
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
                  className="group flex items-start gap-3 text-sm text-paragraph transition-colors duration-300 hover:text-primary-hover "
                >
                  <FiMail size={15} className="mt-0.5 shrink-0 text-primary" />
                  <span className="break-all">{contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 text-sm text-paragraph transition-colors duration-300 hover:text-primary-hover "
                >
                  <FaWhatsapp size={15} className="mt-0.5 shrink-0 text-primary" />
                  {contact.whatsappLabel}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-paragraph ">
                <FiMapPin size={15} className="mt-0.5 shrink-0 text-primary" />
                {contact.location}
              </li>
            </ul>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-on-primary hover:shadow-lg hover:shadow-primary/25 "
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
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line py-6 sm:flex-row">
          <p className="text-center text-[11px] text-paragraph/80 sm:text-left">
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>

          <p className="text-center text-[11px] text-paragraph/60 ">
            Designed &amp; built with Next.js &amp; Tailwind CSS
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-2 rounded-xl border border-line bg-card/70 px-3.5 py-2 text-[11px] font-medium text-paragraph transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary-hover "
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