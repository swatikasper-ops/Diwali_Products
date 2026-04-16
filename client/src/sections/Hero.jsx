import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Hamper from "../assets/Diwali/hampers.jpg";
import Sweets from "../assets/Diwali/Sweets.jpg";
import Corporate_gifts from "../assets/Diwali/Corporate_gifts.jpg";
import Hampers_gift from "../assets/Diwali/Hampers_gift.jpg";
import Dryfruits from "../assets/Diwali/Dryfruits.jpg";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Hero() {
  const navigate = useNavigate();

  const localImages = [

    { img: Hamper, name: "Festive Hamper", category: "Diwali Hampers" },
    { img: Sweets, name: "Diwali Sweets", category: "Diwali Hampers" },
    { img: Corporate_gifts, name: "Corporate Gifts", category: "Diwali Hampers" },
    { img: Hampers_gift, name: "Gift Hampers", category: "Diwali Hampers" },
    { img: Dryfruits, name: "Dry Fruits Box", category: "Diwali Hampers" },
  ];

  return (
    <section className="relative w-full mt-15 mx-auto sm:py-10 bg-gradient-to-br from-[#fff7ed] to-[#fef3c7] pb-2 overflow-hidden">
      {/* ✨ Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-2 h-2 bg-yellow-300 rounded-full absolute top-10 left-10 animate-ping"></div>
        <div className="w-2 h-2 bg-yellow-400 rounded-full absolute top-40 right-20 animate-ping"></div>
        <div className="w-2 h-2 bg-orange-300 rounded-full absolute bottom-20 left-1/3 animate-ping"></div>
      </div>

      <div className="mx-auto w-full flex flex-col-reverse md:flex-row md:gap-8 justify-center items-center px-0 sm:px-4 md:px-16 lg:px-20">
        {/* LEFT SECTION */}
        <div className="relative w-full md:min-h-[500px] flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden bg-gradient-to-br from-[#1C3753] to-[#0f172a] text-white shadow-2xl">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

          {/* TEXT */}
          <div className="flex flex-col gap-5 px-6 md:px-8 lg:px-10 text-center md:text-left py-10 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[26px] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] font-semibold leading-tight"
            >
              Celebrate Diwali with
              <span className="block text-amber-400 mt-3 drop-shadow-[0_0_15px_rgba(255,193,7,0.6)]">
                Luxury Gifts & Hampers
              </span>
            </motion.h1>

            <p className="text-[14px] sm:text-[16px] text-gray-200 max-w-md">
              Premium corporate hampers, personalized gifts & festive collections
              curated for your loved ones and business partners.
            </p>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-4">
              {/* 🔥 CORPORATE GIFTS BUTTON - Click to filter */}
              // src/sections/Hero.jsx - Fix the button
<button
  onClick={() => {
    navigate("/products", { 
      state: { 
        filterCategory: "Corporate Gifts"  // ✅ Exact category name
      } 
    });
  }}
  className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1C3753] rounded-lg font-semibold flex items-center gap-2 hover:gap-3 transition-all shadow-lg"
>
  Corporate Gifts <ArrowRight />
</button>

              {/* FAMILY GIFTS BUTTON */}
              <button
                onClick={() => {
                  navigate("/products", { 
                    state: { 
                      filterCategory: "Home Decor"
                    } 
                  });
                }}
                className="px-6 py-3 border border-white text-white rounded-lg flex items-center gap-2 hover:bg-white hover:text-[#1C3753] transition-all"
              >
                Family Gifts
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[500px]"
          >
            <img
              className="w-full h-full object-cover object-center"
              src={Hamper}
              alt="Diwali Gifts"
            />
          </motion.div>
        </div>

        {/* RIGHT SWIPER SECTION */}
        <div className="relative group w-full sm:min-w-[350px] lg:w-[400px] xl:min-w-[420px] overflow-hidden shadow-2xl h-[300px] sm:h-[400px] md:h-[500px] rounded-xl max-sm:mx-6">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            onSwiper={(swiper) => {
              const el = swiper.el;
              el.onmouseenter = () => {
                if (swiper.autoplay) swiper.autoplay.pause();
              };
              el.onmouseleave = () => {
                if (swiper.autoplay) swiper.autoplay.resume();
              };
            }}
            className="h-full w-full"
          >
            {localImages.map((item, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => {
                    navigate("/products", { 
                      state: { filterCategory: item.category }
                    });
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-5 left-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg">
                    <span className="text-sm font-semibold text-[#1C3753]">
                      {item.name}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAV BUTTONS */}
          <button className="swiper-prev absolute hidden group-hover:block top-[45%] left-3 z-10 bg-white/80 rounded-full p-1 shadow-md">
            <ChevronLeft size={40} />
          </button>
          <button className="swiper-next absolute hidden group-hover:block top-[45%] right-3 z-10 bg-white/80 rounded-full p-1 shadow-md">
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;