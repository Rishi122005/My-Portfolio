import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

import { CustomCursor } from "@/components/main/custom-cursor";

export const viewport: Viewport = {
  themeColor: "#050505",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#050505] text-white overflow-y-scroll overflow-x-hidden font-sans md:cursor-none",
          inter.variable,
          space.variable
        )}
      >
        <CustomCursor />
        <StarsCanvas />
        <Navbar />
        <div className="relative z-[15]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
