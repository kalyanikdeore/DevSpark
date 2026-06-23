import React from "react";
import {
  FiCode,
  FiBookOpen,
  FiAward,
  FiBriefcase,
  FiUsers,
} from "react-icons/fi";

const Internship = () => {
  const technologies = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React JS",
    "PHP",
    "Python",
    "Java",
  ];

  const benefits = [
    "3 Months Internship",
    "Live Projects",
    "Industry Mentorship",
    "Internship Certificate",
    "Resume Building",
    "Interview Preparation",
    "Placement Assistance",
    "Flexible Learning",
  ];

  return (
    <section className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <span className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold">
            🚀 Internship Program
          </span>

          <h2 className="text-5xl font-extrabold text-white mt-6 leading-tight">
            Launch Your Career with Our
            <span className="text-orange-500">
              {" "}3-Month Internship
            </span>
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Gain practical experience by working on live projects under expert
            guidance. Learn today's most in-demand technologies and build your
            professional portfolio.
          </p>

          {/* Technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {technologies.map((item, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl py-4 text-center font-semibold hover:bg-orange-500 hover:text-white transition duration-300 shadow-lg"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="mt-12 grid sm:grid-cols-2 gap-5">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white"
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                  ✓
                </div>

                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Right Side */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl">

          <h3 className="text-3xl font-bold text-gray-800">
            Register Now
          </h3>

          <p className="text-gray-500 mt-2">
            Fill in your details and start your journey.
          </p>

          <form className="mt-8 space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="College Name"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
            />

            <div className="grid grid-cols-2 gap-5">

              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Qualification"
                className="border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
              />

            </div>

            <select className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500">
              <option>Select Technology</option>
              <option>HTML & CSS</option>
              <option>Bootstrap</option>
              <option>JavaScript</option>
              <option>React JS</option>
              <option>PHP</option>
              <option>Python</option>
              <option>Java</option>
            </select>

            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-orange-500"
            ></textarea>

            <button
              className="w-full bg-orange-500 hover:bg-black text-white py-4 rounded-xl font-bold text-lg transition duration-300"
            >
              Apply Now →
            </button>

          </form>

          {/* Bottom Info */}
          <div className="grid grid-cols-3 gap-4 mt-10 text-center">

            <div>
              <FiBookOpen className="text-orange-500 text-3xl mx-auto" />
              <p className="text-sm mt-2 font-medium">Live Projects</p>
            </div>

            <div>
              <FiAward className="text-orange-500 text-3xl mx-auto" />
              <p className="text-sm mt-2 font-medium">Certificate</p>
            </div>

            <div>
              <FiBriefcase className="text-orange-500 text-3xl mx-auto" />
              <p className="text-sm mt-2 font-medium">Placement</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Internship;