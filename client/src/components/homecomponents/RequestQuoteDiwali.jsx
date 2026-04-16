import { Link } from "react-router";
import { motion } from "framer-motion";

function RequestQuoteDiwali() {
  return (
    <section className="px-3 md:px-10 py-10">

      <div className="relative rounded-3xl overflow-hidden">

        {/* 🌈 Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] via-white to-[#fef3c7]" />

        {/* ✨ Glow */}
        <div className="absolute -top-20 -left-20 w-[280px] h-[300px] bg-orange-400/20 blur-[140px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-yellow-400/20 blur-[140px] rounded-full" />

        {/* 🪔 Pattern */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_#f59e0b_1px,_transparent_1px)] bg-[length:20px_20px]" />

        {/* Border */}
        <div className="absolute inset-0 border border-orange-200/60 backdrop-blur-xl rounded-3xl" />

        {/* 🎯 CONTENT */}
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 px-4 md:px-10 py-6">

          {/* LEFT CONTENT */}
          <div className="flex-1">

            <h2 className="text-xl md:text-2xl font-bold text-[#ea580c] leading-snug">
              Elevate Your Diwali Gifting Experience
            </h2>

            <p className="mt-2 text-gray-600 text-sm md:text-base">
              Discover thoughtfully curated corporate gifts designed to leave a lasting impression.
              From luxury hampers to customized branding solutions.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4 text-xs">
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                Premium Hampers
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Custom Branding
              </span>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                Bulk Orders
              </span>
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Pan India Delivery
              </span>
            </div>

          </div>

          {/* CTA (NO GAP ISSUE NOW) */}
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-white overflow-hidden group shadow-md"
              >

                {/* Gradient */}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400"></span>

                {/* Shine */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <span className="absolute -left-10 top-0 w-1/3 h-full bg-white/30 blur-md rotate-12 animate-[shine_1.2s_linear]" />
                </span>

                {/* Text */}
                <span className="relative z-10">
                  Request Quote →
                </span>

              </Link>
            </motion.div>
          </div>

        </div>
      </div>

      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%) rotate(12deg); }
            100% { transform: translateX(300%) rotate(12deg); }
          }
        `}
      </style>

    </section>
  );
}

export default RequestQuoteDiwali;