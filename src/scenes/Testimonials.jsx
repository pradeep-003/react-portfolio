import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const certificates = [
    {
      id: 1,
      image: "../assets/Urct.jpg",
      title: "React JS ",
      description:
        "Built components, used hooks, managed state, and implemented client-side routing.",
      link: "https://www.udemy.com/certificate/UC-ecb44433-aa2f-4051-b499-b1abe42071ff/",
    },
    {
      id: 2,
      image: "../assets/javs.jpg",
      title: "java script",
      description:
        "Mastered ES6, DOM manipulation, events, functions, arrays, and asynchronous logic.",
      link: "https://www.udemy.com/certificate/UC-07663061-03fb-4d1e-bf7c-a3c71475619e/",
    },
    {
      id: 3,
      image: "../assets/mern.jpg",
      title: "MERN stack",
      description:
        "Developed full-stack apps using MongoDB, Express, React, and Node.js.",
      link: "https://www.udemy.com/certificate/UC-f1be6b42-7c54-44db-ac5e-6e2488d48f44/",
    },
    {
      id: 4,
      image: "/assets/Htmcss.jpg",
      title: "HTML | CSS ",
      description:
        "Learned semantic HTML, responsive layouts, Flexbox, Grid, and CSS animations.",
      link: "https://www.udemy.com/certificate/UC-7c43c2f9-71cb-4776-875c-1c096d5b9c8c/",
    },

    // Add more certificates here
  ];
  return (
    <section id="certificates" className="pt-32 pb-16 mb-200">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          Certificates
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Every certificate here marks a challenge overcome through focus and
          grit.
        </p>
      </motion.div>

      {/* CERTIFICATES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 px-4 justify-center">
        {certificates.map(({ id, image, title, description, link }, index) => (
          <motion.a
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-600 text-white shadow-lg rounded-lg aspect-square flex flex-col items-center justify-center p-4 transition transform hover:scale-105 hover:bg-violet-700 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-50 object-contain rounded mb-2"
            />
            <h3 className="font-playfair text-base font-semibold mb-1">
              {title}
            </h3>
            <p className="text-xs">{description}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
