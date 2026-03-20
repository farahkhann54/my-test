import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "We deliver products within 24–48 hours in major cities.",
      icon: "🚚",
    },
    {
      id: 2,
      title: "Secure Payment",
      desc: "100% secure payment with encryption and trusted gateways.",
      icon: "🔒",
    },
    {
      id: 3,
      title: "24/7 Support",
      desc: "Our support team is always available to help you.",
      icon: "📞",
    },
    {
      id: 4,
      title: "Easy Returns",
      desc: "Hassle-free return policy within 7 days.",
      icon: "↩️",
    },
    {
      id: 5,
      title: "Best Quality",
      desc: "We only sell verified and high-quality products.",
      icon: "⭐",
    },
    {
      id: 6,
      title: "Affordable Prices",
      desc: "Get the best products at the lowest prices.",
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-100 p-5">

      {/* Header */}
      <div className="text-center mb-10 ">
        <h1 className="text-3xl font-bold text-sky-900">
          🛠 Our Services
        </h1>
        <p className="text-gray-600 mt-2">
          We provide high-quality services to make your shopping experience better
        </p>
      </div>

      {/* Grid */}
      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">

        {services.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl mb-3">{item.icon}</div>

            <h2 className="font-bold text-lg text-sky-900">
              {item.title}
            </h2>

            <p className="text-gray-600 text-sm mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Service;