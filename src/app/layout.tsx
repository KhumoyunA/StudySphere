import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StudySphere | Your Path to Top US Universities",
  description: "Data-driven admissions mentoring for international students seeking admission to top US universities.",
  keywords: ["university admissions", "international students", "US universities", "study abroad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
