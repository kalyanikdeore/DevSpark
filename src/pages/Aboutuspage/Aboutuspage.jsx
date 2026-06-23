import React from "react";
import {
  FiCode,
  FiUsers,
  FiAward,
  FiTarget,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

const AboutPage = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            About <span className="text-orange-400">Our Company</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            We build websites, mobile apps and provide industry-oriented
            internships that help students become job-ready developers.
          </p>

        </div>
      </section>

      {/* About Company */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt=""
                className="rounded-3xl shadow-2xl"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold mb-6">
                Who We Are
              </h2>

              <p className="text-gray-600 leading-8">
                We are a passionate software development company helping
                businesses and students with modern technology solutions.
                Our expert team develops websites, Android applications,
                business software and offers practical internships in
                Web Development, React JS, PHP, Python, Java and more.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500 text-xl" />
                  <p>100% Practical Training</p>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500 text-xl" />
                  <p>Live Projects</p>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500 text-xl" />
                  <p>Experienced Mentors</p>
                </div>

                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-orange-500 text-xl" />
                  <p>Internship Certificate</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Why Choose Us
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 duration-300">

              <FiCode className="text-5xl text-orange-500 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Live Projects
              </h3>

              <p className="text-gray-600">
                Gain real industry experience with practical development.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 duration-300">

              <FiUsers className="text-5xl text-orange-500 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Expert Mentors
              </h3>

              <p className="text-gray-600">
                Learn directly from experienced software developers.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 duration-300">

              <FiAward className="text-5xl text-orange-500 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Certification
              </h3>

              <p className="text-gray-600">
                Receive internship completion certificates.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-8 shadow hover:-translate-y-2 duration-300">

              <FiTarget className="text-5xl text-orange-500 mb-5"/>

              <h3 className="text-xl font-bold mb-3">
                Placement Support
              </h3>

              <p className="text-gray-600">
                Resume building and interview preparation assistance.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Mission Vision */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-orange-500 rounded-3xl p-10 text-white">

              <FiTarget className="text-5xl mb-6"/>

              <h2 className="text-3xl font-bold mb-4">
                Our Mission
              </h2>

              <p>
                To provide quality education, innovative software solutions,
                and practical internship opportunities that prepare students
                for successful careers.
              </p>

            </div>

            <div className="bg-black rounded-3xl p-10 text-white">

              <FiEye className="text-5xl mb-6"/>

              <h2 className="text-3xl font-bold mb-4">
                Our Vision
              </h2>

              <p>
                To become India's trusted software development and internship
                company by delivering excellence and innovation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="bg-orange-500 py-20 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-3">Students</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">120+</h2>
              <p className="mt-3">Projects</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">50+</h2>
              <p className="mt-3">Clients</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">5+</h2>
              <p className="mt-3">Years Experience</p>
            </div>

          </div>

        </div>

      </section>

      {/* Technologies */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies We Teach
          </h2>

          <div className="flex flex-wrap justify-center gap-5">

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React JS",
              "PHP",
              "Laravel",
              "Python",
              "Java",
              "Bootstrap",
              "Tailwind CSS",
              "MySQL",
              "Git",
            ].map((item) => (
              <div
                key={item}
                className="bg-orange-100 text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white duration-300"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-black text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready To Start Your Career?
          </h2>

          <p className="mt-6 text-gray-300">
            Join our internship program and gain real-world experience with
            live projects and expert guidance.
          </p>

          <button className="mt-8 bg-orange-500 hover:bg-orange-600 px-10 py-4 rounded-full font-semibold">
            Apply Internship
          </button>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;