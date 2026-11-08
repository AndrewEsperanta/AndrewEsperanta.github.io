import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex",
  display: "swap",
});

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Esperanta // Operator File",
  description: "Andrew Esperanta — AI-Native Engineer, AI Technical Artist in Training, and FTE Researcher at VAST. Game assets, AI-native workflows, 3D generation, and generative rendering.",
  openGraph: {
    title: "Andrew Esperanta // Operator File",
    description: "AI-Native Engineer + AI Technical Artist in Training. FTE Researcher at VAST. Game assets, AI-native workflows, 3D generation, and generative rendering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${mono.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
