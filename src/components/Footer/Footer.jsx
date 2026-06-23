import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-orange-500">New</span> Launch
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Build your future with professional internship programs in
              Web Development, Python, Java, React JS, PHP, and more.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://wa.me/917263098279"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-green-500 hover:scale-110 duration-300 flex items-center justify-center"
              >
                <FaWhatsapp size={22} />
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110 duration-300 flex items-center justify-center"
              >
                <FaInstagram size={22} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-orange-500">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">
              {[
                "Home",
                "About",
                "Courses",
                "Internship",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="/"
                    className="hover:text-orange-500 flex items-center gap-2 duration-300"
                  >
                    <FaArrowRight size={12} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Internship */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-orange-500">
              Internship
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React JS</li>
              <li>PHP & Laravel</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-orange-500">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:devendra@gmail.com"
                    className="hover:text-orange-500"
                  >
                    devendra@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+917263098279"
                    className="hover:text-orange-500"
                  >
                    +91 72630 98279
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <FaWhatsapp />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/917263098279"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-green-400"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">

          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-orange-500 font-semibold">
              New Launch
            </span>{" "}
            | All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ by <span className="text-orange-500">New Launch</span>
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;