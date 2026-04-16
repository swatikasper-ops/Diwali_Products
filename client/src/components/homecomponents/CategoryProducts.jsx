import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import productsData from "../../pages/admin/data/Catagories.json";

function CategoryProducts() {
  const [allcategory, setAllCategory] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    setAllCategory(productsData);
  }, []);

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

  const groupedProducts = allcategory.reduce((acc, product) => {
    if (!acc[product.category]) acc[product.category] = [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-yellow-50 py-6 px-3 md:px-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6 text-orange-600">
        Explore Diwali Categories
      </h1>

      <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Object.entries(groupedProducts)
          .slice(0, visibleCount)
          .map(([category, items]) => (
            <div
              key={category}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-orange-100"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {category}
                </h2>

                <Link
                  to={`/products/${encodeURIComponent(category)}`}
                  className="text-orange-500 text-sm hover:underline"
                >
                  View All →
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {items.slice(0, 4).map((p, index) => (
                  <Link
                    key={`${p._id}-${index}`}
                    to={`/product/${p._id}`}
                    className="group"
                  >
                    <div className="rounded-lg overflow-hidden bg-orange-50 p-2 hover:bg-orange-100 transition">
                      <div className="relative aspect-square overflow-hidden rounded-md bg-white">
                        <img
                          src={
                            p?.variants?.[0]?.variantImage?.[0] ||
                            p?.images?.[0]
                          }
                          alt={p.productTittle}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                        />

                        {typeof p?.reviews?.rating?.average === "number" && (
                          <span className="absolute top-1 right-1 bg-yellow-400 text-[10px] px-2 py-0.5 rounded-full">
                            {p.reviews.rating.average.toFixed(1)} ★
                          </span>
                        )}
                      </div>

                      <h3 className="text-xs mt-2 text-center line-clamp-1">
                        {p.productTittle}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default CategoryProducts;
