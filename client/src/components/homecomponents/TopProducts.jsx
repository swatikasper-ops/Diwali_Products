import { Link } from "react-router";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { getTopRatedProducts } from "../../data/dummyData";

function TopProducts() {
  const bestSellers = getTopRatedProducts(4);

  return (
    <div className="relative py-12 px-4 md:px-10">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fff7ed] via-white to-[#fef3c7]"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            Corporate Best Sellers
          </h1>
          <p className="text-sm text-gray-500">
            Premium gifting choices for clients & teams
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((p) => {
            const discount = Math.round(((p.mrp - p.price) / p.mrp) * 100);

            return (
              <Link
                key={p._id}
                to={`/product/${p._id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full h-[280px] overflow-hidden bg-white">
                  <img
                    src={p.images?.[0] || "/placeholder.jpg"}
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[15px] font-medium text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-semibold text-gray-900">
                      ₹{p.price}
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      ₹{p.mrp}
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      {discount}% OFF
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-2">
                    <Stack spacing={1}>
                      <Rating
                        value={p.rating || 4.5}
                        readOnly
                        precision={0.5}
                        size="small"
                      />
                    </Stack>
                    <span className="text-xs text-gray-500">
                      ({p.reviews?.length || 0})
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;