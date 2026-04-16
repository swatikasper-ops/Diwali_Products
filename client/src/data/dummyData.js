// src/data/dummyData.js

export const allProducts = [
  // ==================== DIWALI HAMPERS ====================
  {
    _id: "prod_1",
    uuid: "prod_1",
    title: "Premium Diwali Indulgence Hamper",
    productTittle: "Premium Diwali Indulgence Hamper",
    category: "Diwali Hampers",
    subcategory: "Festive Hampers",
    basePrice: 1499,
    sellingPrice: 1195,
    discountPercent: 20,
    mrp: 1499,
    price: 1195,
    costPrice: 900,
    profit: 295,
    taxPercent: 5,
    images: ["/Diwali/hampers.jpg"],
    variants: [{
      variantId: "var_1",
      variantName: "Premium Hamper",
      variantImage: ["/Diwali/hampers.jpg"],
      variantMrp: 1499,
      variantSellingPrice: 1195,
      variantDiscount: 20,
      variantColor: "gold",
      variantQuantity: 50,
      variantAvailableStock: 50,
      variantReorderLimit: 10,
      variantLength: 12,
      variantBreadth: 10,
      variantDimensionunit: "inch",
      variantWidth: 2,
      variantWidthUnit: "kg",
      variantType: "Hamper",
      variantValue: "Large",
      price: 1195,
      stockQuantity: 50
    }],
    reviews: [
      { rating: 5, comment: "Excellent product! Highly recommended", user: "Rajesh K.", date: "2024-10-15" },
      { rating: 4, comment: "Good quality, packaging could be better", user: "Priya S.", date: "2024-10-10" }
    ],
    rating: 4.7,
    description: "Premium Diwali indulgence hamper with assorted sweets, dry fruits, chocolates and decorative items. Perfect gift for family and friends.",
    bulletPoints: [
      "Includes 6 premium sweets",
      "Assorted dry fruits pack",
      "Designer diya set",
      "Eco-friendly packaging",
      "Free shipping"
    ],
    materialType: "Premium Gift Box",
    deliverBy: "3-5 days",
    SKU: "DWP001",
    status: "Active",
    tags: ["diwali", "premium", "hampers", "festive"],
    weight: "2 kg",
    color: "gold",
    inStock: true
  },
  {
    _id: "prod_2",
    uuid: "prod_2",
    title: "Insulated Tumbler Gift Set",
    productTittle: "Insulated Tumbler Gift Set",
    category: "Diwali Hampers",
    subcategory: "Corporate Gifts",
    basePrice: 899,
    sellingPrice: 725,
    discountPercent: 19,
    mrp: 899,
    price: 725,
    costPrice: 550,
    profit: 175,
    taxPercent: 5,
    images: ["/Diwali/Tumbler.jpg"],
    variants: [{
      variantId: "var_2",
      variantName: "Tumbler Set",
      variantImage: ["/Diwali/Tumbler.jpg"],
      variantMrp: 899,
      variantSellingPrice: 725,
      variantDiscount: 19,
      variantColor: "silver",
      variantQuantity: 100,
      variantAvailableStock: 100,
      variantReorderLimit: 20,
      variantLength: 8,
      variantBreadth: 8,
      variantDimensionunit: "inch",
      variantWidth: 0.5,
      variantWidthUnit: "kg",
      variantType: "Tumbler",
      variantValue: "Medium",
      price: 725,
      stockQuantity: 100
    }],
    reviews: [
      { rating: 5, comment: "Great quality tumbler! Keeps drink hot for hours", user: "Amit V.", date: "2024-10-12" }
    ],
    rating: 4.6,
    description: "Premium insulated tumbler gift set with stainless steel body. Perfect for corporate gifting.",
    bulletPoints: [
      "Double wall insulation",
      "Stainless steel body",
      "Includes 2 tumblers",
      "Gift box included",
      "Dishwasher safe"
    ],
    materialType: "Stainless Steel",
    deliverBy: "3-4 days",
    SKU: "DWT002",
    status: "Active",
    tags: ["tumbler", "corporate", "gifts"],
    weight: "0.5 kg",
    color: "silver",
    inStock: true
  },
  {
    _id: "prod_3",
    uuid: "prod_3",
    title: "Gourmet Sweets Celebration Box",
    productTittle: "Gourmet Sweets Celebration Box",
    category: "Diwali Hampers",
    subcategory: "Sweets",
    basePrice: 1595,
    sellingPrice: 1495,
    discountPercent: 6,
    mrp: 1595,
    price: 1495,
    costPrice: 1100,
    profit: 395,
    taxPercent: 5,
    images: ["/Diwali/Sweets2.AVIF"],
    variants: [{
      variantId: "var_3",
      variantName: "Sweets Box",
      variantImage: ["/Diwali/Sweets2.AVIF"],
      variantMrp: 1595,
      variantSellingPrice: 1495,
      variantDiscount: 6,
      variantColor: "gold",
      variantQuantity: 30,
      variantAvailableStock: 30,
      variantReorderLimit: 5,
      variantLength: 10,
      variantBreadth: 8,
      variantDimensionunit: "inch",
      variantWidth: 1,
      variantWidthUnit: "kg",
      variantType: "Sweets",
      variantValue: "Medium",
      price: 1495,
      stockQuantity: 30
    }],
    reviews: [
      { rating: 5, comment: "Delicious sweets! Very fresh", user: "Neha G.", date: "2024-10-08" },
      { rating: 4, comment: "Good packaging and taste", user: "Sanjay P.", date: "2024-10-05" }
    ],
    rating: 4.8,
    description: "Gourmet sweets celebration box with traditional Indian mithai. Perfect for Diwali celebrations.",
    bulletPoints: [
      "Assorted 8 varieties",
      "Pure ghee sweets",
      "Eco-friendly box",
      "Freshly prepared",
      "Long shelf life"
    ],
    materialType: "Food",
    deliverBy: "2-3 days",
    SKU: "DWS003",
    status: "Active",
    tags: ["sweets", "mithai", "diwali", "gourmet"],
    weight: "1 kg",
    color: "gold",
    inStock: true
  },

  // ==================== HOME DECOR ====================
  {
    _id: "prod_4",
    uuid: "prod_4",
    title: "Pure Copper Water Bottle",
    productTittle: "Pure Copper Water Bottle",
    category: "Home Decor",
    subcategory: "Copper Items",
    basePrice: 1299,
    sellingPrice: 945,
    discountPercent: 27,
    mrp: 1299,
    price: 945,
    costPrice: 700,
    profit: 245,
    taxPercent: 5,
    images: ["/Diwali/Copper_bottle.jpg"],
    variants: [{
      variantId: "var_4",
      variantName: "Copper Bottle",
      variantImage: ["/Diwali/Copper_bottle.jpg"],
      variantMrp: 1299,
      variantSellingPrice: 945,
      variantDiscount: 27,
      variantColor: "copper",
      variantQuantity: 75,
      variantAvailableStock: 75,
      variantReorderLimit: 15,
      variantLength: 10,
      variantBreadth: 4,
      variantDimensionunit: "inch",
      variantWidth: 0.8,
      variantWidthUnit: "kg",
      variantType: "Bottle",
      variantValue: "1L",
      price: 945,
      stockQuantity: 75
    }],
    reviews: [
      { rating: 5, comment: "Very good quality copper bottle", user: "Ramesh S.", date: "2024-10-01" },
      { rating: 4, comment: "Nice product, good for health", user: "Sneha M.", date: "2024-09-28" }
    ],
    rating: 4.6,
    description: "Pure copper water bottle for health benefits. Ayurvedic properties help improve digestion and immunity.",
    bulletPoints: [
      "100% pure copper",
      "1 liter capacity",
      "Handcrafted design",
      "Leak-proof cap",
      "Comes with gift box"
    ],
    materialType: "Copper",
    deliverBy: "4-5 days",
    SKU: "DWH004",
    status: "Active",
    tags: ["copper", "bottle", "health", "ayurvedic"],
    weight: "0.8 kg",
    color: "copper",
    inStock: true
  },
  {
    _id: "prod_7",
    uuid: "prod_7",
    title: "Home Decor Lantern Set",
    productTittle: "Home Decor Lantern Set",
    category: "Home Decor",
    subcategory: "Lanterns",
    basePrice: 1599,
    sellingPrice: 1299,
    discountPercent: 18,
    mrp: 1599,
    price: 1299,
    costPrice: 950,
    profit: 349,
    taxPercent: 5,
    images: ["/Diwali/Home_decor.jpg"],
    variants: [{
      variantId: "var_7",
      variantName: "Lantern Set",
      variantImage: ["/Diwali/Home_decor.jpg"],
      variantMrp: 1599,
      variantSellingPrice: 1299,
      variantDiscount: 18,
      variantColor: "gold",
      variantQuantity: 25,
      variantAvailableStock: 25,
      variantReorderLimit: 5,
      variantLength: 12,
      variantBreadth: 6,
      variantDimensionunit: "inch",
      variantWidth: 1.2,
      variantWidthUnit: "kg",
      variantType: "Lantern",
      variantValue: "Set of 2",
      price: 1299,
      stockQuantity: 25
    }],
    reviews: [
      { rating: 4, comment: "Beautiful lanterns, adds festive look", user: "Divya K.", date: "2024-10-03" }
    ],
    rating: 4.5,
    description: "Beautiful home decor lantern set for Diwali and festive seasons.",
    bulletPoints: [
      "Set of 2 lanterns",
      "LED lights included",
      "Metal frame",
      "Battery operated",
      "Remote control"
    ],
    materialType: "Metal",
    deliverBy: "4-5 days",
    SKU: "DWH007",
    status: "Active",
    tags: ["lantern", "home decor", "diwali", "lights"],
    weight: "1.2 kg",
    color: "gold",
    inStock: true
  },

  // ==================== DECORATIVE DIYAS ====================
  {
    _id: "prod_5",
    uuid: "prod_5",
    title: "Designer Clay Diya Set",
    productTittle: "Designer Clay Diya Set",
    category: "Decorative Diyas",
    subcategory: "Diyas",
    basePrice: 599,
    sellingPrice: 399,
    discountPercent: 33,
    mrp: 599,
    price: 399,
    costPrice: 250,
    profit: 149,
    taxPercent: 5,
    images: ["/Diwali/Diya2.AVIF"],
    variants: [{
      variantId: "var_5",
      variantName: "Clay Diya Set",
      variantImage: ["/Diwali/Diya2.AVIF"],
      variantMrp: 599,
      variantSellingPrice: 399,
      variantDiscount: 33,
      variantColor: "multicolor",
      variantQuantity: 200,
      variantAvailableStock: 200,
      variantReorderLimit: 30,
      variantLength: 4,
      variantBreadth: 4,
      variantDimensionunit: "inch",
      variantWidth: 0.2,
      variantWidthUnit: "kg",
      variantType: "Diya",
      variantValue: "Set of 6",
      price: 399,
      stockQuantity: 200
    }],
    reviews: [
      { rating: 5, comment: "Beautiful diyas! Perfect for Diwali", user: "Kavita R.", date: "2024-10-07" },
      { rating: 4, comment: "Nice colors and design", user: "Manoj T.", date: "2024-10-02" }
    ],
    rating: 4.5,
    description: "Designer clay diya set hand-painted with vibrant colors. Perfect for Diwali decoration.",
    bulletPoints: [
      "Set of 6 diyas",
      "Hand-painted design",
      "Eco-friendly clay",
      "Ready to use",
      "Traditional design"
    ],
    materialType: "Clay",
    deliverBy: "2-3 days",
    SKU: "DWD005",
    status: "Active",
    tags: ["diya", "clay", "traditional", "decoration"],
    weight: "0.2 kg",
    color: "multicolor",
    inStock: true
  },
  {
    _id: "prod_6",
    uuid: "prod_6",
    title: "Brass Diya Premium",
    productTittle: "Brass Diya Premium",
    category: "Decorative Diyas",
    subcategory: "Brass Items",
    basePrice: 999,
    sellingPrice: 699,
    discountPercent: 30,
    mrp: 999,
    price: 699,
    costPrice: 500,
    profit: 199,
    taxPercent: 5,
    images: ["/Diwali/Diya1.jpg"],
    variants: [{
      variantId: "var_6",
      variantName: "Brass Diya",
      variantImage: ["/Diwali/Diya1.jpg"],
      variantMrp: 999,
      variantSellingPrice: 699,
      variantDiscount: 30,
      variantColor: "brass",
      variantQuantity: 45,
      variantAvailableStock: 45,
      variantReorderLimit: 10,
      variantLength: 5,
      variantBreadth: 5,
      variantDimensionunit: "inch",
      variantWidth: 0.3,
      variantWidthUnit: "kg",
      variantType: "Diya",
      variantValue: "Large",
      price: 699,
      stockQuantity: 45
    }],
    reviews: [
      { rating: 5, comment: "Premium quality brass diya", user: "Vikram S.", date: "2024-10-09" }
    ],
    rating: 4.7,
    description: "Premium brass diya for festive decoration. Traditional design with modern finish.",
    bulletPoints: [
      "Pure brass material",
      "Antique finish",
      "Handcrafted",
      "Long-lasting",
      "Perfect for puja"
    ],
    materialType: "Brass",
    deliverBy: "3-4 days",
    SKU: "DWB006",
    status: "Active",
    tags: ["brass", "diya", "puja", "traditional"],
    weight: "0.3 kg",
    color: "brass",
    inStock: true
  },

  // ==================== CORPORATE GIFTS ====================
  {
    _id: "prod_8",
    uuid: "prod_8",
    title: "Luxury Corporate Hamper",
    productTittle: "Luxury Corporate Hamper",
    category: "Corporate Gifts",
    subcategory: "Premium Hampers",
    basePrice: 2499,
    sellingPrice: 1999,
    discountPercent: 20,
    mrp: 2499,
    price: 1999,
    costPrice: 1500,
    profit: 499,
    taxPercent: 5,
    images: ["/Diwali/Premium_hampers.jpg"],
    variants: [{
      variantId: "var_8",
      variantName: "Corporate Hamper",
      variantImage: ["/Diwali/Premium_hampers.jpg"],
      variantMrp: 2499,
      variantSellingPrice: 1999,
      variantDiscount: 20,
      variantColor: "black",
      variantQuantity: 20,
      variantAvailableStock: 20,
      variantReorderLimit: 5,
      variantLength: 14,
      variantBreadth: 10,
      variantDimensionunit: "inch",
      variantWidth: 2.5,
      variantWidthUnit: "kg",
      variantType: "Hamper",
      variantValue: "Extra Large",
      price: 1999,
      stockQuantity: 20
    }],
    reviews: [
      { rating: 5, comment: "Excellent corporate gift! Very premium", user: "HR Manager", date: "2024-10-14" },
      { rating: 5, comment: "Very professional packaging", user: "Corporate Client", date: "2024-10-11" }
    ],
    rating: 4.9,
    description: "Luxury corporate hamper for clients and employees. Premium products in elegant packaging.",
    bulletPoints: [
      "Premium dry fruits",
      "Gourmet chocolates",
      "Designer desk accessories",
      "Customizable branding",
      "Elegant gift box"
    ],
    materialType: "Premium Box",
    deliverBy: "4-5 days",
    SKU: "DWC008",
    status: "Active",
    tags: ["corporate", "premium", "hampers", "gifts"],
    weight: "2.5 kg",
    color: "black",
    inStock: true
  },
  {
    _id: "prod_9",
    uuid: "prod_9",
    title: "Luxury Aromatherapy Wellness Kit",
    productTittle: "Luxury Aromatherapy Wellness Kit",
    category: "Corporate Gifts",
    subcategory: "Wellness",
    basePrice: 3499,
    sellingPrice: 2799,
    discountPercent: 20,
    mrp: 3499,
    price: 2799,
    costPrice: 2100,
    profit: 699,
    taxPercent: 5,
    images: ["/Diwali/Luxary_set.webp"],
    variants: [{
      variantId: "var_9",
      variantName: "Wellness Kit",
      variantImage: ["/Diwali/Luxary_set.webp"],
      variantMrp: 3499,
      variantSellingPrice: 2799,
      variantDiscount: 20,
      variantColor: "gold",
      variantQuantity: 15,
      variantAvailableStock: 15,
      variantReorderLimit: 3,
      variantLength: 12,
      variantBreadth: 8,
      variantDimensionunit: "inch",
      variantWidth: 1.5,
      variantWidthUnit: "kg",
      variantType: "Wellness",
      variantValue: "Large",
      price: 2799,
      stockQuantity: 15
    }],
    reviews: [
      { rating: 5, comment: "Amazing product! Very relaxing", user: "Wellness Coach", date: "2024-10-13" }
    ],
    rating: 4.9,
    description: "Luxury aromatherapy wellness kit for relaxation and stress relief.",
    bulletPoints: [
      "Essential oils set",
      "Aroma diffuser",
      "Massage oil",
      "Stress relief candle",
      "Instruction guide"
    ],
    materialType: "Glass & Wood",
    deliverBy: "3-4 days",
    SKU: "DWA009",
    status: "Active",
    tags: ["wellness", "aromatherapy", "spa", "relaxation"],
    weight: "1.5 kg",
    color: "gold",
    inStock: true
  },
  {
    _id: "prod_10",
    uuid: "prod_10",
    title: "Smart Desk Organizer Gift Set",
    productTittle: "Smart Desk Organizer Gift Set",
    category: "Corporate Gifts",
    subcategory: "Office Accessories",
    basePrice: 2599,
    sellingPrice: 1999,
    discountPercent: 23,
    mrp: 2599,
    price: 1999,
    costPrice: 1500,
    profit: 499,
    taxPercent: 5,
    images: ["/Diwali/desk_organizer.jpeg"],
    variants: [{
      variantId: "var_10",
      variantName: "Desk Organizer",
      variantImage: ["/Diwali/desk_organizer.jpeg"],
      variantMrp: 2599,
      variantSellingPrice: 1999,
      variantDiscount: 23,
      variantColor: "black",
      variantQuantity: 40,
      variantAvailableStock: 40,
      variantReorderLimit: 10,
      variantLength: 10,
      variantBreadth: 6,
      variantDimensionunit: "inch",
      variantWidth: 0.8,
      variantWidthUnit: "kg",
      variantType: "Organizer",
      variantValue: "Medium",
      price: 1999,
      stockQuantity: 40
    }],
    reviews: [
      { rating: 5, comment: "Very useful organizer! Perfect for office", user: "Office Admin", date: "2024-10-10" }
    ],
    rating: 4.8,
    description: "Smart desk organizer gift set for professionals. Keeps desk tidy and organized.",
    bulletPoints: [
      "Multi-compartment design",
      "Phone stand included",
      "Cable management",
      "Pen holder",
      "Premium wood finish"
    ],
    materialType: "Wood",
    deliverBy: "3-4 days",
    SKU: "DWS010",
    status: "Active",
    tags: ["office", "organizer", "desk", "corporate"],
    weight: "0.8 kg",
    color: "black",
    inStock: true
  },
  {
    _id: "prod_11",
    uuid: "prod_11",
    title: "Minimal Scandinavian Gift Box",
    productTittle: "Minimal Scandinavian Gift Box",
    category: "Corporate Gifts",
    subcategory: "Minimal Gifts",
    basePrice: 2299,
    sellingPrice: 1799,
    discountPercent: 21,
    mrp: 2299,
    price: 1799,
    costPrice: 1300,
    profit: 499,
    taxPercent: 5,
    images: ["/Diwali/gifts_box.webp"],
    variants: [{
      variantId: "var_11",
      variantName: "Scandinavian Box",
      variantImage: ["/Diwali/gifts_box.webp"],
      variantMrp: 2299,
      variantSellingPrice: 1799,
      variantDiscount: 21,
      variantColor: "white",
      variantQuantity: 35,
      variantAvailableStock: 35,
      variantReorderLimit: 8,
      variantLength: 11,
      variantBreadth: 8,
      variantDimensionunit: "inch",
      variantWidth: 1.2,
      variantWidthUnit: "kg",
      variantType: "Gift Box",
      variantValue: "Medium",
      price: 1799,
      stockQuantity: 35
    }],
    reviews: [
      { rating: 4.5, comment: "Beautiful minimalist design", user: "Designer", date: "2024-10-06" }
    ],
    rating: 4.6,
    description: "Minimal Scandinavian design gift box with premium products.",
    bulletPoints: [
      "Minimalist design",
      "Eco-friendly materials",
      "Premium contents",
      "Reusable box",
      "Perfect for any occasion"
    ],
    materialType: "Paper & Wood",
    deliverBy: "3-4 days",
    SKU: "DWS011",
    status: "Active",
    tags: ["scandinavian", "minimal", "gift box", "eco-friendly"],
    weight: "1.2 kg",
    color: "white",
    inStock: true
  },
  {
    _id: "prod_12",
    uuid: "prod_12",
    title: "Ambient Festive Light Box",
    productTittle: "Ambient Festive Light Box",
    category: "Home Decor",
    subcategory: "Lighting",
    basePrice: 1699,
    sellingPrice: 1299,
    discountPercent: 23,
    mrp: 1699,
    price: 1299,
    costPrice: 950,
    profit: 349,
    taxPercent: 5,
    images: ["/Diwali/light_box.jpg"],
    variants: [{
      variantId: "var_12",
      variantName: "Light Box",
      variantImage: ["/Diwali/light_box.jpg"],
      variantMrp: 1699,
      variantSellingPrice: 1299,
      variantDiscount: 23,
      variantColor: "warm white",
      variantQuantity: 50,
      variantAvailableStock: 50,
      variantReorderLimit: 10,
      variantLength: 8,
      variantBreadth: 6,
      variantDimensionunit: "inch",
      variantWidth: 0.5,
      variantWidthUnit: "kg",
      variantType: "Lighting",
      variantValue: "Medium",
      price: 1299,
      stockQuantity: 50
    }],
    reviews: [
      { rating: 4.5, comment: "Beautiful ambient light", user: "Home Decor Lover", date: "2024-10-04" }
    ],
    rating: 4.5,
    description: "Ambient festive light box for creating warm atmosphere.",
    bulletPoints: [
      "Remote controlled",
      "Multiple color modes",
      "USB powered",
      "Timer function",
      "Energy efficient"
    ],
    materialType: "Acrylic & LED",
    deliverBy: "3-4 days",
    SKU: "DWH012",
    status: "Active",
    tags: ["lights", "ambient", "festive", "decoration"],
    weight: "0.5 kg",
    color: "warm white",
    inStock: true
  }
];

