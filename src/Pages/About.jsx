import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-amber-100 p-5">

      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mx-auto mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-sky-900">
          ℹ️ About Us
        </h1>

        <p className="text-gray-600 mt-4 text-sm sm:text-base">
          Welcome to <span className="font-bold">Funda E-Commerce</span>,
          your trusted online shopping platform for modern sneakers and lifestyle products.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-2  items-center justify-items-center">

        {/* IMAGE */}
        <div>
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg"
            alt="about"
            className="rounded-xl shadow-lg  h-70 w-70 object-cover "
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-2xl font-bold text-sky-900">
            Who We Are
          </h2>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            We are a modern e-commerce platform focused on delivering
            high-quality shoes, fashion, and lifestyle products. Our goal is
            to provide customers with the best shopping experience using
            clean design, fast delivery, and secure payment systems.
          </p>

          <p className="text-gray-600 mt-3 text-sm leading-relaxed">
            Founded with passion, we aim to connect people with top global
            brands like Nike, Adidas, Puma, and more — all in one place.
          </p>

          <button className="mt-5 bg-sky-900 text-white px-5 py-2 rounded hover:bg-sky-700 transition">
            Learn More
          </button>
        </div>

      </div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-sky-900">10K+</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-sky-900">500+</h3>
          <p className="text-gray-600">Products</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold text-sky-900">24/7</h3>
          <p className="text-gray-600">Support</p>
        </div>

      </div>

    </div>
  );
};

export default About;