import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router";
import Sweets from "../../assets/Diwali/Sweets.jpg";
import Dryfruits from "../../assets/Diwali/Dryfruits.jpg";
import Corporate_gifts from "../../assets/Diwali/Corporate_gifts.jpg";
import Hampers_gift from "../../assets/Diwali/Hampers_gift.jpg";
import Card from "../../components/Card";
import { getProductsByCategory } from "../../data/dummyData"; 

// 🔴 DUMMY PRODUCTS DATA (matching Card component structure)
const allProducts = [
  // Luxury Hampers
  { 
    _id: "1",
    uuid: "luxury-hamper-1",
    title: "Premium Festive Hamper", 
    productTittle: "Premium Festive Hamper",
    basePrice: 3499, 
    sellingPrice: 2799,
    discountPercent: 20, 
    rating: 4.8, 
    reviews: [{ rating: 5 }, { rating: 4 }, { rating: 5 }],
    images: [Hampers_gift],
    variants: [{ 
      variantId: "var-1",
      variantImage: [Hampers_gift],
      price: 2799,
      variantQuantity: 50,
      color: "gold",
      type: "Hamper",
      dimension: "Large"
    }],
    category: "Luxury Hampers",
    deliverBy: "3-5 days"
  },
  { 
    _id: "2",
    uuid: "luxury-hamper-2",
    title: "Grand Diwali Gift Box", 
    productTittle: "Grand Diwali Gift Box",
    basePrice: 4999, 
    sellingPrice: 3999, 
    discountPercent: 20, 
    rating: 4.9, 
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }],
    images: [Hampers_gift],
    variants: [{ 
      variantId: "var-2",
      variantImage: [Hampers_gift],
      price: 3999,
      variantQuantity: 35,
      color: "gold",
      type: "Hamper",
      dimension: "Extra Large"
    }],
    category: "Luxury Hampers",
    deliverBy: "3-5 days"
  },
  { 
    _id: "3",
    uuid: "luxury-hamper-3",
    title: "Deluxe Celebration Hamper", 
    productTittle: "Deluxe Celebration Hamper",
    basePrice: 2499, 
    sellingPrice: 1999, 
    discountPercent: 20, 
    rating: 4.7, 
    reviews: [{ rating: 4 }, { rating: 5 }, { rating: 4 }],
    images: [Hampers_gift],
    variants: [{ 
      variantId: "var-3",
      variantImage: [Hampers_gift],
      price: 1999,
      variantQuantity: 60,
      color: "gold",
      type: "Hamper",
      dimension: "Medium"
    }],
    category: "Luxury Hampers",
    deliverBy: "3-5 days"
  },
  
  // Diwali Sweets
  { 
    _id: "4",
    uuid: "sweets-1",
    title: "Assorted Kaju Katli Box", 
    productTittle: "Assorted Kaju Katli Box",
    basePrice: 1199, 
    sellingPrice: 899, 
    discountPercent: 25, 
    rating: 4.8, 
    reviews: [{ rating: 5 }, { rating: 4 }, { rating: 5 }],
    images: [Sweets],
    variants: [{ 
      variantId: "var-4",
      variantImage: [Sweets],
      price: 899,
      variantQuantity: 100,
      color: "gold",
      type: "Sweets",
      dimension: "Medium"
    }],
    category: "Diwali Sweets",
    deliverBy: "2-3 days"
  },
  { 
    _id: "5",
    uuid: "sweets-2",
    title: "Traditional Mithai Gift Pack", 
    productTittle: "Traditional Mithai Gift Pack",
    basePrice: 1699, 
    sellingPrice: 1299, 
    discountPercent: 23, 
    rating: 4.7, 
    reviews: [{ rating: 4 }, { rating: 5 }, { rating: 4 }],
    images: [Sweets],
    variants: [{ 
      variantId: "var-5",
      variantImage: [Sweets],
      price: 1299,
      variantQuantity: 80,
      color: "gold",
      type: "Sweets",
      dimension: "Large"
    }],
    category: "Diwali Sweets",
    deliverBy: "2-3 days"
  },
  { 
    _id: "6",
    uuid: "sweets-3",
    title: "Premium Sweets Collection", 
    productTittle: "Premium Sweets Collection",
    basePrice: 1999, 
    sellingPrice: 1599, 
    discountPercent: 20, 
    rating: 4.9, 
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }],
    images: [Sweets],
    variants: [{ 
      variantId: "var-6",
      variantImage: [Sweets],
      price: 1599,
      variantQuantity: 45,
      color: "gold",
      type: "Sweets",
      dimension: "Extra Large"
    }],
    category: "Diwali Sweets",
    deliverBy: "2-3 days"
  },
  
  // Dry Fruit Boxes
  { 
    _id: "7",
    uuid: "dryfruits-1",
    title: "Premium Dry Fruits Gift Pack", 
    productTittle: "Premium Dry Fruits Gift Pack",
    basePrice: 1899, 
    sellingPrice: 1499, 
    discountPercent: 21, 
    rating: 4.8, 
    reviews: [{ rating: 5 }, { rating: 4 }, { rating: 5 }],
    images: [Dryfruits],
    variants: [{ 
      variantId: "var-7",
      variantImage: [Dryfruits],
      price: 1499,
      variantQuantity: 70,
      color: "gold",
      type: "Dry Fruits",
      dimension: "Medium"
    }],
    category: "Dry Fruit Boxes",
    deliverBy: "3-4 days"
  },
  { 
    _id: "8",
    uuid: "dryfruits-2",
    title: "Luxury Nuts & Berries", 
    productTittle: "Luxury Nuts & Berries",
    basePrice: 3199, 
    sellingPrice: 2499, 
    discountPercent: 22, 
    rating: 4.9, 
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 4 }],
    images: [Dryfruits],
    variants: [{ 
      variantId: "var-8",
      variantImage: [Dryfruits],
      price: 2499,
      variantQuantity: 40,
      color: "gold",
      type: "Dry Fruits",
      dimension: "Large"
    }],
    category: "Dry Fruit Boxes",
    deliverBy: "3-4 days"
  },
  
  // Corporate Gifts
  { 
    _id: "9",
    uuid: "corporate-1",
    title: "Executive Corporate Hamper", 
    productTittle: "Executive Corporate Hamper",
    basePrice: 6499, 
    sellingPrice: 4999, 
    discountPercent: 23, 
    rating: 4.9, 
    reviews: [{ rating: 5 }, { rating: 5 }, { rating: 5 }],
    images: [Corporate_gifts],
    variants: [{ 
      variantId: "var-9",
      variantImage: [Corporate_gifts],
      price: 4999,
      variantQuantity: 25,
      color: "black",
      type: "Corporate",
      dimension: "Extra Large"
    }],
    category: "Corporate Gifts",
    deliverBy: "4-5 days"
  },
  { 
    _id: "10",
    uuid: "corporate-2",
    title: "Premium Business Gift Set", 
    productTittle: "Premium Business Gift Set",
    basePrice: 4999, 
    sellingPrice: 3999, 
    discountPercent: 20, 
    rating: 4.8, 
    reviews: [{ rating: 5 }, { rating: 4 }, { rating: 5 }],
    images: [Corporate_gifts],
    variants: [{ 
      variantId: "var-10",
      variantImage: [Corporate_gifts],
      price: 3999,
      variantQuantity: 30,
      color: "black",
      type: "Corporate",
      dimension: "Large"
    }],
    category: "Corporate Gifts",
    deliverBy: "4-5 days"
  }
];

