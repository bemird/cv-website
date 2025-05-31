"use client";

export default function ClientFooter() {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center px-6 py-3 text-xs bg-black/80 text-white z-50">
      <div className="text-gray-300">© 2025 Boran Demir. All rights reserved.</div>

      <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1 rounded-full shadow text-white font-semibold backdrop-blur-sm">
        This page was developed by me! 🙃
      </div>
    </footer>
  );
}
