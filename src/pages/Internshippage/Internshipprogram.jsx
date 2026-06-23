import React from "react";
import {
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const programs = [
  {
    title: "Full Stack Development - Python",
    desc: "Master Flask/Django, React.js, REST APIs, and Cloud Deployment with 12 weeks of hands-on learning.",
  },
  {
    title: "Full Stack Development - Java",
    desc: "Learn Spring Boot, React.js, Microservices, and CI/CD pipelines with real-world projects.",
  },
  {
    title: "Full Stack Development - Php",
    desc: "Learn Spring Boot, React.js, Microservices, and CI/CD pipelines with real-world projects.",
  },

  {
    title: "Web Development",
    desc: "Become proficient in React.js, Node.js, MongoDB, and Cloud Deployment for scalable web apps.",
  },
  
  {
    title: "AWS Cloud",
    desc: "Master AWS compute, storage, networking, DevOps, serverless architecture and cloud ML services.",
  },
  {
    title: "Android App Development",
    desc: "Comprehensive training in Android app development covering UI/UX, Kotlin and Java programming.",
  },
];

export default function InternshipPrograms() {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-orange-700 uppercase">
            Our Internship Programs
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Choose from 9 industry-aligned programs designed to make you
            job-ready
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {programs.map((item, index) => (

            <div
              key={index}
              className="bg-[#edf2fb] rounded-xl p-7 hover:shadow-2xl duration-300 border border-transparent hover:border-orange-200"
            >

              <h3 className="text-[21px] font-bold text-black-600 leading-snug mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-[15px] leading-7 mb-6">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <FiUsers />
                Limited seats
              </div>

              <div className="flex gap-3">

                <button className="w-1/2 border border-orange-700 text-orange-700 rounded-lg py-2.5 font-semibold hover:bg-orange-700 hover:text-white duration-300">
                  Learn More
                </button>

                <button className="w-1/2 bg-[#fba157] text-white rounded-lg py-2.5 font-semibold flex items-center justify-center gap-2 hover:bg-[#0f316a] duration-300">
                  Apply Now
                  <FiArrowRight size={16} />
                </button>

              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
}