// ==================== HELPER FUNCTIONS ====================

// Get all categories
export const getAllCategories = () => {
  return [...new Set(allProducts.map(p => p.category))];
};

// Get products by category
export const getProductsByCategory = (category) => {
  return allProducts.filter(p => p.category === category);
};

// Get product by ID
export const getProductById = (id) => {
  return allProducts.find(p => p._id === id || p.uuid === id);
};

// Get similar products (same category, different product)
export const getSimilarProducts = (product, limit = 4) => {
  return allProducts.filter(p => 
    p._id !== product._id && p.category === product.category
  ).slice(0, limit);
};

// Get latest products
export const getLatestProducts = (limit = 8) => {
  return [...allProducts].reverse().slice(0, limit);
};

// Get top rated products
export const getTopRatedProducts = (limit = 4) => {
  return [...allProducts]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, limit);
};

// Get products by subcategory
export const getProductsBySubcategory = (subcategory) => {
  return allProducts.filter(p => p.subcategory === subcategory);
};

// Search products
export const searchProducts = (query) => {
  const searchTerm = query.toLowerCase();
  return allProducts.filter(p => 
    p.title.toLowerCase().includes(searchTerm) ||
    p.category.toLowerCase().includes(searchTerm) ||
    p.subcategory.toLowerCase().includes(searchTerm) ||
    p.SKU.toLowerCase().includes(searchTerm)
  );
};

// Get product count by category
export const getCategoryCount = () => {
  const counts = {};
  allProducts.forEach(p => {
    counts[p.category] = (counts[p.category] || 0) + 1;
  });
  return counts;
};

// Export all products as default
export default allProducts;