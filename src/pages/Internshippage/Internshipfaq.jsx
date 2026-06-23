import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Full Stack Development using Python",
    answer:
      "Learn Python, Django, Flask, React.js, REST APIs, MySQL, Git, GitHub, Deployment, and work on live projects with industry mentors.",
  },
  {
    question: "Full Stack Development using Java",
    answer:
      "Master Java, Spring Boot, Hibernate, React.js, REST APIs, MySQL, Microservices, and build enterprise-level applications.",
  },
  {
    question: "Data Science and Its Applications using Python",
    answer:
      "Learn Python, Pandas, NumPy, Machine Learning, Deep Learning, Data Visualization, SQL, and real-world analytics projects.",
  },
  {
    question: "Artificial Intelligence and Automation",
    answer:
      "Build AI models, Chatbots, NLP applications, Automation tools, and Machine Learning projects using modern AI technologies.",
  },
  {
    question: "Web Development",
    answer:
      "Learn HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Node.js, Express.js, MongoDB and build responsive websites.",
  },
  {
    question: "Digital Marketing",
    answer:
      "Master SEO, Google Ads, Social Media Marketing, Email Marketing, Analytics, Content Marketing and live campaign management.",
  },
  {
    question: "UI/UX Design",
    answer:
      "Learn Figma, Wireframing, Prototyping, User Research, Responsive Design, Design Systems and UI best practices.",
  },
  {
    question: "Amazon Web Services (AWS)",
    answer:
      "Learn EC2, S3, IAM, VPC, CloudFormation, Lambda, Docker, CI/CD and Cloud Deployment with practical implementation.",
  },
  {
    question: "Android App Development Internship",
    answer:
      "Develop Android apps using Java & Kotlin, Firebase, APIs, Material Design, SQLite and Play Store deployment.",
  },
];

export default function InternshipFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-[#edf1f7] py-20">
      <div className="max-w-6xl mx-auto px-5">

        {/* Heading */}

        <h2 className="text-center text-5xl font-extrabold  text-orange-700 uppercase mb-14">
          Internship
        </h2>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 duration-300"
              >

                <span className="font-semibold text-gray-800 text-lg">
                  {item.question}
                </span>

                {active === index ? (
                  <FiChevronUp size={22} />
                ) : (
                  <FiChevronDown size={22} />
                )}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-8">
                  {item.answer}
                </div>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}