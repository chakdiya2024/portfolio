import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diya Chakraborti — Product Designer",
  description:
    "Product designer at Visa building enterprise AI tools for trust, at scale. Previously at Change.org, Planned Parenthood, and UC Berkeley.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistPixelSquare.variable}`}
    >
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
