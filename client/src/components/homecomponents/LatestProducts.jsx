import { useState } from "react";
import { Link } from "react-router";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import latestProducts from "../../pages/admin/data/LatestProduct.json";

function LatestProducts() {
  const [index, setIndex] = useState(0);
  const products = latestProducts;
  const visibleProducts = products.slice(index, index + 4);

  const next = () => {
    if (index + 4 < products.length) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const discountPercent = (mrp, price) => {
    if (!mrp || !price) return 0;
    return Math.round(((mrp - price) / mrp) * 100);
  };

  return (
    <section className="lg:px-20 md:px-16 px-4 py-14 bg-[#f5f5f5]">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#1C3753]">
          Latest Diwali Hampers
        </h2>
      </div>

      <div className="relative">
        {/* Previous Button */}
        {index > 0 && (
          <button
            onClick={prev}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft size={20} />
          </button>
        )}

        {/* Next Button */}
        {index + 4 < products.length && (
          <button
            onClick={next}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight size={20} />
          </button>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((p) => {
            const discount = discountPercent(p.mrp, p.price);
            const imageUrl = p.images?.[0] || p.image || "/placeholder.jpg";

            return (
              <motion.div
                key={p._id}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl border shadow-sm hover:shadow-xl transition overflow-hidden group"
              >
                <Link to={`/product/${p._id}`}>
                  <div className="relative">
                    <img
                      src={imageUrl}
                      alt={p.title}
                      className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* Wishlist Button */}
                    <button
                      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                    >
                      <Heart size={16} className="text-gray-500" />
                    </button>

                    {/* Discount Badge */}
                    {discount > 0 && (
                      <span className="absolute bottom-3 left-3 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-medium">
                        {discount}% OFF
                      </span>
                    )}
                  </div>

                  <div className="p-4">
                    <h3 className="text-[16px] text-gray-800 font-medium line-clamp-2">
                      {p.title}
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
                        ({p.reviews?.length || 0})
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