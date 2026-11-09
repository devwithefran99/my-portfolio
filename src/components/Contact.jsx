"use client";

import { useState, useEffect } from "react";
import {
  FiMail,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
  FiX,
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
  "relative overflow-hidden rounded-3xl border border-line bg-card/70 backdrop-blur-xl ";

const inputCls =
  "w-full rounded-xl border border-line bg-card/70 px-4 py-3 text-sm text-heading outline-none transition-all duration-300 placeholder:text-paragraph/60 focus:border-primary/60 focus:ring-4 focus:ring-primary/10 ";

// সফল / ব্যর্থ হলে উপরে ডানদিকে যে toast আসে
function Toast({ toast, onClose }) {
  if (!toast) return null;
  const ok = toast.type === "success";
  const Icon = ok ? FiCheckCircle : FiAlertCircle;

  return (
    <div
      role={ok ? "status" : "alert"}
      aria-live={ok ? "polite" : "assertive"}
      className="toast-anim fixed right-4 top-20 z-[100] w-[calc(100%-2rem)] max-w-sm sm:right-6"
    >
      <div
        className={`flex items-start gap-3 rounded-2xl border bg-card p-4 shadow-2xl backdrop-blur-xl ${
          ok ? "border-primary/40 shadow-primary/20" : "border-red-500/40 shadow-red-500/10"
        }`}
      >
        <div
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
            ok ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"
          }`}
        >
          <Icon size={18} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-heading">{toast.title}</p>
          <p className="mt-0.5 text-xs leading-5 text-paragraph">{toast.message}</p>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="shrink-0 rounded-lg p-1 text-paragraph/60 transition-colors hover:text-heading"
        >
          <FiX size={14} />
        </button>
      </div>
    </div>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-[11px] font-medium text-paragraph "
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
      className={`group flex items-center gap-4 rounded-2xl border border-line bg-card/70 p-4 backdrop-blur-xl transition-all duration-300 ${
        isLink
          ? "hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_16px_40px_color-mix(in_srgb,var(--primary)_12%,transparent)]"
          : ""
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 ">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] uppercase tracking-[1.5px] text-paragraph/60 ">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm font-semibold text-heading ">
          {value}
        </p>
      </div>

      {isLink && (
        <FiArrowUpRight
          size={16}
          className="shrink-0 text-paragraph/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-hover "
        />
      )}
    </Wrapper>
  );
}

export default function Contact() {
  // idle | sending | success | error
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState(null);

  // toast ৫ সেকেন্ড পর নিজে সরে যাবে
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

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
        setToast({
          type: "success",
          title: "Message sent!",
          message: "Thanks for reaching out. I'll reply to you soon.",
        });
      } else {
        throw new Error(json.message || "failed");
      }
    } catch {
      setStatus("error");
      setToast({
        type: "error",
        title: "Couldn't send message",
        message: `Please try again or email me at ${contact.email}.`,
      });
    }
  }

  return (
    <>
    <Toast toast={toast} onClose={() => setToast(null)} />
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-6%] top-[12%] h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[-6%] h-80 w-80 rounded-full bg-secondary/10 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
            <FiMail className="text-primary" size={12} />
            <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
              Contact
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            Let&apos;s build something together
            <span className="text-primary">.</span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-paragraph ">
            Have a project in mind, a role to fill or just want to say hello?
            Send me a message and I&apos;ll get back to you.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ============ LEFT : INFO ============ */}
          <div className="flex flex-col gap-3">
            {/* Availability */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.08] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_90%,transparent)]" />
              <span className="text-[10px] uppercase tracking-[2px] text-paragraph ">
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
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

              <p className="relative text-[10px] uppercase tracking-[2px] text-paragraph/60 ">
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
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card/70 text-paragraph transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-br hover:from-primary hover:to-secondary hover:text-on-primary hover:shadow-lg hover:shadow-primary/30 "
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
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary/10 blur-[80px]" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl border border-primary/15 bg-primary/10 p-2.5 text-primary ">
                  <FiSend size={19} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[2px] text-paragraph/60 ">
                    Say hello
                  </span>
                  <h3 className="text-2xl font-bold text-heading ">
                    Send a message
                    <span className="text-primary">.</span>
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
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary-hover px-5 py-3.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}