import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBook,
  FiCalendar,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900">
            Contact <span className="text-orange-500">Us</span>
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Have questions? Fill out the form below and our team will contact
            you shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-orange-500 rounded-3xl p-10 text-white flex flex-col justify-center">

            <h2 className="text-4xl font-bold mb-6">
              Let's Build Your Career 🚀
            </h2>

            <p className="mb-10 text-orange-100 leading-8">
              Join our internship and training programs in Web Development,
              React JS, PHP, Python, Java, and more.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiPhone size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p>+91 9876543210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <FiMail size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>info@yourcompany.com</p>
                </div>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="bg-white shadow-2xl rounded-3xl p-10">

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-5">

                <div className="relative">
                  <FiUser className="absolute top-4 left-4 text-orange-500" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                  />
                </div>

                <div className="relative">
                  <FiMail className="absolute top-4 left-4 text-orange-500" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="relative">
                  <FiPhone className="absolute top-4 left-4 text-orange-500" />
                  <input
                    type="tel"
                    placeholder="Contact Number"
                    className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                  />
                </div>

                <div className="relative">
                  <FiPhone className="absolute top-4 left-4 text-orange-500" />
                  <input
                    type="tel"
                    placeholder="Alternate Contact"
                    className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="relative">
                  <FiCalendar className="absolute top-4 left-4 text-orange-500" />
                  <input
                    type="date"
                    className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                  />
                </div>

                <div className="relative">
                  <FiBook className="absolute top-4 left-4 text-orange-500" />
                  <select className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500">
                    <option>Select Education</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Diploma</option>
                    <option>BCA</option>
                    <option>B.Sc</option>
                    <option>B.Tech</option>
                    <option>BE</option>
                    <option>MCA</option>
                    <option>M.Tech</option>
                    <option>Other</option>
                  </select>
                </div>

              </div>

              <div className="relative">
                <FiBook className="absolute top-4 left-4 text-orange-500" />
                <select className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500">
                  <option>Select Course</option>
                  <option>HTML & CSS</option>
                  <option>JavaScript</option>
                  <option>React JS</option>
                  <option>PHP</option>
                  <option>Laravel</option>
                  <option>Python</option>
                  <option>Java</option>
                  <option>MERN Stack</option>
                  <option>Full Stack Development</option>
                </select>
              </div>

              <div className="relative">
                <FiMessageSquare className="absolute top-4 left-4 text-orange-500" />
                <textarea
                  rows="5"
                  placeholder="Write Your Message..."
                  className="w-full border rounded-xl py-3 pl-12 pr-4 outline-none focus:border-orange-500 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-orange-500 hover:bg-black duration-300 text-white py-4 rounded-xl text-lg font-semibold shadow-lg">
                Submit Enquiry →
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}