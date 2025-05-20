import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, link, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          This project is a modern web application designed to enhance user
          experience with intuitive design and seamless functionality. Built
          using the latest technologies, it aims to solve real-world problems
          efficiently.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project 1"
            link="https://realtime-chat-app-db4a.onrender.com/login"
            description="A real-time chat application built with React and Socket.io."
          />
          <Project
            title="Project 2"
            link="https://vespera-ivory.vercel.app/"
            description="A web application built with React and Tailwind CSS for GGSIPU Tech Fest 2024."
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            link="https://07-omnifood-desktop-green.vercel.app/"
            description="A food delivery application ."
          />
          <Project
            title="Project 4"
            link="https://react-tutorial-contact-manager-app-master-2robxsnjw.vercel.app/"
            description="A contact manager application built with React."
          />
          <Project
            title="Project 5"
            link="https://sundown-pearl.vercel.app/"
            description="Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments."
          />

          <div
            className="flex justify-center text-center items-center ml-200 p-10
             max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          ></div>

          <div
            className="flex justify-center text-center items-center ml-200 p-10 bg-blue
             w-[400px] h-[400px] text-2xl font-playfair font-semibold pl-10"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
