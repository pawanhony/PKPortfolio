import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Daily Fresh (User)",
    year: "july2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Daily Fresh (Admin)",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Online learning/courses",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "https://www.ubworld.in/",
  },
  {
    name: "Courier Tracking Logistic",
    year: "Dec2023",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
  {
    name: "Aarya Construction & Support",
    year: "Dec2024",
    align: "right",
    image: "../../public/images/website-img-4.jpg",
    link: "https://aaryacons.com/",
  },
];

// const ProjectsMain = () => {
//   return (
//     <div id="projects" className="max-w-[1200px] mx-auto px-4">
//       <motion.div
//         variants={fadeIn("top", 0)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <ProjectsText />
//       </motion.div>
//       <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
//         {projects.map((project, index) => {
//           return (
//             <SingleProject
//               key={index}
//               name={project.name}
//               year={project.year}
//               align={project.align}
//               image={project.image}
//               link={project.link}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ProjectsMain;

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 overflow-hidden">
      {/* Projects Text with Animation */}
      <motion.div
        variants={fadeIn("down", 0.1)}  // Changed to "down" for better visual
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }} // Better performance with once:true
        className="mb-20"
      >
        <ProjectsText />
      </motion.div>

      {/* Projects List */}
      <div className="flex flex-col gap-32 max-w-[900px] mx-auto">  {/* Increased gap */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.15)}  // Staggered animation
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}  // Less amount triggers earlier
          >
            <SingleProject
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsMain;