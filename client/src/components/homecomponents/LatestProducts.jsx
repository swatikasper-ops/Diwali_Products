import { useState } from "react";
import { Link } from "react-router";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import products from "../../pages/admin/data/LatestProduct.json"; // ✅ FIXED

function LatestProducts() {
  const [index, setIndex] = useState(0);

  const visibleProducts = products.slice(index, index + 4);

  const next = () => {
    if (index + 4 < products.length) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="lg:px-20 md:px-16 px-4 py-14 bg-[#f5f5f5]">

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1C3753]">
          Latest Diwali Hampers
        </h2>
      </div>

      <div className="relative">

        {index > 0 && (
          <button onClick={prev} className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
            <ChevronLeft size={20} />
          </button>
        )}

        {index + 4 < products.length && (
          <button onClick={next} className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full">
            <ChevronRight size={20} />
          </button>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {visibleProducts.map((p) => {
            const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

            return (
              <motion.div
                key={p.id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden group"
              >
                <Link to={`/product/${p.id}`}>

                  <div className="relative">
                    <img
                      src={p.image}   // ✅ from JSON
                      alt={p.name}
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
                    />

                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow">
                      <Heart size={16} className="text-gray-500" />
                    </button>

                    {discount > 0 && (
                      <span className="absolute bottom-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-medium">
                        {discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] text-gray-800 font-medium line-clamp-2">
                      {p.name}
                    </h3>

                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-xl font-semibold text-black">
                        ₹{p.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm">
                        ₹{p.mrp}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 mt-2 text-sm">
                      <span className="text-yellow-500 font-medium">
                        {p.rating} ★
                      </span>
                      <span className="text-gray-500">
                        ({p.reviews})
                      </span>
                    </div>
                  </div>

                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default LatestProducts;