function Design() {
  const [active, setActive] = useState(0);
  const [showProducts, setShowProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const gifts = [
    {
      title: "Luxury Hampers",
      desc: "Premium curated hampers with chocolates, dry fruits & more",
      img: Hampers_gift,
      category: "Luxury Hampers"
    },
    {
      title: "Diwali Sweets",
      desc: "Delicious traditional mithai boxes for your loved ones",
      img: Sweets,
      category: "Diwali Sweets"
    },
    {
      title: "Dry Fruit Boxes",
      desc: "Healthy & premium dry fruits packed beautifully",
      img: Dryfruits,
      category: "Dry Fruit Boxes"
    },
    {
      title: "Corporate Gifts",
      desc: "Impress clients with luxury festive gifting solutions",
      img: Corporate_gifts,
      category: "Corporate Gifts"
    },
  ];

  const handleExploreClick = (category) => {
    setSelectedCategory(category);
    setShowProducts(true);
  };

const filteredProducts = selectedCategory 
  ? getProductsByCategory(selectedCategory)
  : [];

  return (
    <>
      <section className="relative py-16 px-4 md:px-16 lg:px-20 bg-gradient-to-br from-[#fff7ed] to-[#fde68a] overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute w-72 h-72 bg-yellow-300 opacity-20 blur-3xl top-10 left-10"></div>
        <div className="absolute w-72 h-72 bg-orange-400 opacity-20 blur-3xl bottom-10 right-10"></div>

        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1C3753]">
            FESTIVE + PREMIUM <span className="text-amber-500">Diwali Magic</span>
          </h2>
          <p className="text-gray-700 mt-2 font-bold">
            Gifts that sparkle like your celebrations
          </p>
        </div>

        <div className="flex gap-4 h-[400px] md:h-[600px]">
          {gifts.map((item, index) => (
            <motion.div
              key={index}
              onHoverStart={() => setActive(index)}
              className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex ${
                active === index ? "flex-[3]" : "flex-[1]"
              }`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: active === index ? 1 : 0,
                  y: active === index ? 0 : 30,
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-6 right-6 text-white"
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm mt-2 opacity-80">{item.desc}</p>

                <button
                  onClick={() => handleExploreClick(item.category)}
                  className="mt-4 px-5 py-2 bg-amber-400 text-[#1C3753] rounded-lg font-semibold shadow-lg hover:scale-105 transition"
                >
                  Explore →
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 h-[2px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-[#1C3753]">
            Make this Diwali unforgettable
          </h3>
          <button
            onClick={() => window.location.href = "/products"}
            className="mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-[#1C3753] rounded-lg font-semibold shadow-lg hover:scale-105 transition"
          >
            Shop All Gifts
          </button>
        </motion.div>
      </section>

      {/* Products Modal with Existing Card Component */}
      {showProducts && selectedCategory && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[85vh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#1C3753]">
                {selectedCategory}
              </h2>
              <button
                onClick={() => setShowProducts(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                ✕
              </button>
            </div>

            {/* Products Grid - Using Existing Card Component */}
            <div className="p-6">
              {filteredProducts.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                  No products found.
                </p>
              ) : (
                <Card cardData={filteredProducts} />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Design;