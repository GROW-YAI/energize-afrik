import React, { useState } from "react";
import {
  SunIcon,
  Zap,
  Droplets,
  BarChart3,
  ChevronRight,
  Star,
  ShoppingCart,
} from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "home", name: "Home Solutions" },
    { id: "agriculture", name: "Agricultural" },
    { id: "commercial", name: "Commercial" },
  ];

  const products = [
    {
      id: 1,
      name: "Portable Solar Power Bank Pro",
      description:
        "Power your essential home appliances including fridges, TVs, and laptops with our high-capacity portable solar solution.",
      category: "home",
      price: 1299,
      rating: 4.8,
      image: "/api/placeholder/320/220",
      features: ["12000mAh Capacity", "Multiple Outlets", "Compact Design"],
    },
    {
      id: 2,
      name: "Agricultural Solar Water Pump",
      description:
        "Sustainable irrigation solution for farmers in remote areas without access to the electrical grid.",
      category: "agriculture",
      price: 2499,
      rating: 4.7,
      image: "/api/placeholder/320/220",
      features: ["High Flow Rate", "Durable Construction", "Easy Installation"],
    },
    {
      id: 3,
      name: "Home Solar System Plus",
      description:
        "Complete home solar power system with battery backup for 24/7 clean energy access.",
      category: "home",
      price: 4999,
      rating: 4.9,
      image: "/api/placeholder/320/220",
      features: ["5kW System", "Battery Storage", "Smart Monitoring"],
    },
    {
      id: 4,
      name: "Commercial Solar Station",
      description:
        "Powerful solar charging station for businesses, capable of powering heavy equipment and vehicles.",
      category: "commercial",
      price: 12999,
      rating: 4.6,
      image: "/api/placeholder/320/220",
      features: ["Rapid Charging", "Multiple Ports", "Weather Resistant"],
    },
    {
      id: 5,
      name: "Solar Irrigation Controller",
      description:
        "Smart irrigation system that optimizes water usage based on soil conditions and weather forecasts.",
      category: "agriculture",
      price: 1899,
      rating: 4.5,
      image: "/api/placeholder/320/220",
      features: ["Weather Adaptive", "Remote Control", "Water Saving"],
    },
    {
      id: 6,
      name: "Solar Mini-Grid Solution",
      description:
        "Community-scale solar power system designed to provide electricity for villages and small communities.",
      category: "commercial",
      price: 24999,
      rating: 4.9,
      image: "/api/placeholder/320/220",
      features: ["Scalable Design", "Central Battery", "Maintenance Package"],
    },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <SunIcon className="text-yellow-500 h-8 w-8 mr-2" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Solar Solutions
            </h2>
          </div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Innovative solar products designed to address energy challenges in
            homes, farms, and businesses across Ghana.
          </p>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-6"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center flex-wrap mb-12">
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-100">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-green-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl bg-white bg-opacity-40 backdrop-blur-md border border-white border-opacity-30 shadow-xl transition duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-black bg-opacity-70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Price Tag */}
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-sm font-bold px-4 py-1 rounded-full shadow-md">
                  ₵{product.price.toLocaleString()}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-800">
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        {index === 0 ? (
                          <Zap className="w-3 h-3 text-green-600" />
                        ) : index === 1 ? (
                          <Droplets className="w-3 h-3 text-green-600" />
                        ) : (
                          <BarChart3 className="w-3 h-3 text-green-600" />
                        )}
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex justify-end items-center">
                  <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full cursor-pointer transition shadow-md">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Show now
                  </button>
                  {/* <button className="flex items-center text-green-600 font-medium hover:text-green-700 transition">
                    Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
