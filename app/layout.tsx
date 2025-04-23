import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

// Configure Inter with proper weights to match beam.ai's font styling
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Beam AI | AI Agent Templates",
  description: "Elevate your workflow with custom AI Agents templates, complemented by dynamic tools and seamless integrations.",
  keywords: ["AI", "AI Agents", "machine learning", "automation", "workflow"],
  authors: [{ name: "Beam AI Team" }],
  openGraph: {
    title: "Beam AI | AI Agent Templates",
    description: "Elevate your workflow with custom AI Agents templates.",
    url: "https://beam.ai",
    siteName: "Beam AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beam AI | AI Agent Templates",
    description: "Elevate your workflow with custom AI Agents templates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
