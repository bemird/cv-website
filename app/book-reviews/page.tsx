"use client";

import { useState } from "react";
import Image from "next/image";

const books = [
  {
    title: "Shoe Dog",
    image: "/books/shoe-dog.jpg",
    review:
      "A powerful memoir of risk, hustle, and vision. Phil Knight's journey in founding Nike is full of challenges and honest reflection.",
  },
  {
    title: "The Everything Store",
    image: "/books/everything-store.jpg",
    review:
      "Brad Stone's portrait of Jeff Bezos highlights Amazon’s relentless ambition. It’s insightful and a bit intimidating.",
  },
  {
    title: "Make Something Wonderful",
    image: "/books/make-something-wonderful.jpg",
    review:
      "A poetic and visual collection of Steve Jobs’ thoughts. Deeply inspiring, minimalist and sincere.",
  },
];

export default function BookReviewsPage() {
  const [selectedBook, setSelectedBook] = useState<null | typeof books[0]>(null);

  return (
    <main className="min-h-screen bg-white p-6 text-black">
      <p className="text-xl font-semibold mb-4">✅ Page is rendering</p>

      <h1 className="text-3xl font-bold mb-6 text-center">📚 Book Reviews</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
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
              className="rounded-lg shadow bg-white"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBook && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setSelectedBook(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-6 max-w-md w-full shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{selectedBook.title}</h2>
            <p className="text-sm text-gray-800">{selectedBook.review}</p>
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
