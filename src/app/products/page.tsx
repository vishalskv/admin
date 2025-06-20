"use client";
import React from "react";
import { useTheme } from "next-themes";

const page = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme, 67688);

  const products = [
    {
      id: 1,
      name: "Classic Shoes",
      price: "₹1999",
      description: "Comfortable & stylish everyday wear.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹2999",
      description: "Track your fitness and stay connected.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: "₹1499",
      description: "Noise cancellation and long battery life.",
      image: "https://flowbite.com/docs/images/products/apple-watch.png",
    },
    // Add more products as needed
  ];
  return (
    <div>
      {" "}
      <div className="p-6  min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-black dark:text-white">
          All Products
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className=" rounded-lg shadow shadow-amber-100 hover:shadow-lg transition duration-300"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {product.description}
                </p>
                <p className="text-green-600 dark:text-green-400 font-bold">
                  {product.price}
                </p>
                <button className="mt-4 w-full bg-[#303f9f] text-white py-2 rounded hover:bg-indigo-700">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
