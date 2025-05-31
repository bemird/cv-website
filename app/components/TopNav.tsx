// app/components/TopNav.tsx
"use client";

import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="flex justify-center gap-10 py-4 bg-black/70 backdrop-blur-md text-blue-400 text-lg font-semibold z-50">
      <Link href="/cv" className="hover:underline flex items-center gap-1">
         <span>About Me</span>
      </Link>
      <Link href="/" className="hover:underline flex items-center gap-1">
         <span>Book Reviews</span>
      </Link>
      <Link href="/contact" className="hover:underline flex items-center gap-1">
         <span>Contact</span>
      </Link>
    </nav>
  );
}

