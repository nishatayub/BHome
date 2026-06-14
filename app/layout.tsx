import type { Metadata } from "next";
import { AuthProvider } from "@/components/providers/AuthProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "BHome — Trusted Rental Discovery",
  description:
    "AI-powered property discovery for students, professionals, families, and travelers. Find verified homes, compare neighborhoods, and book with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-black">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
