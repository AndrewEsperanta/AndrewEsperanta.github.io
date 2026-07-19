import type { Metadata } from "next";
import { Share_Tech_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ScanlineOverlay } from "@/components/ScanlineOverlay";

const shareTechMono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Andrew Esperanta // Operator File",
  description: "Personal profile of Andrew Esperanta — AI Research, 3D Generation, World Models",
  openGraph: {
    title: "Andrew Esperanta // Operator File",
    description: "AI Research, 3D Generation, World Models",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${shareTechMono.variable} ${inter.variable}`}>
      <body>
        <ScanlineOverlay />
        <div className="grid-bg">{children}</div>
      </body>
    </html>
  );
}
