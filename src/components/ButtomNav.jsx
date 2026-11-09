"use client";

import { useEffect, useState } from "react";
import {
  FiHome,
  FiLayers,
  FiFolder,
  FiUser,
  FiFileText,
  FiMail,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// =====================================================
//  ✏️  এই অংশটুকু নিজের মতো বদলাও
// =====================================================
const whatsapp = {
  number: "8801782717567", // country code সহ, + ছাড়া
  message: "Hi, I found you through your portfolio.",
};

const items = [
  { name: "Home", href: "#home", id: "home", icon: FiHome },
  { name: "Skills", href: "#skills", id: "skills", icon: FiLayers },
  { name: "Projects", href: "#projects", id: "projects", icon: FiFolder },
  { name: "About", href: "#about", id: "about", icon: FiUser },
  { name: "Resume", href: "#resume", id: "resume", icon: FiFileText },
  { name: "Contact", href: "#contact", id: "contact", icon: FiMail },
];
// =====================================================

export default function BottomNav() {
  const [active, setActive] = useState("home");

  // যে section স্ক্রিনের মাঝখানে আছে সেটাকে active করে
  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const waHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
    whatsapp.message
  )}`;

  return (
    <>
      {/* ================= WHATSAPP CTA ================= */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-24 right-4 z-50 flex items-center gap-2 sm:right-6 md:bottom-24"
      >
        {/* Label (শুধু বড় screen এ hover করলে) */}
        <span className="pointer-events-none hidden translate-x-2 rounded-xl border border-line bg-card px-3 py-2 text-xs font-semibold text-heading opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
          Chat on WhatsApp
        </span>

        <span className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 group-hover:scale-110">
            <FaWhatsapp size={28} />
          </span>
        </span>
      </a>

      {/* ================= BOTTOM NAV ================= */}
      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-0 pb-[env(safe-area-inset-bottom)] md:px-4 md:pb-4"
      >
        <ul className="flex w-full max-w-xl items-center justify-around gap-1 border-t border-line bg-card/85 px-2 py-2 shadow-[0_-10px_40px_color-mix(in_srgb,var(--primary)_12%,transparent)] backdrop-blur-xl md:rounded-2xl md:border">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;
            return (
              <li key={item.id} className="min-w-0 flex-1">
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative flex flex-col items-center gap-1 rounded-xl px-1 py-2 text-[10px] font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-paragraph hover:text-primary-hover"
                  }`}
                >
                  <Icon
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5"
                  />
                  <span className="truncate">{item.name}</span>
                  {isActive && (
                    <span className="absolute -top-2 h-0.5 w-6 rounded-full bg-primary" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}