import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Daily Fresh (E-Commerce) (User Panel)",
    company: "Freelancer",
    date: "2022",
    responsibilities: [
      "Implementing reusable components.",
      "Developed a responsive user panel for an e-commerce platform focused on daily fresh products.",
      "Implemented user authentication, product browsing, cart management, and order placement features.",
    ],
  },
  {
    job: "Daily Fresh (E-Commerce) (Admin Panel)",
    company: "Fresslancer",
    date: "2022",
    responsibilities: [
      "User management: This involves managing user accounts, registration, login, and authentication.",
      "Integrated with services like payment gateways, shipping APIs, and social media platforms to enhance functionality and user experience.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Online learning/courses",
    company: "Freelancer",
    date: "2023 ",
    responsibilities: [
      "User authentication & course management.",
      "Payment gateway integration (Razorpay/Stripe).",
      "Interactive UI with progress tracking.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
