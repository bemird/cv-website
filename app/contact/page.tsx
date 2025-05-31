"use client";

import { useState } from "react";
import Link from "next/link";
import TopNav from "../components/TopNav";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main
      className="min-h-screen bg-cover bg-center pb-4"
      style={{ backgroundImage: "url('/contactpage2.jpeg')" }}
    >
      {/* Top Navigation */}
      <TopNav />

      {/* Centered Form Container */}
      <div className="flex items-center justify-center py-8 px-4">
        <div className="backdrop-blur-sm bg-white/80 dark:bg-black/60 p-8 rounded-xl shadow-xl w-full max-w-xl space-y-6">
          {!submitted ? (
            <>
              <h1 className="text-3xl font-bold text-center">📬 Contact Me</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);

                  const payload = {
                    name: formData.get("name")?.toString() || "",
                    email: formData.get("email")?.toString() || "",
                    message: formData.get("message")?.toString() || "",
                  };

                  fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                  })
                    .then((response) => {
                      if (response.ok) {
                        setSubmitted(true);
                      } else {
                        alert("❌ Failed to send message. Please try again.");
                      }
                    })
                    .catch((error) => {
                      console.error("Error sending form:", error);
                      alert("⚠️ Network error. Please try again.");
                    });
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-black/30 dark:text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-black/30 dark:text-white"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full p-3 border rounded-md bg-white dark:bg-black/30 dark:text-white"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md w-full"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-semibold text-green-500">✅ Thank you!</h2>
              <p>I’ll get back to you as soon as possible.</p>
              <Link
                href="/"
                className="inline-block mt-4 text-blue-600 underline hover:text-blue-800"
              >
                ← Back to CV
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
