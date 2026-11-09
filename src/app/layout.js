import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BottomNav from "../components/BottomNav";
import Preloader from "../components/Preloader";
import ThemeProvider from "./../components/ThemeProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata = {
  title: "Erfan Shawon | Full Stack Developer",
  description: "I build fast, scalable web applications with Laravel and the MERN stack.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${syne.className} bg-page text-paragraph`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: "<style>#preloader{display:none!important}</style>",
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}