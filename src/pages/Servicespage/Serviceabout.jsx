import React from "react";
import {
  FiCode,
  FiSmartphone,
  FiGlobe,
  FiDatabase,
  FiMonitor,
  FiPenTool,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

const services = [
  {
    icon: <FiGlobe />,
    title: "Website Development",
    desc: "Modern responsive websites using React, Tailwind and Bootstrap.",
  },
  {
    icon: <FiSmartphone />,
    title: "software Development",
    desc: "Android & iOS applications with beautiful UI and performance.",
  },

  {
    icon: <FiPenTool />,
    title: "frontend-backend Development",
    desc: "Logo, Banner, Social Media & Branding Design.",
  },
];

const process = [
  "Requirement Analysis",
  "UI/UX Design",
  "Development",
  "Testing",
  "Deployment",
  "Support",
];

const ServicesPage = () => {
  return (
    <div className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-black via-gray-900 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            We build modern websites, mobile apps and business software
            that help companies grow faster.
          </p>

        </div>
      </section>

      {/* Services */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((item, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl shadow-lg hover:shadow-2xl duration-500 border hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 group-hover:rotate-6 duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>

                <button className="mt-6 text-orange-500 flex items-center gap-2 font-semibold">
                  Learn More
                  <FiArrowRight />
                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Process */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-center text-4xl font-bold mb-14">
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">

            {process.map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow text-center"
              >

                <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="font-semibold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Why Choose Us?
              </h2>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <FiCheckCircle className="text-orange-500 mt-1 text-xl" />
                  <p>Experienced Development Team</p>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-orange-500 mt-1 text-xl" />
                  <p>Affordable Pricing</p>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-orange-500 mt-1 text-xl" />
                  <p>100% Responsive Design</p>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-orange-500 mt-1 text-xl" />
                  <p>Fast Delivery</p>
                </div>

                <div className="flex gap-3">
                  <FiCheckCircle className="text-orange-500 mt-1 text-xl" />
                  <p>Lifetime Support</p>
                </div>

              </div>

            </div>

            <div>

              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt=""
                className="rounded-3xl shadow-xl"
              />

            </div>

          </div>

        </div>

      </section>

     

      {/* CTA */}

      <section className="bg-orange-500 text-white py-20">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>

          <p className="mb-8">
            Let's build something amazing together.
          </p>

          <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-black hover:text-white duration-300">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
};

export default ServicesPage;