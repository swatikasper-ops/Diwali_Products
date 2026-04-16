import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import categoryProducts from "../pages/admin/data/Catagories.json";

function CategoryProducts() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(6);
      else if (window.innerWidth >= 640) setVisibleCount(4);
      else setVisibleCount(3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Group products by category
  const groupedProducts = categoryProducts.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  const discountPercent = (mrp, price) => {
    if (!mrp || !price) return 0;
    return Math.round(((mrp - price) / mrp) * 100);
  };

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-yellow-50 py-6 px-3 md:px-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
          Explore Diwali Categories
        </h1>
        <p className="text-gray-500 text-sm mt-1">Shop by category for your festive needs</p>
      </div>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Object.entries(groupedProducts)
          .slice(0, visibleCount)
          .map(([category, items]) => (
            <div key={category} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">{category}</h2>
                <Link to={`/products/${encodeURIComponent(category)}`} className="text-[#1C3753] text-sm hover:underline">
                  View All →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {items.slice(0, 4).map((p) => {
                  const discount = discountPercent(p.mrp, p.price);
                  const imageUrl = p.images?.[0] || p.variants?.[0]?.variantImage?.[0] || "/placeholder.jpg";
                  
                  return (
                    <Link key={p._id} to={`/product/${p._id}`} className="group">
                      <div className="rounded-lg overflow-hidden bg-gray-50 p-2 hover:bg-gray-100 transition">
                        <div className="relative aspect-square overflow-hidden rounded-md bg-white">
                          <img 
                            src={imageUrl} 
                            alt={p.productTittle} 
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-300" 
                            onError={(e) => { e.target.src = "/placeholder.jpg"; }}
                          />
                          {discount > 0 && (
                            <span className="absolute top-1 right-1 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                              {discount}% OFF
                            </span>
                          )}
                          {p.rating && (
                            <span className="absolute bottom-1 left-1 bg-yellow-400 text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                              {p.rating} ★
                            </span>
                          )}
                        </div>
                        <h3 className="text-xs mt-2 text-center line-clamp-1 font-medium text-gray-700 group-hover:text-[#1C3753] transition">
                          {p.productTittle}
                        </h3>
                        <div className="flex items-center justify-center gap-1 mt-1">
                          <span className="text-xs font-bold text-gray-800">₹{p.price || p.sellingPrice}</span>
                          <span className="text-[10px] text-gray-400 line-through">₹{p.mrp || p.basePrice}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryProducts;