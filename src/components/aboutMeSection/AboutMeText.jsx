import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Pawan Kumar, a self-motivated MERN Stack Developer with a strong
        foundation in MongoDB, Express.js, React.js, and Node.js. Alongside my
        academic journey, I have been actively working as a freelancer, where I
        have built responsive websites and web applications for clients.
        Freelancing has helped me improve my problem-solving skills, client
        communication, and project delivery. I am now looking to join a
        growth-oriented team where I can further sharpen my skills and
        contribute meaningfully to real-world projects.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
