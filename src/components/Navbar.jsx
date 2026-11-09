"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiDownload, FiSun, FiMoon } from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

// ---------- Dark / Light toggle ----------
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        flex h-9 w-9 items-center justify-center
        rounded-xl border
        border-line bg-page text-heading/80
        transition-all duration-300
        hover:border-primary/40 hover:text-primary-hover

        
      "
    >
      {/* CSS দিয়ে icon বদলাচ্ছে, তাই hydration mismatch হবে না */}
      <FiSun size={18} className="hidden dark:block" />
      <FiMoon size={18} className="block dark:hidden" />
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ---------- কোন section screen এ আছে সেটা track করা ----------
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.replace("#", "")))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ---------- Mobile menu খোলা থাকলে background scroll বন্ধ + Esc দিয়ে close ----------
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="fixed left-0 top-0 z-50 w-full">
        <div
          className="
            w-full border-b backdrop-blur-xl transition-colors duration-300
            border-line bg-card/80 shadow-[0_10px_40px_color-mix(in_srgb,var(--primary)_10%,transparent)]

          "
        >
          <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center px-3 sm:px-5">
            {/* Logo */}
            <div className="flex flex-1 items-center">
              <a href="#home" className="flex items-center">
                <Image
                  src="/Image/erfan-shawon-logo.png"
                  alt="Erfan Shawon"
                  width={1600}
                  height={691}
                  priority
                  className="h-10 w-auto sm:h-11"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden items-center gap-1 rounded-xl border p-1 lg:flex
                border-line bg-page/70

              "
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`
                      rounded-lg px-4 py-2 text-xs font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-primary text-on-primary shadow-lg shadow-primary/25"
                          : "text-paragraph hover:bg-primary/10 hover:text-primary-hover "
                      }
                    `}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex flex-1 items-center justify-end gap-2">
              {/* Availability status */}
              <div className="mr-1 hidden items-center gap-2 xl:flex">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_90%,transparent)]" />
                <span className="text-[10px] tracking-wider text-paragraph/80 ">
                  OPEN TO WORK
                </span>
              </div>

              <ThemeToggle />

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download
                className="
                  group hidden items-center gap-2 rounded-xl px-4 py-2.5
                  bg-primary hover:bg-primary-hover
                  text-xs font-semibold text-on-primary
                  shadow-lg shadow-primary/20
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-primary/40
                  sm:flex
                "
              >
                Download CV
                <FiDownload
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="
                  flex h-9 w-9 items-center justify-center rounded-xl border lg:hidden
                  border-line bg-page text-heading/80

                "
              >
                <FiMenu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`
          fixed inset-0 z-[100] transition-all duration-300 lg:hidden
          ${
            isOpen
              ? "visible bg-black/50 opacity-100 backdrop-blur-sm"
              : "invisible bg-transparent opacity-0"
          }
        `}
        onClick={() => setIsOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`
            absolute left-0 top-0 h-full w-[80%] max-w-sm overflow-hidden border-r
            border-primary/20 bg-card
            shadow-[20px_0_60px_rgba(0,0,0,0.25)]
            transition-transform duration-500

            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b border-line p-5 ">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="flex items-center"
            >
              <Image
                src="/Image/erfan-shawon-logo.png"
                alt="Erfan Shawon"
                width={1600}
                height={691}
                className="h-10 w-auto"
              />
            </a>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="
                  flex h-9 w-9 items-center justify-center rounded-xl
                  text-paragraph/80 hover:bg-red-500/10 hover:text-red-500

                "
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-2 p-5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    group flex items-center justify-between rounded-xl border
                    px-4 py-3.5 text-sm transition-all duration-300
                    ${
                      isActive
                        ? "border-primary/30 bg-primary/10 text-primary "
                        : "border-transparent text-paragraph hover:border-primary/20 hover:bg-primary/10 "
                    }
                  `}
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] text-paragraph/40 transition-colors group-hover:text-primary-hover ">
                    0{index + 1}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Sidebar Bottom */}
          <div className="absolute bottom-6 left-5 right-5">
            <div className="mb-4 text-[9px] uppercase tracking-[3px] text-paragraph/60 ">
              Full Stack • Laravel • MERN • AI
            </div>

            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="
                flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3
                bg-primary hover:bg-primary-hover
                text-sm font-semibold text-on-primary
                shadow-lg shadow-primary/20
                transition-all duration-300 hover:shadow-primary/40
              "
            >
              Download CV
              <FiDownload size={15} />
            </a>
          </div>

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -right-20 top-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-20 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />
        </aside>
      </div>
    </>
  );
}