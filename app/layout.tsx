import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diya Chakraborti — Product Designer",
  description:
    "Product designer crafting AI tools for trust, at scale. Currently at Visa in SF.",
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
