"use client";

import { useState } from "react";
import Image from "next/image";
import TopNav from "./components/TopNav";

const books = [
  {
    title: "Scrum: The Art of Doing Twice the Work in Half the Time",
    image: "/books/scrum.jpg",
    review:
      "Jeff Sutherland introduces Scrum, a revolutionary project management method that boosts productivity, teamwork, and adaptability in complex work environments.",
  },
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
  {
    title: "The Medici: Power, Money, and Art in Renaissance Italy",
    image: "/books/Medici.jpg",
    review:
      "Tim Parks explores the Medici family's role in banking, politics, and the flourishing of the Renaissance.",
  },
  {
    title: "Meditations",
    image: "/books/Meditations.jpg",
    review:
      "Timeless stoic wisdom from Marcus Aurelius on discipline, duty, and human nature.",
  },
  {
    title: "The House of Rothschild",
    image: "/books/Rothschild.jpg",
    review:
      "Niall Ferguson’s deep dive into the powerful banking dynasty that shaped Europe.",
  },
  {
    title: "The Habsburgs",
    image: "/books/Habsburgs.jpg",
    review:
      "Martyn Rady traces the rise and legacy of one of Europe’s most influential dynasties.",
  },
  {
    title: "Alexander the Great",
    image: "/books/Alexander.jpg",
    review:
      "John Boardman's concise account of one of the most brilliant military leaders in history.",
  },
  {
    title: "Misbehaving: The Making of Behavioral Economics",
    image: "/books/Misbehaving.jpg",
    review:
      "Richard Thaler explains how psychology shaped the field of economics through real-world behavior.",
  },
  {
    title: "Hannibal",
    image: "/books/Hannibal.jpg",
    review:
      "Patrick Hunt tells the story of Hannibal’s legendary campaign against Rome across the Alps.",
  },
  {
    title: "Good to Great",
    image: "/books/goodtogreat.jpg",
    review:
      "Jim Collins explores why some companies leap ahead and others don't, focusing on leadership, discipline, and strategy.",
  },
  {
    title: "Atomic Habits",
    image: "/books/atomic.jpg",
    review:
      "James Clear shares a practical framework for building better habits and breaking bad ones through small, consistent changes.",
  },
  {
    title: "The Audacity of Hope",
    image: "/books/obama.jpg",
    review:
      "Barack Obama's reflections on American politics, identity, and the values that can unite a divided nation.",
  },
];

export default function BookReviewsPage() {
  const [selectedBook, setSelectedBook] = useState<null | typeof books[0]>(null);

  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/bookreview.jpeg')" }}
    >
      <TopNav />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] w-full max-w-screen-xl mx-auto md:min-h-screen">

        {/* Sidebar */}
        <aside className="p-6 text-center border-b border-gray-300 dark:border-gray-700 md:border-b-0 md:sticky md:top-0 self-start h-full text-gray-900 dark:text-gray-100">
          <Image
            src="/boran2.jpg"
            alt="Boran Demir"
            width={120}
            height={120}
            className="mx-auto rounded-full mb-4"
          />
          <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl inline-block">
            <h2 className="text-xl font-semibold">Boran Demir</h2>
            <p className="text-sm text-gray-300 mt-2">
              IT Professional with experience in DevOps, Linux, and Python.
              Passionate about technology, books, and learning.
            </p>
          </div>
        </aside>

        {/* Book Reviews Section */}
        <section className="backdrop-blur-sm bg-white/80 dark:bg-black/60 text-gray-900 dark:text-gray-100 p-6 rounded-xl shadow-lg mt-6">
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
                  alt={`Cover of ${book.title}`}
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
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl p-6 max-w-md w-full shadow-lg"
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
