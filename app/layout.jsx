import "./globals.css";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const description =
  "Applied AI engineer. I build AI agents and the evals that prove they work. Building Mirage; previously Lead Engineer at Froncort.AI.";

export const metadata = {
  metadataBase: new URL("https://siddhant-vishnu.vercel.app"),
  title: "Siddhant Vishnu · Applied AI Engineer",
  description,
  openGraph: {
    title: "Siddhant Vishnu · Applied AI Engineer",
    description,
    url: "/",
    siteName: "Siddhant Vishnu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhant Vishnu · Applied AI Engineer",
    description,
    creator: "@Siddhant_Vishnu",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
