import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiShoppingCart,
} from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { logo, logoc } from "../../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "aboutus" },
    { name: "Services", link: "service" },
    { name: "Internship", link: "internship" },
    { name: "Contact", link: "contact" },
  ];

  const handleCartClick = () => {
    cart.toggleCart();
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Top Fixed Navbar - Fully Responsive */}
      <div className="bg-black text-white fixed w-full z-50 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-14 sm:h-10 text-sm sm:text-base">
            {/* Contact Info */}
            <div className="flex items-center gap-4 flex-wrap max-w-[70%] sm:max-w-full">
              {/* Email - Hidden on mobile, visible on sm and above */}
              <div className="hidden sm:flex items-center gap-2 min-w-max">
                <FiMail className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="truncate max-w-[120px] sm:max-w-none">
                  devendra@gmail.com
                </span>
              </div>

              {/* Phone Number - Always visible */}
              <div className="flex items-center gap-2 min-w-max">
                <FiPhone className="w-4 h-4 sm:w-4 sm:h-4" />
                <span>+91 72630 98279</span>  
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-3">
              <FiFacebook className="hover:text-orange-500 cursor-pointer w-4 h-4 sm:w-4 sm:h-4" />
              <FiInstagram
                className="hover:text-orange-500 cursor-pointer w-4 h-4 sm:w-4 sm:h-4"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/wedding_store_nashik/",
                    "_blank"
                  )
                }
              />
              <FiTwitter className="hover:text-orange-500 cursor-pointer w-4 h-4 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-14 sm:h-10"></div>

      {/* Main Navbar */}
      {/* <nav className="bg-white/90 backdrop-blur-lg shadow-md sticky top-14 sm:top-10 z-40"> */}
      <nav className="bg-white shadow-lg sticky top-14 sm:top-10 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20 md:h-20">
            {/* Logo - Only mobile width increased */}
            <a
              href="/"
              className="flex items-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            > 
<h2 className="text-3xl font-extrabold text-orange-500 tracking-wide">
  New Launch
</h2>             
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-gray-600 font-medium text-sm tracking-wide hover:text-pink-600 transition duration-300 relative after:absolute after:w-0 after:h-[2px] after:bg-pink-600 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Side - Cart & Button */}
            <div className="hidden lg:flex items-center gap-6">
           

              {/* Enquiry Button */}
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:opacity-90 transition-opacity"
              >
                Enquiry Now
              </button>
            </div>

            {/* Mobile Right Side - Cart & Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              {/* Mobile Shopping Cart */}
              <button
                onClick={handleCartClick}
                className="relative p-3 text-gray-600 hover:text-pink-600 transition-colors"
              >
                <FiShoppingCart className="w-6 h-6" />
                {cart.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                    {cart.itemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={handleMenuToggle}
                className="text-gray-800 p-3 hover:text-pink-600 transition-colors"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-200 mt-2 rounded-lg shadow-lg py-4 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 px-4 py-4 text-lg hover:bg-pink-50 hover:text-pink-600 transition-all rounded-md mx-2"
                >
                  {item.name}
                </a>
              ))}
              {/* Mobile Enquiry Button */}
              <div className="px-4 py-3">
                <button
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white px-6 py-3 rounded-full text-base font-semibold shadow-md hover:opacity-90 transition-opacity"
                >
                  Enquiry Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
