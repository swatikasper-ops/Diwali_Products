import products from "../data/products.json";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Home,
  HelpCircle,
  LayoutDashboard,
  LogOut,
  LogIn,
  Sparkles,
  Truck,
  MapPin
} from "lucide-react";
import { Link, useNavigate, useSearchParams, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import users from "../data/user";
import Modal from "./Modal";
import { logout } from "../redux/cart/userSlice";
import MainLog from "../assets/IconsUsed/HomeMainLogo.png";
import axiosInstance from "../api/axiosInstance";

function Navbar() {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [showChoice, setShowChoice] = useState(
    user?.role === "admin" ? true : false,
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [subDropdown, setSubDropdown] = useState(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const query = searchParams.get("q") || "";
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalItems = useSelector((state) => state.cart.totalItems);
  const totalWishlistItems = useSelector(
    (state) => state?.wishlist?.totalItems,
  );
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [shopCategories, setShopCategories] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [userLocation, setUserLocation] = useState("Detecting...");
  const dropdownRef = useRef();
  const location = useLocation();

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axiosInstance.get("/products/categories");
        setShopCategories(res.data.categories || []);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // GPS Location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;
          try {
            const res = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
            );
            const data = await res.json();
            setUserLocation(
              data?.address?.city ||
              data?.address?.town ||
              data?.address?.state ||
              "Your Area"
            );
          } catch {
            setUserLocation("Your Area");
          }
        },
        () => setUserLocation("Your Area")
      );
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  // Disable background scroll when mobile nav is open
  useEffect(() => {
    if (dropdown || isProfileOpen || (isOpen && window.innerWidth < 1024)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [dropdown, isOpen, isProfileOpen]);

  // Debounce effect
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(query);
    }, 300);
    return () => clearTimeout(handler);
  }, [query]);

  // Filter results
  const filteredResults = products
    .filter((item) =>
      item.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    )
    .slice(0, 5);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full bg-[#1C3753] text-white text-[11px] py-2 px-4 md:px-20 z-[70] flex justify-between">
        <span className="flex items-center gap-1.5">
          <Truck size={12} /> Free Shipping above ₹999
        </span>
        <div className="hidden md:flex gap-6">
          <Link to="/track-order" className="hover:text-amber-300 transition">Track Order</Link>
          <Link to="/faqs" className="flex items-center gap-1 hover:text-amber-300 transition">
            <HelpCircle size={12} /> Help
          </Link>
        </div>
      </div>

      {/* Fixed Navbar */}
      <div
        ref={dropdownRef}
        className={`fixed top-8 left-0 w-full h-20 z-50 px-4 md:px-16 lg:px-20 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div className="h-full flex justify-between items-center">
          {/* Left Section */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Mobile menu button */}
            <div
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
              onClick={() => {
                setIsMobileMenuOpen(true);
                setIsProfileOpen(false);
              }}
            >
              <Menu size={24} className="text-gray-700" />
            </div>

            {/* Logo */}
            <Link to="/home" className="flex items-center">
              <h1 className="text-xl font-bold tracking-wide">
                Diwali<span className="text-amber-600">Gifts</span>
              </h1>
            </Link>

            {/* Location */}
            <div className="hidden md:flex flex-col text-[11px] leading-tight cursor-pointer group">
              <span className="text-gray-400">Deliver to</span>
              <span className="font-semibold text-[#1C3753] flex items-center gap-1 group-hover:text-amber-600 transition">
                <MapPin size={14} className="text-amber-500" />
                {userLocation}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-8">
            <Link
              to="/home"
              className={`relative group text-gray-700 hover:text-[#1C3753] transition-colors flex items-center gap-1 py-2 ${
                location.pathname === "/home" ? "text-[#1C3753]" : ""
              }`}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Shop Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 text-gray-700 hover:text-[#1C3753] transition-colors py-2 h-16"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                Shop
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-200 ${
                    dropdown ? "rotate-180 text-[#1C3753]" : ""
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-amber-500 transition-all duration-300 ${
                    dropdown ? "w-full" : "w-0"
                  }`}
                ></span>
              </button>

              {/* Backdrop */}
              <div
                onMouseEnter={() => setDropdown(false)}
                className={`fixed top-16 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-sm transition-all duration-300 z-40 ${
                  dropdown ? "visible opacity-100" : "invisible opacity-0"
                }`}
              ></div>

              {/* Full-width Dropdown */}
              <div
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
                className={`fixed top-16 left-0 w-full bg-white backdrop-blur-md shadow-xl border-t border-gray-200 transition-all duration-300 z-50 ${
                  dropdown ? "visible opacity-100" : "invisible opacity-0"
                }`}
              >
                <div className="max-w-7xl mx-auto px-10 py-10 grid xl:grid-cols-6 grid-cols-5 gap-8">
                  {shopCategories.map((cat) => (
                    <div key={cat.name}>
                      <h3
                        className="font-semibold cursor-pointer hover:text-amber-600"
                        onClick={() =>
                          navigate(`/products/${encodeURIComponent(cat.name)}`)
                        }
                      >
                        {cat.name}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {(cat.subcategories || [])
                          .filter((s) => s && s.toLowerCase() !== "all")
                          .map((sub) => (
                            <li key={sub}>
                              <button
                                className="text-[#686868] hover:text-[#1C3753] text-sm"
                                onClick={() =>
                                  navigate(
                                    `/products/${encodeURIComponent(cat.name)}/${encodeURIComponent(sub)}`,
                                  )
                                }
                              >
                                {sub}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/offers"
              className="relative group text-orange-500 flex items-center gap-1 py-2"
            >
              <Sparkles size={14} /> Offers
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Desktop Search */}
            <div className="relative hidden xl:flex items-center bg-gray-100 px-4 py-2 rounded-full w-80 hover:shadow-md transition">
              <Search size={16} className="text-gray-500" />
              <input
                type="text"
                placeholder={`Search in ${userLocation}...`}
                value={query}
                onChange={(e) => setSearchParams({ q: e.target.value })}
                onFocus={() => setIsOpen(true)}
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>

            {/* Desktop Dropdown Results */}
            <div className="hidden xl:block">
              {isOpen && debouncedSearch && (
                <div className="absolute top-full right-0 w-96 bg-white border border-gray-200 shadow-md mt-2 z-50 rounded-lg">
                  {filteredResults.length > 0 ? (
                    <ul className="divide-y divide-gray-100">
                      {filteredResults.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => {
                            setIsOpen(false);
                            setSearchParams({}, { replace: true });
                            setTimeout(() => {
                              navigate(
                                `/products/${encodeURIComponent(item.category)}`,
                              );
                            }, 0);
                          }}
                        >
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-12 h-12 object-cover rounded border"
                          />
                          <div>
                            <p className="text-sm font-medium">{item.title}</p>
                            <p className="text-xs text-amber-600">
                              in {item.category || "Uncategorized"}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="p-3 text-sm text-gray-500">No results found.</p>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Search Icon */}
            <button
              className="xl:hidden p-2 rounded-lg hover:bg-amber-50 transition-colors"
              onClick={() => setIsOpen(true)}
            >
              <Search size={20} className="text-gray-600" />
            </button>

            {/* Admin Dashboard */}
            {showChoice && (
              <button
                onClick={() => navigate("/admin/dashboard")}
                className="p-2 rounded-lg group hover:bg-amber-50 transition-colors"
              >
                <LayoutDashboard
                  size={20}
                  className="text-gray-600 group-hover:text-[#1C3753]"
                />
              </button>
            )}

            {/* Wishlist */}
            <Link
              to="/accounts/wishlist"
              className="relative p-2 rounded-lg group hover:bg-amber-50 transition-colors"
            >
              <Heart
                size={20}
                className="text-gray-600 group-hover:text-[#1C3753]"
              />
              {totalWishlistItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalWishlistItems}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              to="/bag"
              className="relative p-2 group rounded-lg hover:bg-amber-50 transition-colors"
            >
              <ShoppingCart
                size={20}
                className="text-gray-600 group-hover:text-[#1C3753]"
              />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* User dropdown */}
            <div className="relative group">
              <button
                className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-50 transition-colors"
                onClick={() => {
                  setIsProfileOpen(!isProfileOpen);
                  setDropdown(false);
                }}
              >
                {isAuthenticated ? user?.name?.[0]?.toUpperCase() : <UserRound size={18} />}
              </button>

              <div className="absolute right-0 top-[110%] w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
                <UserProfile />
                <div className="pt-2 border-t border-gray-200 bg-white rounded-b-lg">
                  {isAuthenticated ? (
                    <button
                      onClick={() => setShowLogoutModal(true)}
                      className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 transition-colors rounded-b-lg"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      className="flex items-center gap-3 w-full px-4 py-3 text-amber-600 hover:bg-amber-50 transition-colors rounded-b-lg"
                    >
                      <LogIn size={16} /> Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-28"></div>

      {/* Mobile Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4 xl:hidden flex flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b pb-2 mb-4">
            <h2 className="text-lg font-semibold">Search</h2>
            <button
              onClick={() => {
                setIsOpen(false);
                setSearchParams({ q: "" });
              }}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex items-center border rounded-md mb-4">
            <Search size={18} className="mx-2 text-gray-500" />
            <input
              type="text"
              autoFocus
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setSearchParams({ q: e.target.value })}
              className="flex-1 py-2 px-2 outline-none text-sm"
            />
          </div>

          <div className="flex-1 overflow-y-auto">
            {debouncedSearch ? (
              filteredResults.length > 0 ? (
                <ul className="divide-y divide-gray-100">
                  {filteredResults.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 p-3 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        setSearchParams({}, { replace: true });
                        navigate(`/products/${encodeURIComponent(item.category)}`);
                      }}
                    >
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded border"
                      />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-amber-600">
                          in {item.category || "Uncategorized"}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-sm">No results found.</p>
              )
            ) : (
              <p className="text-gray-400 text-sm italic">Type to search...</p>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 bottom-0 bg-white shadow-lg z-50 flex flex-col overflow-y-auto w-3/4 md:w-1/2 lg:hidden"
            >
              <div className="p-5 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  Diwali<span className="text-amber-600">Gifts</span>
                </h2>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              <div className="px-6 py-4 flex-1">
                <Link
                  to="/home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-gray-800 font-medium hover:text-amber-600 transition-colors"
                >
                  Home
                </Link>

                <div className="my-2 border-t border-gray-200"></div>

                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider py-2">
                  Shop Categories
                </h3>

                {shopCategories.map((item, index) => (
                  <div key={item.name || index} className="py-2">
                    <div
                      className="flex items-center justify-between py-3 px-3 text-gray-700 font-medium rounded-lg hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
                      onClick={() =>
                        setSubDropdown(subDropdown === index ? null : index)
                      }
                    >
                      <span>{item.name}</span>
                      {item.subcategories?.length > 0 && (
                        <ChevronDown
                          size={16}
                          className={`text-gray-400 transition-transform duration-300 ${
                            subDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>

                    <div
                      className={`pl-6 flex flex-col gap-1 overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                        subDropdown === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div
                        className="py-2 px-3 text-sm rounded-md text-gray-600 hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
                        onClick={() => {
                          navigate(`/products/${encodeURIComponent(item.name)}`);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        All
                      </div>
                      {(item.subcategories || [])
                        .filter((s) => s && s.toLowerCase() !== "all")
                        .map((sub) => (
                          <div
                            key={sub}
                            className="py-2 px-3 text-sm text-gray-600 rounded-md hover:bg-amber-50 hover:text-amber-600 cursor-pointer"
                            onClick={() => {
                              navigate(
                                `/products/${encodeURIComponent(item.name)}/${encodeURIComponent(sub)}`,
                              );
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {sub}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}

                <div className="my-2 border-t border-gray-200"></div>

                <Link
                  to="/offers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-orange-500 font-medium"
                >
                  <Sparkles size={16} /> Offers
                </Link>

                <Link
                  to="/faqs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 py-3 text-gray-800 font-medium hover:text-amber-600 transition-colors"
                >
                  <HelpCircle size={16} /> FAQs
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Profile Drawer for Mobile */}
      <AnimatePresence>
        {isProfileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed lg:hidden inset-0 bg-black/50 z-40"
              onClick={() => setIsProfileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "-100%" }}
              className="fixed top-0 bottom-0 left-0 bg-white shadow-lg z-50 flex flex-col overflow-y-auto w-3/4 md:w-1/2 lg:hidden"
            >
              <div className="p-5 border-b flex justify-between items-center">
                <h3 className="font-semibold">My Account</h3>
                <button onClick={() => setIsProfileOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <UserProfile setIsProfileOpen={setIsProfileOpen} />
              <div className="pt-4 border-t border-gray-200 bg-white">
                {isAuthenticated ? (
                  <div
                    className="flex items-center gap-4 px-7 pb-6 rounded-lg cursor-pointer transition-colors duration-200 group"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-red-100 transition-colors duration-200">
                      <LogOut className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-gray-800 font-medium text-sm">
                        Log Out
                      </h2>
                    </div>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center gap-4 px-7 pb-6 rounded-lg cursor-pointer transition-colors duration-200 group"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-amber-100 transition-colors duration-200">
                      <LogIn className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-amber-600 font-medium text-sm">
                        Log In
                      </h2>
                    </div>
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Logout Modal */}
      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={() => {
          handleLogout();
          setShowLogoutModal(false);
        }}
        title="Log Out"
        description="Are you sure you want to log out?"
        confirmText="Yes, Logout"
        cancelText="Cancel"
      />
    </>
  );
}

export default Navbar;