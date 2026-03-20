import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-sky-800 text-white">

      <div className="max-w-7xl mx-auto p-5">

        {/* GRID */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-6 
          text-xs sm:text-sm
        ">

          {/* Column 1 */}
          <div>
            <h1 className="font-bold text-base mb-2">
              🟦 Funda E-Commerce
            </h1>
            <p className="text-gray-200 leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
              It has been the standard dummy text since the 1500s.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="font-bold mb-2">🔗 Quick Links</h1>
            <ul className="space-y-1 text-gray-200">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blogs</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="font-bold mb-2">🛒 Shop Now</h1>
            <ul className="space-y-1 text-gray-200">
              <li>Collections</li>
              <li>Trending Products</li>
              <li>New Arrivals</li>
              <li>Featured Products</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h1 className="font-bold mb-2">📍 Reach Us</h1>
            <ul className="space-y-1 text-gray-200">
              <li>📍 Karachi, Pakistan</li>
              <li>📞 +91 999 999 9999</li>
              <li>📠 0000 0000 XXXX</li>
              <li>📧 funda@web.com</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-blue-400 mt-6 pt-4 text-center text-xs text-gray-300">
          © 2026 Funda E-Commerce. All rights reserved.
        </div>

      </div>
    </div>
  );
};

export default Footer;