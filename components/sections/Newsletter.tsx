"use client";

import { useState } from "react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-white section-pad border-t border-black">
      <div className="container">
        <div className="grid grid-cols-2 gap-24 items-end max-lg:grid-cols-1 max-lg:gap-10">
          <h2 className="heading">Stay Ahead Of The Housing Market</h2>

          <div>
            <p className="body-text mb-8">
              Receive new listings, housing insights, market trends, and personalized
              recommendations directly in your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex border border-black overflow-hidden"
              style={{ borderRadius: "500px" }}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 py-4 px-6 bg-transparent outline-none font-[inherit] text-[16px] tracking-[0.08px] placeholder:text-[#bfbfbf]"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="border-l border-black bg-black text-white px-6 caption transition-opacity hover:opacity-80"
                style={{ borderRadius: "0 500px 500px 0" }}
              >
                {submitted ? "Subscribed ✓" : "Subscribe"}
              </button>
            </form>

            <p className="caption text-[#bfbfbf] mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
