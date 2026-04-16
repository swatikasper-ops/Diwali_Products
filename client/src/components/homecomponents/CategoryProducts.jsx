import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router";
import Breadcrumbs from "../../components/Breadcrumbs";
import Filter from "../../components/Filter";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import Footer from "../../sections/Footer";
import EmptyState from "../../components/EmptyState";
import { PackageOpen } from "lucide-react";

// ✅ COLLECTION PRODUCTS - Make sure keys match exactly with Collection titles
const collectionProducts = {
  "Chocolate Hampers": [
    { _id: "choc_1", productTittle: "Premium Belgian Chocolate Box", title: "Premium Belgian Chocolate Box", price: 1299, mrp: 1699, rating: 4.8, reviews: 120, image: "/Diwali/Choclates_hampers.jpg", category: "Chocolate Hampers" },
    { _id: "choc_2", productTittle: "Lindt Chocolate Gift Hamper", title: "Lindt Chocolate Gift Hamper", price: 2499, mrp: 3299, rating: 4.9, reviews: 95, image: "/Diwali/Choclates_hampers.jpg", category: "Chocolate Hampers" },
    { _id: "choc_3", productTittle: "Dark Chocolate Assortment", title: "Dark Chocolate Assortment", price: 899, mrp: 1199, rating: 4.7, reviews: 78, image: "/Diwali/Choclates_hampers.jpg", category: "Chocolate Hampers" },
    { _id: "choc_4", productTittle: "Ferrero Rocher Collection", title: "Ferrero Rocher Collection", price: 1599, mrp: 1999, rating: 4.8, reviews: 110, image: "/Diwali/Choclates_hampers.jpg", category: "Chocolate Hampers" }
  ],
  "Dry Fruits": [
    { _id: "dry_1", productTittle: "Premium Dry Fruits Gift Pack", title: "Premium Dry Fruits Gift Pack", price: 1499, mrp: 1899, rating: 4.8, reviews: 110, image: "/Diwali/Dryfruits.jpg", category: "Dry Fruits" },
    { _id: "dry_2", productTittle: "Luxury Nuts & Berries Box", title: "Luxury Nuts & Berries Box", price: 2499, mrp: 3199, rating: 4.9, reviews: 85, image: "/Diwali/Dryfruits.jpg", category: "Dry Fruits" },
    { _id: "dry_3", productTittle: "Organic Dry Fruits Hamper", title: "Organic Dry Fruits Hamper", price: 1899, mrp: 2399, rating: 4.7, reviews: 65, image: "/Diwali/Dryfruits.jpg", category: "Dry Fruits" },
    { _id: "dry_4", productTittle: "Cashew & Almond Special", title: "Cashew & Almond Special", price: 999, mrp: 1299, rating: 4.8, reviews: 95, image: "/Diwali/Dryfruits.jpg", category: "Dry Fruits" }
  ],
  "Festive Hampers": [
    { _id: "fest_1", productTittle: "Grand Diwali Hamper", title: "Grand Diwali Hamper", price: 2799, mrp: 3499, rating: 4.9, reviews: 200, image: "/Diwali/hampers.jpg", category: "Festive Hampers" },
    { _id: "fest_2", productTittle: "Premium Festive Gift Box", title: "Premium Festive Gift Box", price: 3999, mrp: 4999, rating: 4.8, reviews: 150, image: "/Diwali/hampers.jpg", category: "Festive Hampers" },
    { _id: "fest_3", productTittle: "Deluxe Celebration Hamper", title: "Deluxe Celebration Hamper", price: 1999, mrp: 2499, rating: 4.7, reviews: 98, image: "/Diwali/hampers.jpg", category: "Festive Hampers" },
    { _id: "fest_4", productTittle: "Family Festive Pack", title: "Family Festive Pack", price: 1599, mrp: 1999, rating: 4.8, reviews: 120, image: "/Diwali/hampers.jpg", category: "Festive Hampers" }
  ],
  "Corporate Gifts": [
    { _id: "corp_1", productTittle: "Executive Corporate Hamper", title: "Executive Corporate Hamper", price: 4999, mrp: 6499, rating: 4.9, reviews: 234, image: "/Diwali/Corporate_gifts.jpg", category: "Corporate Gifts" },
    { _id: "corp_2", productTittle: "Premium Business Gift Set", title: "Premium Business Gift Set", price: 3999, mrp: 4999, rating: 4.8, reviews: 187, image: "/Diwali/Corporate_gifts.jpg", category: "Corporate Gifts" },
    { _id: "corp_3", productTittle: "Luxury Office Gift Box", title: "Luxury Office Gift Box", price: 2999, mrp: 3799, rating: 4.7, reviews: 145, image: "/Diwali/Corporate_gifts.jpg", category: "Corporate Gifts" },
    { _id: "corp_4", productTittle: "Corporate Diwali Special", title: "Corporate Diwali Special", price: 5999, mrp: 7499, rating: 4.9, reviews: 278, image: "/Diwali/Corporate_gifts.jpg", category: "Corporate Gifts" }
  ],
  "Home Decor": [
    { _id: "decor_1", productTittle: "Festive Wall Hangings", title: "Festive Wall Hangings", price: 899, mrp: 1199, rating: 4.5, reviews: 95, image: "/Diwali/Home_decor.jpg", category: "Home Decor" },
    { _id: "decor_2", productTittle: "LED Curtain Lights", title: "LED Curtain Lights", price: 699, mrp: 999, rating: 4.8, reviews: 145, image: "/Diwali/Home_decor.jpg", category: "Home Decor" },
    { _id: "decor_3", productTittle: "Home Decor Lantern Set", title: "Home Decor Lantern Set", price: 1299, mrp: 1599, rating: 4.6, reviews: 78, image: "/Diwali/Home_decor.jpg", category: "Home Decor" },
    { _id: "decor_4", productTittle: "Door Toran", title: "Door Toran", price: 449, mrp: 649, rating: 4.7, reviews: 112, image: "/Diwali/Home_decor.jpg", category: "Home Decor" }
  ]
};

