
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jafar Al-Khfaji | Software Developer",
  description:
    "Portfolio of Jafar Al-Khfaji, a Computer Information Systems student specializing in software development, web technologies, and data analytics.",
  keywords: [
    "Jafar Al-Khfaji",
    "Software Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Calgary",
    "Data Analytics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>
    <body suppressHydrationWarning>
      {children}
    </body>
  </html>
);
}
