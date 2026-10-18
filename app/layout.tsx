import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajwardhan Singh Chawda | Full-Stack Developer",
  description: "Portfolio of Rajwardhan Singh Chawda - Full-Stack Developer with Backend Focus. Exploring Python, Django, Next.js and building real-world impactful solutions.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
