import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Templo Mental",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${displayFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
