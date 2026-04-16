import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router";

function Footer() {
  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/kasperinfo/",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/kasperinfotech",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/kasperinfotech",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@kasperinfotech",
    },
  ];

  return (
    <section className="relative overflow-hidden px-4 md:px-12 lg:px-20 py-12 text-white">

  
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764]"></div>

   
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-orange-500 opacity-20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-400 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">

          {/* Logo + About */}
          <div className="flex flex-col gap-3">
            <Link to="/">
              <h1 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                Diwali Gift Store
              </h1>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed">
              Celebrate the festival of lights with premium gifts, beautiful décor,
              and memorable experiences for your loved ones.
            </p>

            <div>
              <p className="font-medium text-yellow-400">Contact</p>
              <span className="text-sm text-gray-300">(+91) 3523623254</span>
              <p className="text-xs text-gray-400">10 AM – 6 PM (All Days)</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="font-semibold mb-3 text-yellow-400">About</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link to="/aboutUs" className="hover:text-white">About Us</Link></li>
              <li><Link to="/shippingpolicy" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returnrefundpolicy" className="hover:text-white">Return Policy</Link></li>
              <li><Link to="/policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h2 className="font-semibold mb-3 text-yellow-400">Shop</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link to="/products" className="hover:text-white">All Products</Link></li>
              <li><Link to="/products/top-products" className="hover:text-white">Featured</Link></li>
              <li><Link to="/products/Festive" className="hover:text-white">Festive Gifts</Link></li>
              <li className="hover:text-white cursor-pointer">Best Sellers</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h2 className="font-semibold mb-3 text-yellow-400">Account</h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link to="/accounts/details" className="hover:text-white">My Account</Link></li>
              <li><Link to="/accounts/order-history" className="hover:text-white">Orders</Link></li>
              <li><Link to="/accounts/wishlist" className="hover:text-white">Wishlist</Link></li>
              <li><Link to="/accounts/addresses" className="hover:text-white">Addresses</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h2 className="font-semibold mb-3 text-yellow-400">Connect</h2>

            <div className="flex gap-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-gradient-to-r hover:from-orange-400 hover:to-yellow-400 hover:text-black transition duration-300 cursor-pointer"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            <p className="text-xs text-gray-400 mt-3">
              Follow us for festive offers & updates 
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 Kasper Infotech. All rights reserved.</p>

          <Link to="/termsconditions" className="hover:text-white">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;