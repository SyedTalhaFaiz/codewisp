import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CodeWisp - Professional IT Solutions & Software Development",
  description: "Transform your business with cutting-edge technology solutions. We specialize in AI transformation, data analytics, cloud services, and comprehensive digital solutions for enterprise success.",
  keywords: "IT solutions, software development, AI transformation, data analytics, cloud services, digital transformation, enterprise solutions",
  authors: [{ name: "CodeWisp Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
