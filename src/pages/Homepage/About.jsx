import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiMonitor,
  FiUsers,
  FiAward,
  FiArrowRight,
} from "react-icons/fi";

// import about1 from "../../assets/about1.jpg";
// import about2 from "../../assets/about2.jpg";
// import about3 from "../../assets/about3.jpg";

export default function About() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
              alt=""
              className="rounded-3xl shadow-2xl w-[80%]"
            />

            <img
              src="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
              alt=""
              className="absolute right-0 top-10 w-60 rounded-3xl border-8 border-white shadow-2xl"
            />

            <img
              src="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
              alt=""
              className="absolute bottom-0 left-32 w-52 rounded-3xl border-8 border-white shadow-2xl"
            />

          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="text-orange-500 font-semibold tracking-widest uppercase">
              About Us
            </span>

            <h2 className="text-2xl font-bold mt-1 leading-tight text-gray-900">
            creating Innovative Software For Growth
           
            </h2>

            <p className="text-gray-600 mt-3 leading-8">
              We specialize in Website Development, CRM Software,
              Mobile Applications, UI/UX Design and Custom Software
              Solutions. Our mission is to transform ideas into
              innovative digital products while providing students
              with real-world Internship opportunities and helping
              businesses through professional Freelancing services.
            </p>

            {/* Cards */}

           <div className="grid grid-cols-2 gap-4 mt-6">

  <div className="bg-orange-50 p-4 rounded-xl hover:shadow-lg duration-300">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white text-sm">
        <FiCode />
      </div>
      <h4 className="font-semibold text-gray-800">
        Software Development
      </h4>
    </div>
  </div>

  <div className="bg-blue-50 p-4 rounded-xl hover:shadow-lg duration-300">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm">
        <FiMonitor />
      </div>
      <h4 className="font-semibold text-gray-800">
        CRM Solutions
      </h4>
    </div>
  </div>

  <div className="bg-green-50 p-4 rounded-xl hover:shadow-lg duration-300">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center text-white text-sm">
        <FiUsers />
      </div>
      <h4 className="font-semibold text-gray-800">
        Internship Program
      </h4>
    </div>
  </div>

  <div className="bg-purple-50 p-4 rounded-xl hover:shadow-lg duration-300">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white text-sm">
        <FiAward />
      </div>
      <h4 className="font-semibold text-gray-800">
        Website Development
      </h4>
    </div>
  </div>

</div>

          
            <button className="mt-10 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full flex items-center gap-3 duration-300 shadow-lg">

              Explore More

              <FiArrowRight />

            </button>

          </motion.div>

        </div>

      </div>
    </section>
  );
}