import React, { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../sections/Footer";
import Ratings from "../components/Ratings";
import Reviews from "../components/Reviews";
import CustomerReview from "../components/CustomerReview";
import Card from "../components/Card";
import { Heart, Minus, PackageOpen, Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, buyNow, decreaseQty, increaseQty } from "../redux/cart/cartSlice";
import { addToWishlist, removeFromWishlist } from "../redux/cart/wishlistSlice";
import { getPrices, formatPrice } from "../utils/homePageUtils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import EmptyState from "../components/EmptyState";
import AddReviewsModel from "../components/AddReviewsModel";

// ✅ ONLY COLLECTION PRODUCTS DATA
const COLLECTION_DATA = {
  "Chocolate Hampers": [
    { _id: "choc_1", productTittle: "Premium Belgian Chocolate Box", title: "Premium Belgian Chocolate Box", price: 1299, mrp: 1699, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Choclates_hampers.jpg", images: ["/Diwali/Choclates_hampers.jpg"], category: "Chocolate Hampers", description: "Assorted Belgian chocolates in premium gift box" },
    { _id: "choc_2", productTittle: "Lindt Chocolate Gift Hamper", title: "Lindt Chocolate Gift Hamper", price: 2499, mrp: 3299, rating: 4.9, reviews: [{ rating: 5 }, { rating: 5 }], image: "/Diwali/Choclates_hampers.jpg", images: ["/Diwali/Choclates_hampers.jpg"], category: "Chocolate Hampers", description: "Lindt chocolate collection with gift wrapping" },
    { _id: "choc_3", productTittle: "Dark Chocolate Assortment", title: "Dark Chocolate Assortment", price: 899, mrp: 1199, rating: 4.7, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Choclates_hampers.jpg", images: ["/Diwali/Choclates_hampers.jpg"], category: "Chocolate Hampers", description: "Premium dark chocolate assortment" },
    { _id: "choc_4", productTittle: "Ferrero Rocher Collection", title: "Ferrero Rocher Collection", price: 1599, mrp: 1999, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Choclates_hampers.jpg", images: ["/Diwali/Choclates_hampers.jpg"], category: "Chocolate Hampers", description: "Ferrero Rocher 24 pcs gift box" }
  ],
  "Dry Fruits": [
    { _id: "dry_1", productTittle: "Premium Dry Fruits Gift Pack", title: "Premium Dry Fruits Gift Pack", price: 1499, mrp: 1899, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Dryfruits.jpg", images: ["/Diwali/Dryfruits.jpg"], category: "Dry Fruits", description: "Assorted premium dry fruits gift pack" },
    { _id: "dry_2", productTittle: "Luxury Nuts & Berries Box", title: "Luxury Nuts & Berries Box", price: 2499, mrp: 3199, rating: 4.9, reviews: [{ rating: 5 }, { rating: 5 }], image: "/Diwali/Dryfruits.jpg", images: ["/Diwali/Dryfruits.jpg"], category: "Dry Fruits", description: "Premium nuts and berries gift box" }
  ],
  "Festive Hampers": [
    { _id: "fest_1", productTittle: "Grand Diwali Hamper", title: "Grand Diwali Hamper", price: 2799, mrp: 3499, rating: 4.9, reviews: [{ rating: 5 }, { rating: 5 }], image: "/Diwali/hampers.jpg", images: ["/Diwali/hampers.jpg"], category: "Festive Hampers", description: "Complete Diwali hamper with sweets, dry fruits & gifts" },
    { _id: "fest_2", productTittle: "Premium Festive Gift Box", title: "Premium Festive Gift Box", price: 3999, mrp: 4999, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/hampers.jpg", images: ["/Diwali/hampers.jpg"], category: "Festive Hampers", description: "Luxury festive gift box with premium items" }
  ],
  "Corporate Gifts": [
    { _id: "corp_1", productTittle: "Executive Corporate Hamper", title: "Executive Corporate Hamper", price: 4999, mrp: 6499, rating: 4.9, reviews: [{ rating: 5 }, { rating: 5 }], image: "/Diwali/Corporate_gifts.jpg", images: ["/Diwali/Corporate_gifts.jpg"], category: "Corporate Gifts", description: "Premium corporate hamper for executives" },
    { _id: "corp_2", productTittle: "Premium Business Gift Set", title: "Premium Business Gift Set", price: 3999, mrp: 4999, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Corporate_gifts.jpg", images: ["/Diwali/Corporate_gifts.jpg"], category: "Corporate Gifts", description: "Elegant business gift set for clients" }
  ],
  "Home Decor": [
    { _id: "decor_1", productTittle: "Festive Wall Hangings", title: "Festive Wall Hangings", price: 899, mrp: 1199, rating: 4.5, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Home_decor.jpg", images: ["/Diwali/Home_decor.jpg"], category: "Home Decor", description: "Beautiful festive wall hangings" },
    { _id: "decor_2", productTittle: "LED Curtain Lights", title: "LED Curtain Lights", price: 699, mrp: 999, rating: 4.8, reviews: [{ rating: 5 }, { rating: 4 }], image: "/Diwali/Home_decor.jpg", images: ["/Diwali/Home_decor.jpg"], category: "Home Decor", description: "Decorative LED curtain lights" }
  ]
};

// Flatten all products for easy lookup
const ALL_PRODUCTS = Object.values(COLLECTION_DATA).flat();

function ProductDetails() {
  const { uuid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { cartItems } = useSelector((s) => s.cart);
  const { wishlistItems } = useSelector((s) => s.wishlist);

  const [openAddReviewModal, setOpenAddReviewModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  // ✅ Find product from collection data
  useEffect(() => {
    setIsLoading(true);
    
    console.log("Looking for product ID:", uuid);
    console.log("All available product IDs:", ALL_PRODUCTS.map(p => p._id));
    
    // Find product by _id
    const found = ALL_PRODUCTS.find(p => p._id === uuid);
    
    console.log("Found product:", found);
    setProduct(found || null);
    
    if (found) {
      // Set default variant
      setSelectedVariant({
        variantId: found._id,
        variantImage: found.images || [found.image],
        variantMrp: found.mrp,
        variantSellingPrice: found.price,
        variantDiscount: Math.round(((found.mrp - found.price) / found.mrp) * 100),
        variantColor: "gold",
        variantQuantity: 50,
        variantAvailableStock: 50,
        price: found.price
      });
      
      // Get similar products from same category
      const similar = ALL_PRODUCTS.filter(p => 
        p._id !== found._id && p.category === found.category
      ).slice(0, 4);
      setSimilarProducts(similar);
    }
    
    setIsLoading(false);
  }, [uuid]);

  const getImageUrl = (img) => {
    if (!img) return "/placeholder.png";
    if (img.startsWith("http")) return img;
    if (img.startsWith("/")) return img;
    return img;
  };

  const normalizeSize = (v) =>
    `${v?.variantLength || 0}x${v?.variantBreadth || 0} ${v?.variantDimensionunit || ""}`.trim();

  const findVariant = (color, sizeStr) => {
    return (product?.variants || []).find((v) => {
      const vColor = v?.variantColor || "";
      const vSize = normalizeSize(v);
      return (!color || vColor === color) && (!sizeStr || vSize === sizeStr);
    });
  };

  const variantId = selectedVariant?.variantId || selectedVariant?._id || product?._id;

  const inCart = useMemo(() => {
    if (!selectedVariant || !product) return false;
    return cartItems.some(
      (i) => i.uuid === product._id && i.variantId === variantId,
    );
  }, [cartItems, product, selectedVariant, variantId]);

  const qtyInCart =
    cartItems.find((i) => i.uuid === product?._id && i.variantId === variantId)
      ?.quantity || 0;

  const colorOptions = [
    ...new Set(
      (product?.variants || []).map((v) => v?.variantColor).filter(Boolean),
    ),
  ];

  const sizeOptions = [
    ...new Set(
      (product?.variants || [])
        .map((v) => normalizeSize(v))
        .filter(Boolean),
    ),
  ];

  const onSelectColor = (color) => {
    setSelectedColor(color);
    const match = findVariant(color, selectedSize) || findVariant(color, null);
    if (match) {
      setSelectedVariant(match);
      setMainImageIndex(0);
      thumbsSwiper?.slideTo?.(0);
    }
  };

  const onSelectSize = (sizeStr) => {
    setSelectedSize(sizeStr);
    const match = findVariant(selectedColor, sizeStr) || findVariant(null, sizeStr);
    if (match) {
      setSelectedVariant(match);
      setMainImageIndex(0);
      thumbsSwiper?.slideTo?.(0);
    }
  };

  const handleOpenAddReview = () => {
    setSelectedReview(null);
    setOpenAddReviewModal(true);
  };

  const handleCloseReview = () => {
    setOpenAddReviewModal(false);
    setSelectedReview(null);
  };

  const images = selectedVariant?.variantImage?.length
    ? selectedVariant.variantImage
    : product?.images || [product?.image].filter(Boolean);

  const mrp = Number(selectedVariant?.variantMrp || product?.mrp || 0);
  const sp = Number(selectedVariant?.variantSellingPrice || product?.price || 0);
  const discount = Number(selectedVariant?.variantDiscount || 
    (mrp > 0 && sp > 0 ? Math.round(((mrp - sp) / mrp) * 100) : 0));

  const effectivePrice = sp > 0 ? sp : discount > 0 ? Math.round(mrp * (1 - discount / 100)) : mrp;
  const stock = Number(selectedVariant?.variantAvailableStock || selectedVariant?.variantQuantity || 50);
  const outOfStock = stock <= 0;

  if (isLoading) {
    return (
      <>
        <Navbar />
        <EmptyState heading="Loading..." description="Fetching product..." />
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <Breadcrumbs title={"Not Found"} />
        <EmptyState
          heading="Product Not Found"
          description={`The product you're looking for may have been removed.`}
          icon={PackageOpen}
          ctaLabel="Go Home"
          ctaLink={"/"}
        />
        <Footer />
      </>
    );
  }

  const avgRating = product?.reviews?.length > 0
    ? product.reviews.reduce((sum, review) => sum + (review.rating || 0), 0) / product.reviews.length
    : product?.rating || 0;

  const handleBuyNow = (product) => {
    const payload = {
      uuid: product._id,
      variantId: variantId,
      title: product.title,
      basePrice: mrp,
      effectivePrice: effectivePrice,
      discountPercent: discount,
      image: images?.[0] || "/placeholder.png",
      quantity: 1
    };
    dispatch(buyNow(payload));
    navigate("/checkout/payment");
  };

  const handleAddToCartBtn = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addToCart({
        uuid: product._id,
        variantId: variantId,
        title: product.title,
        basePrice: mrp,
        effectivePrice: effectivePrice,
        discountPercent: discount,
        stockQuantity: stock,
        image: images?.[0] || "/placeholder.png",
        deliverBy: "3-5 days",
        selectedOptions: {
          color: selectedVariant?.variantColor || "gold",
          type: "Standard",
          dimension: "Medium",
        },
      }));
      setIsLoading(false);
    }, 200);
  };

  const productTitle = product.productTittle || product.title || "Product";

  return (
    <>
      <Navbar />
      <Breadcrumbs category={product.category} title={productTitle} />
      <section className="lg:px-20 md:px-[60px] px-4 py-6">
        <AddReviewsModel
          open={openAddReviewModal}
          review={selectedReview}
          product={{
            uuid: product?._id,
            title: productTitle,
            selectedVariant,
            image: getImageUrl(images?.[0]),
          }}
          onClose={handleCloseReview}
          onSave={(newReviewOrUpdated) => {
            setProduct((prev) => ({
              ...prev,
              reviews: selectedReview
                ? prev.reviews.map((r) => (r._id === newReviewOrUpdated._id ? newReviewOrUpdated : r))
                : [newReviewOrUpdated, ...(prev.reviews || [])],
            }));
            handleCloseReview();
          }}
        />
        
        <div className="flex lg:flex-row flex-col gap-8 items-start max-lg:items-center">
          {/* Left Section - Images */}
          <div className="lg:sticky top-20 flex md:gap-8 gap-4 max-md:flex-col-reverse max-lg:w-full">
            <div className="flex flex-col max-md:flex-row md:gap-4 max-md:justify-between rounded-lg">
              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView="auto"
                watchSlidesProgress
                direction="vertical"
                breakpoints={{
                  0: { direction: "horizontal", slidesPerView: 4 },
                  768: { direction: "vertical" },
                }}
                className="!w-full !h-auto md:!h-[460px]"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx} className="!w-auto !h-auto">
                    <div
                      className={`relative w-20 h-20 cursor-pointer transform transition duration-300 flex items-center justify-center ${
                        mainImageIndex === idx
                          ? "border-2 border-[#977c2d] shadow-md rounded-md"
                          : "border-2 border-transparent hover:border-gray-200 rounded-md"
                      }`}
                      onClick={() => {
                        setMainImageIndex(idx);
                        thumbsSwiper?.slideTo?.(idx);
                      }}
                    >
                      <div className="w-full h-full overflow-hidden rounded-md">
                        <img
                          src={getImageUrl(img)}
                          alt={`${productTitle} ${idx}`}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      {mainImageIndex === idx && (
                        <div className="absolute inset-0 bg-[#D49A06]/10 pointer-events-none transition-opacity duration-300 rounded-md" />
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="relative">
              <Swiper
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                spaceBetween={10}
                loop={false}
                onSlideChange={(swiper) => setMainImageIndex(swiper.activeIndex)}
                initialSlide={mainImageIndex}
                className="xl:min-w-[600px] xl:h-[600px] md:!w-[500px] w-full"
              >
                {images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={getImageUrl(img)} alt={`${productTitle} ${idx}`} className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="absolute bg-white shadow-md md:shadow-lg md:bg-white active:scale-110 transition-all ease-in-out duration-300 md:p-2 p-2 rounded-full text-xs top-1 right-1 z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  const isInWishlist = wishlistItems.some(
                    (i) => i.uuid === product._id && i.variantId === variantId,
                  );
                  if (isInWishlist) {
                    dispatch(removeFromWishlist({ uuid: product._id, variantId }));
                  } else {
                    dispatch(addToWishlist({
                      uuid: product._id,
                      variantId,
                      title: productTitle,
                      basePrice: sp || mrp,
                      discountPercent: discount,
                      image: images?.[0],
                      deliverBy: "3-5 days",
                      selectedOptions: {
                        color: selectedVariant?.variantColor || "gold",
                        type: "Standard",
                        dimension: "Medium",
                      },
                    }));
                  }
                }}
              >
                <Heart
                  className="w-8 h-8 p-1 cursor-pointer"
                  fill={wishlistItems.some((i) => i.uuid === product._id && i.variantId === variantId) ? "red" : "white"}
                  stroke={wishlistItems.some((i) => i.uuid === product._id && i.variantId === variantId) ? "red" : "black"}
                  strokeWidth={1}
                />
              </button>
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="w-full">
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium md:font-semibold text-gray-900 py-2 leading-7">
              {productTitle}
            </h1>

            <div className="border-gray-200 pb-2 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-semibold text-gray-900">{avgRating.toFixed(1)}</span>
                <span className="text-gray-500 text-sm">/5</span>
              </div>
              <div className="flex flex-col gap-1">
                <Ratings size={20} avgRating={avgRating} />
                <span className="text-sm text-gray-500">
                  Based on {product?.reviews?.length || 0} reviews
                </span>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <button
                className="text-sm font-medium text-[#1C3753] hover:text-[#1C3753] transition-colors underline"
                onClick={() => document.getElementById("reviews-section")?.scrollIntoView({ behavior: "smooth" })}
              >
                See all reviews
              </button>
            </div>

            {/* Price */}
            <div className="py-2 border-b">
              <div className="text-neural-700 font-medium">
                <span className="mr-2 text-[28px]">₹{formatPrice(effectivePrice)}</span>
                {mrp > effectivePrice && (
                  <span className="line-through text-[#787878] font-normal text-[16px]">₹{formatPrice(mrp)}</span>
                )}
                {discount > 0 && (
                  <span className="ml-2 text-[#168408] text-sm">{Math.round(discount)}% Off</span>
                )}
              </div>
              <span className="text-[#686868] text-xs">inclusive of all taxes</span>
            </div>

            {/* Add to Cart & Buy Now */}
            <div className="flex gap-3 py-4 border-b">
              {outOfStock ? (
                <button disabled className="px-6 py-2 bg-gray-300 text-gray-600 rounded-full cursor-not-allowed">
                  Out of Stock
                </button>
              ) : inCart ? (
                <div className="flex items-center gap-3 px-4 border-[#1C3753] ring-1 ring-[#1C3753]/50 shadow-md p-1 rounded-md">
                  <button onClick={() => dispatch(decreaseQty({ uuid: product._id, variantId }))} className="w-6 h-6 flex items-center justify-center">
                    {qtyInCart === 1 ? <Trash2 size={16} /> : <Minus size={16} />}
                  </button>
                  <span className="w-6 text-center">{qtyInCart}</span>
                  <button onClick={() => dispatch(increaseQty({ uuid: product._id, variantId }))} className="w-6 h-6 flex items-center justify-center">
                    <Plus size={16} />
                  </button>
                </div>
              ) : (
                <button
                  onClick={handleAddToCartBtn}
                  disabled={isLoading}
                  className="px-6 py-2 bg-white hover:bg-[#1C3753] hover:text-white transform transition-all duration-200 hover:scale-105 text-black border border-[#1C3753] rounded-md"
                >
                  {isLoading ? "Adding..." : "Add to Cart"}
                </button>
              )}
              <button
                className="px-6 py-2 bg-[#1C3753] text-white hover:bg-[#1C3753] hover:text-white transform transition-all duration-200 hover:scale-105 border border-[#1C3753] rounded-md"
                onClick={() => handleBuyNow(product)}
                disabled={outOfStock || isLoading}
              >
                Buy now
              </button>
            </div>

            {/* Description */}
            <div className="py-4">
              <h3 className="font-medium">Product Description</h3>
              <p className="text-[#6C6B6B] mt-2">{product.description || "No description available."}</p>
            </div>

            {/* Reviews Section */}
            <div className="py-4" id="reviews-section">
              <h3 className="text-lg">Rating & Reviews</h3>
              <div className="mt-2">
                <Reviews onAddReview={handleOpenAddReview} reviews={product?.reviews} avgRating={avgRating} />
                <CustomerReview reviews={product?.reviews} />
              </div>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-8">
            <h2 className="py-2">Similar Products</h2>
            <Card cardData={similarProducts} />
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default ProductDetails;