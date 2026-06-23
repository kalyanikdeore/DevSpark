import React from "react";
import {
  FiArrowLeft,
  FiAward,
  FiCheckCircle,
  FiUsers,
  FiGift,
} from "react-icons/fi";

const InternshipHero = () => {
  return (
    <section className=" min-h-screen flex items-center py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}

          <div>

           

            <div className="inline-flex items-center gap-2 bg-orange-500 rounded-full px-5 py-2 mb-8">

              <FiAward className="text-white" />

              <span className="text-white font-medium">
                Internship & Career Training Specialists
              </span>

            </div>

            <h1 className=" font-black text-5xl lg:text-3xl leading-tight">

               <span className="block text-orange-500"> Industry-Ready Internships &</span>
              Interview Preparation
            </h1>

            <p className="text-black text-lg mt-8 leading-8 max-w-xl">
              Comprehensive training programs designed to make you
              job-ready. Master in-demand skills, work on live projects,
              and crack your dream interviews with our expert guidance.
            </p>

           <div className="flex flex-wrap gap-5 mt-10">

        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 duration-300">
        Explore Internships
        </button>

        <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-semibold duration-300">
        Interview Preparation
        </button>

        </div>

            <div className="grid grid-cols-2 gap-y-6 mt-12 text-white">

              <div className="flex items-center  text-black gap-3">
                <FiCheckCircle className="text-green-400 text-xl" />
                Hands-on Projects
              </div>

              <div className="flex items-center  text-black  gap-3">
                <FiCheckCircle className="text-green-400 text-xl" />
                Mock Interviews
              </div>

              <div className="flex items-center  text-black gap-3">
                <FiCheckCircle className="text-green-400 text-xl" />
                Resume Building
              </div>

              <div className="flex items-center text-black gap-3">
                <FiCheckCircle className="text-green-400 text-xl" />
                Placement Support
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="bg-white rounded-3xl p-8 shadow-2xl">

            <h2 className="text-4xl font-bold text-black-500">
              RICH      <span className="text-orange-500 font-bold"> LEARN HUB</span>
            </h2>

            <p className="text-gray-600 mt-5 leading-7">
              Industry-aligned training programs with 100% interview
              preparation and placement assistance.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-8">

              <div className="bg-gray-100 rounded-2xl text-center py-8">

                <h3 className="text-4xl font-bold text-black">
                  15+
                </h3>

                <p className="text-gray-500 mt-2">
                  Live Projects
                </p>

              </div>

              <div className="bg-gray-100 rounded-2xl text-center py-8">

                <h3 className="text-4xl font-bold text-black">
                  50+
                </h3>

                <p className="text-gray-500 mt-2">
                  Expert Mentors
                </p>

              </div>

            </div>

            <div className="bg-orange-500 rounded-2xl p-8 mt-8 text-white">

              <div className="flex justify-between">

                <div>

                  <h3 className="text-2xl font-bold">
                    Interview Ready Program
                  </h3>

                  <p className="mt-2">
                    Comprehensive Preparation
                  </p>

                </div>

                <FiGift size={28} />

              </div>

              <div className="flex items-center gap-3 mt-8">

                <FiUsers />

                <span>
                  1:1 Mock Interviews with Industry Experts
                </span>

              </div>

            </div>

            <div className="space-y-5 mt-8">

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-green-500 text-xl" />

                Technical Interview Preparation

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-green-500 text-xl" />

                HR Interview Training

              </div>

              <div className="flex items-center gap-3">

                <FiCheckCircle className="text-green-500 text-xl" />

                Group Discussion Practice

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InternshipHero;


