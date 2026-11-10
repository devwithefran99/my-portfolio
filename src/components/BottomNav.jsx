import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";


const whatsapp = {
  number: "8801782717567", // country code সহ, + ছাড়া
  message: "Hi, I found you through your portfolio.",
};

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/1F6qv68c7V",
    icon: FaFacebookF,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dev-with-shawon-2b0261385",
    icon: FaLinkedinIn,
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
      whatsapp.message
    )}`,
    icon: FaWhatsapp,
    cta: true, // মাঝখানে বড় সবুজ button
  },
  { name: "GitHub", href: "https://github.com/devwithefran99", icon: FaGithub },
  {
    name: "Instagram",
    href: "https://www.instagram.com/devwithshawon",
    icon: FaInstagram,
  },
];
// =====================================================

// শুধু mobile এ দেখায় (md এবং তার উপরে hidden)
export default function BottomNav() {
  return (
    <nav
      aria-label="Social links"
      className="fixed inset-x-0 bottom-0 z-50 md:hidden"
    >
      <ul className="flex items-end justify-around border-t border-line bg-card/90 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-10px_40px_color-mix(in_srgb,var(--primary)_12%,transparent)] backdrop-blur-xl">
        {socials.map((s) => {
          const Icon = s.icon;

          if (s.cta) {
            return (
              <li key={s.name} className="-mt-6">
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="relative flex h-14 w-14 items-center justify-center"
                >
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.5s]" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full border-4 border-page bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 active:scale-95">
                    <Icon size={26} />
                  </span>
                </a>
              </li>
            );
          }

          return (
            <li key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-xl text-paragraph transition-all duration-300 active:scale-90 active:bg-primary/10 active:text-primary"
              >
                <Icon size={19} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}