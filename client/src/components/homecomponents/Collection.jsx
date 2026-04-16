import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const categories = [
  { title: "Chocolate Hampers", img: "/Diwali/Choclates_hampers.jpg" },
  { title: "Dry Fruits", img: "/Diwali/Dryfruits.jpg" },
  { title: "Festive Hampers", img: "/Diwali/hampers.jpg" },
  { title: "Corporate Gifts", img: "/Diwali/Corporate_gifts.jpg" },
  { title: "Home Decor", img: "/Diwali/Home_decor.jpg" }
];

function Collection() {
  const navigate = useNavigate();

  const handleClick = (title) => {
    console.log("Clicking:", title);
    navigate("/products", { state: { filterCategory: title } });
  };

  return (
    <section className="bg-[#fffaf5] py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800">
          Explore <span className="italic text-orange-600 font-serif">Festive Categories</span>
        </h2>
        <p className="text-gray-600 text-medium mt-2">Curated premium gifting collections</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...categories, ...categories].map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.title)}
              className="min-w-[160px] flex flex-col items-center group cursor-pointer"
            >
              <div className="w-[160px] h-[160px] rounded-[28px] bg-white/70 backdrop-blur-md border border-orange-100 shadow-md flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-tr from-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
              <p className="text-sm text-gray-800 mt-4 text-center leading-tight group-hover:text-orange-700 transition">
                {item.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Collection;