const colors = [
  { colorName: "golden" },
  { colorName: "black" },
  { colorName: "white" },
  { colorName: "silver" },
];

function Product() {
  const [param, setParam] = useState("");
  const [color, setColor] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { categoryName, subcategoryName } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    try {
      setLoading(true);
      setError("");

      let filteredProducts = [];

      console.log("========== PRODUCT PAGE DEBUG ==========");
      console.log("1. state received:", state);
      console.log("2. state.filterCategory:", state?.filterCategory);
      console.log("3. Available keys in collectionProducts:", Object.keys(collectionProducts));
      console.log("4. Type of state.filterCategory:", typeof state?.filterCategory);

      // ✅ Check from Collection click
      if (state?.filterCategory) {
        const category = state.filterCategory;
        console.log("5. Looking for category exactly:", `"${category}"`);
        
        // Try exact match
        if (collectionProducts[category]) {
          console.log("6. ✅ Exact match found!");
          filteredProducts = collectionProducts[category];
        } 
        // Try case-insensitive match
        else {
          const matchedKey = Object.keys(collectionProducts).find(
            key => key.toLowerCase() === category.toLowerCase()
          );
          if (matchedKey) {
            console.log("6. ✅ Case-insensitive match found:", matchedKey);
            filteredProducts = collectionProducts[matchedKey];
          } else {
            console.log("6. ❌ No match found for:", category);
          }
        }
        
        console.log("7. Products found:", filteredProducts.length);
      }

      // Transform products to Card format
      const transformedProducts = filteredProducts.map(p => ({
        ...p,
        _id: p._id,
        uuid: p._id,
        title: p.productTittle,
        productTittle: p.productTittle,
        basePrice: p.price,
        sellingPrice: p.price,
        price: p.price,
        mrp: p.mrp,
        images: [p.image],
        variants: [{
          variantId: p._id,
          variantImage: [p.image],
          variantMrp: p.mrp,
          variantSellingPrice: p.price,
          price: p.price,
          variantQuantity: 50
        }],
        rating: p.rating,
        reviews: typeof p.reviews === 'number' ? [{ rating: p.reviews }] : p.reviews,
        category: p.category
      }));

      setItems(transformedProducts);
      console.log("8. Final items count:", transformedProducts.length);
      console.log("=========================================");
      
    } catch (err) {
      console.error("ERROR:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  }, [state]);

  const sort = (val) => {
    let sorted = [...items];
    switch (val) {
      case "high":
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case "low":
        sorted.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "atoz":
        sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        break;
      case "rating":
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    setItems(sorted);
  };

  const filterArts = items.filter((p) =>
    (p.title || p.productTittle || "").toLowerCase().includes(param.toLowerCase())
  );

  const filteredArts = filterArts.filter(
    (p) => !color.length || p.variants?.some((v) => color.includes(v.variantColor))
  );

  const pageTitle = state?.filterCategory || "Products";

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-64">
          <p>Loading products...</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Breadcrumbs category={pageTitle} subcategory={subcategoryName} />

      <div className="lg:px-20 md:px-[60px] px-4 pb-[23px] lg:flex gap-4 bg-gray-50">
        <Filter
          setParam={setParam}
          val={state}
          colors={colors}
          setColor={setColor}
          sort={sort}
        />

        <div className="flex-1 lg:gap-6 items-start">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : filteredArts.length === 0 ? (
            <EmptyState
              heading="No Products Found"
              description={`No products found in "${pageTitle}" category.`}
              icon={PackageOpen}
              ctaLabel="Go to Home"
              ctaLink="/"
            />
          ) : (
            <>
              <div className="mb-4 px-2">
                <h1 className="text-2xl font-semibold text-gray-800">{pageTitle}</h1>
                <p className="text-gray-500 text-sm">Showing {filteredArts.length} products</p>
              </div>
              <Card cardData={filteredArts} />
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;