import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boran Demir CV",
  description: "Personal CV site of Boran Demir, DevOps and Linux enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>

          <footer className="w-full px-6 py-3 text-xs text-white flex justify-between items-center bg-black/90 z-50">
            <a
              href="/contact"
              className="text-blue-400 hover:underline flex items-center"
            >
              📬 Contact
            </a>
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 rounded-full shadow text-white font-semibold backdrop-blur-sm">
              This page was developed by me! 🙃
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
