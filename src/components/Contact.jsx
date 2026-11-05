"use client";

import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
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
const contact = {
  email: "devwithefran99@gmail.com",
  whatsapp: "8801782717567", // country code সহ, + ছাড়া
  whatsappLabel: "+880 1782 717567",
  location: "Chattogram, Bangladesh",
};

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
];

// Form পাঠানোর জন্য Web3Forms এর free access key (.env.local এ NEXT_PUBLIC_WEB3FORMS_KEY)
// key না থাকলে form নিজে থেকে email app (mailto) খুলে দেবে।
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
// =====================================================

const cardBase =
  "relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]";

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-emerald-500/60 focus:ring-4 focus:ring-emerald-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:placeholder:text-white/30";

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[11px] font-medium text-slate-600 dark:text-white/50"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function InfoCard({ icon: Icon, label, value, href }) {
  const isLink = Boolean(href);
  const Wrapper = isLink ? "a" : "div";
  const linkProps = isLink
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...linkProps}
      className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-4 backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-white/[0.035] ${
        isLink
          ? "hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)]"
          : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-[1.5px] text-slate-400 dark:text-white/30">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
      </div>

      {isLink && (
        <FiArrowUpRight
          size={16}
          className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-500 dark:text-white/20"
        />
      )}
    </Wrapper>
  );
}

export default function Contact() {
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Spam honeypot
    if (data.get("botcheck")) return;

    // key না থাকলে mailto দিয়ে email app খুলবে
    if (!ACCESS_KEY) {
      const subject = encodeURIComponent(
        data.get("subject") || `Message from ${data.get("name")}`
      );
      const body = encodeURIComponent(
        `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
      );
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      data.append("access_key", ACCESS_KEY);
      data.append("from_name", "Portfolio Contact Form");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-6%] top-[12%] h-72 w-72 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-6%] h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5">
            <FiMail className="text-emerald-500" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
              Contact
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s build something together
            <span className="text-emerald-500">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-white/50">
            Have a project in mind, a role to fill or just want to say hello?
            Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ============ LEFT : INFO ============ */}
          <div className="flex flex-col gap-3">
            {/* Availability */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              <span className="text-[10px] uppercase tracking-[2px] text-slate-600 dark:text-white/60">
                Open to opportunities
              </span>
            </div>

            <InfoCard
              icon={FiMail}
              label="Email"
              value={contact.email}
              href={`mailto:${contact.email}`}
            />
            <InfoCard
              icon={FaWhatsapp}
              label="WhatsApp"
              value={contact.whatsappLabel}
              href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                "Hi, I found you through your portfolio."
              )}`}
            />
            <InfoCard
              icon={FiMapPin}
              label="Location"
              value={contact.location}
            />

            {/* Socials */}
            <div className={`${cardBase} mt-1 p-5`}>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />

              <p className="relative text-[10px] uppercase tracking-[2px] text-slate-400 dark:text-white/30">
                Find me online
              </p>

              <div className="relative mt-4 flex flex-wrap gap-3">
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
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/70 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-emerald-500 hover:to-cyan-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/60"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ============ RIGHT : FORM ============ */}
          <div className={`${cardBase} p-6 sm:p-8`}>
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
                  <FiSend size={19} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] text-slate-400 dark:text-white/30">
                    Say hello
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Send a message
                    <span className="text-emerald-500">.</span>
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot (মানুষ দেখবে না, bot রা ভরবে) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className={inputCls}
                    />
                  </Field>

                  <Field label="Your email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={inputCls}
                    />
                  </Field>
                </div>

                <Field label="Subject" htmlFor="subject">
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    className={inputCls}
                  />
                </Field>

                <Field label="Message" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me a little about your project or idea..."
                    className={`${inputCls} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <>
                      <FiLoader size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend
                        size={15}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </>
                  )}
                </button>

                {/* Status messages */}
                <div aria-live="polite">
                  {status === "success" && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-xs text-emerald-700 dark:text-emerald-300">
                      <FiCheckCircle size={15} className="mt-0.5 shrink-0" />
                      Thanks for reaching out! Your message has been sent and
                      I&apos;ll reply soon.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs text-red-700 dark:text-red-300">
                      <FiAlertCircle size={15} className="mt-0.5 shrink-0" />
                      <span>
                        Something went wrong. Please try again, or email me
                        directly at{" "}
                        <a
                          href={`mailto:${contact.email}`}
                          className="font-semibold underline"
                        >
                          {contact.email}
                        </a>
                        .
                      </span>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}