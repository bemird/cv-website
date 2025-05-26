"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ClientFooter() {
  const pathname = usePathname();

  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center px-6 py-3 text-xs bg-black/80 text-white z-50">
      {pathname !== "/contact" ? (
        <Link href="/contact" className="text-blue-400 hover:underline flex items-center">
          📬 Contact
        </Link>
      ) : (
        <Link href="/" className="text-blue-400 hover:underline flex items-center">
          📄 Back to CV
        </Link>
      )}
      <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 rounded-full shadow text-white font-semibold backdrop-blur-sm">
        This page was developed by me! 🙃
      </div>
    </footer>
  );
}

