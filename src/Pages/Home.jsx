import React from "react";

const Home = () => {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max 270",
      description:
        "Comfortable running shoes with modern air cushioning technology.",
      rating: 4.5,
      price: 120,
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      description:
        "High-performance shoes designed for energy return and comfort.",
      rating: 4.7,
      price: 150,
      image:
        "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg",
    },
    {
      id: 3,
      name: "Puma RS-X",
      description: "Stylish chunky sneakers with retro-modern design.",
      rating: 4.3,
      price: 110,
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },
    {
      id: 4,
      name: "Nike Jordan 1",
      description: "Iconic basketball sneakers with premium leather build.",
      rating: 4.8,
      price: 180,
      image:
        "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg",
    },
    {
      id: 5,
      name: "New Balance 574",
      description: "Classic lifestyle sneakers with soft cushioning.",
      rating: 4.4,
      price: 100,
      image:
        "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg",
    },
    {
      id: 6,
      name: "Vans Old Skool",
      description:
        "Skate shoes with durable canvas and signature stripe.",
      rating: 4.2,
      price: 80,
      image: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-100 w-full p-3 sm:p-5">

      {/* GRID RESPONSIVE */}
      <div className="
        grid 
        grid-cols-1   /* 375px default */
        sm:grid-cols-2 /* 425px+ mobile */
        lg:grid-cols-3 /* desktop */
        gap-4 sm:gap-5
      ">

        {shoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white rounded-lg shadow-xl p-3 sm:p-4"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              className="h-40 sm:h-44 w-full object-cover rounded"
            />

            <h2 className="font-bold mt-2 text-sm sm:text-base">
              {shoe.name}
            </h2>

            <p className="text-gray-600 text-[11px] sm:text-xs">
              {shoe.description}
            </p>

            <p className="mt-2 text-sm">
              ⭐ {shoe.rating}
            </p>

            <p className="font-bold text-green-600 text-sm">
              ${shoe.price}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Home;