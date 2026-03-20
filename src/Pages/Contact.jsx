import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-amber-100 p-5">

      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-900">
          📞 Contact Us
        </h1>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Feel free to reach out to us anytime. We are always here to help you.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* FORM DESIGN */}
        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-xl font-bold text-sky-900 mb-4">
            Send Message
          </h2>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border p-2 rounded outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="border p-2 rounded h-32 resize-none outline-none"
            ></textarea>

            <button className="bg-sky-900 text-white py-2 rounded hover:bg-sky-700 transition">
              Send Message
            </button>

          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md">

          <h2 className="text-xl font-bold text-sky-900 mb-4">
            Contact Info
          </h2>

          <div className="space-y-3 text-gray-700 text-sm">

            <p>📍 Address: Karachi, Pakistan</p>
            <p>📞 Phone: +91 999 999 9999</p>
            <p>📧 Email: funda@web.com</p>
            <p>⏰ Working Hours: 24/7</p>

          </div>

          <hr className="my-5" />

          <p className="text-gray-500 text-sm">
            We aim to respond as quickly as possible.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Contact;