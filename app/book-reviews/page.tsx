"use client";

import { useState } from "react";
import Image from "next/image";
import TopNav from "../components/TopNav";

const books = [
  {
    title: "Shoe Dog",
    image: "/books/shoe-dog.jpg",
    review: "A powerful memoir of risk, hustle, and vision...",
  },
  {
    title: "The Everything Store",
    image: "/books/everything-store.jpg",
    review: "Brad Stone's portrait of Jeff Bezos...",
  },
  {
    title: "Make Something Wonderful",
    image: "/books/make-something-wonderful.jpg",
    review: "A poetic and visual collection of Steve Jobs’ thoughts...",
  },
  {
    title: "Napoleon",
    image: "/books/napoleon.jpg",
    review: "Andrew Roberts’s sweeping biography of Napoleon Bonaparte...",
  },
  {
    title: "Superagency",
    image: "/books/superagency.jpg",
    review: "Reid Hoffman’s roadmap to an AI-empowered future...",
  },
];

export default function BookReviewsPage() {
  const [selectedBook, setSelectedBook] = useState<null | typeof books[0]>(null);

  return (
    <main className="min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/bookreview.jpeg')" }}>
        <TopNav />
      {/* Navigation Bar */}

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto bg-black/70 mt-6 rounded-xl overflow-hidden">

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 text-center border-b md:border-b-0 md:border-r border-white/20">
          <Image src="/boran2.jpg" alt="Boran Demir" width={120} height={120} className="mx-auto rounded-full mb-4" />
          <h2 className="text-xl font-semibold">Boran Demir</h2>
          <p className="text-sm text-gray-300 mt-2">
            IT Professional with experience in DevOps, Linux, and Python. Passionate about technology, books, and learning.
          </p>
        </aside>

        {/* Book Reviews */}
        <section className="w-full md:w-3/4 p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">📚 Book Reviews</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 justify-items-center">
            {books.map((book, i) => (
              <div
                key={i}
                onClick={() => setSelectedBook(book)}
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src={book.image}
                  alt={book.title}
                  width={150}
                  height={220}
                  className="rounded-lg shadow"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedBook(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{selectedBook.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300">{selectedBook.review}</p>
            <button
              onClick={() => setSelectedBook(null)}
              className="mt-6 text-blue-600 hover:underline"
            >
              ← Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
