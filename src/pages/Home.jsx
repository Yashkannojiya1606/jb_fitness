// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       delayChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: { opacity: 1, y: 0 },
// };

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Video with slow zoom animation */}
//       <motion.video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/videos/banner.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         initial={{ scale: 1 }}
//         animate={{ scale: 1.05 }}
//         transition={{
//           duration: 20,
//           ease: "easeOut",
//           repeat: Infinity,
//           repeatType: "mirror",
//         }}
//       />

//       {/* Content Overlay */}
//       <motion.div
//         className="relative z-10 h-full w-full bg-black/60 flex flex-col items-center justify-center text-center px-4"
//         variants={container}
//         initial="hidden"
//         animate="show"
//       >
//         <motion.h1
//           variants={item}
//           className="text-4xl md:text-6xl font-extrabold text-white mb-4"
//         >
//           Unleash Your Strength at{" "}
//           <span className="text-yellow-400">JB_Fitness</span>
//         </motion.h1>

//         <motion.p
//           variants={item}
//           className="text-lg md:text-xl text-gray-200 max-w-xl mb-6"
//         >
//           Build your dream physique with top trainers and world-class facilities.
//         </motion.p>

//         <motion.div variants={item} className="flex gap-4">
//           <a
//             href="#plans"
//             className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 hover:shadow-lg transition-all shadow-yellow-300"
//           >
//             Join Now
//           </a> 
//           <a
//             href="#about"
//             className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-all"
//           >
//             Learn More
//           </a>
//         </motion.div>
//       </motion.div>

//       {/* Optional Fallback Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//     </section>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Services Data
const programs = [
  {
    title: "Weight Training",
    image: "/images/service_1.webp",
    description: "Build muscle with guided strength routines.",
  },
  {
    title: "Cardio Fitness",
    image: "/images/service_2.webp",
    description: "Boost endurance with our cardio sessions.",
  },
  {
    title: "CrossFit",
    image: "/images/service_3.webp",
    description: "High intensity CrossFit challenges await you.",
  },
  {
    title: "Personal Training",
    image: "/images/service_4.webp",
    description: "One-on-one sessions tailored to your goals.",
  },
];

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      {/* 🔥 HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.video
          className="absolute bottom-0 left-0 w-full h-full object-cover z-0"
          src="/videos/banner.mp4"
          autoPlay
          muted
          loop
          playsInline
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{
            duration: 20,
            ease: "easeOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        <motion.div
          className="relative z-10 h-full w-full bg-black/60 flex flex-col items-center justify-center text-center px-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Unleash Your Strength at{" "}
            <span className="text-yellow-400">JB_Fitness</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-200 max-w-xl mb-6"
          >
            Build your dream physique with top trainers and world-class
            facilities.
          </motion.p>

          <motion.div variants={item} className="flex gap-4">
            <a
              href="#plans"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 hover:shadow-lg transition-all shadow-yellow-300"
            >
              Join Now
            </a>
            <a
              href="#about"
              className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </section>

      {/* 🌟 SECTION: Fancy Heading Between Hero & Services */}
      <motion.section
        className="w-full text-white text-center pt-20 pb-16 px-4 backdrop-blur-md bg-white/5 border-t border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className="text-[14px] font-extrabold tracking-widest text-yellow-400 uppercase mb-2 relative inline-block after:block after:mt-1 after:w-10 after:h-1 after:bg-yellow-400 after:mx-auto after:rounded-full after:blur-sm">
          WE'VE GOT EXPERTS TO HELP YOU        </p>
        <h2 className="text-[32px] md:text-[64px] font-extrabold leading-tight font-orbitron">
          WELLNESS SPECIALISTS
        </h2>
      </motion.section>

      {/* ✅ SERVICE SECTION */}
      <section
        className="relative w-full h-[700px] flex flex-col justify-center items-center text-white transition-all duration-500"
        style={{
          backgroundImage: `url(${programs[activeIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Service Headings Hover */}
        <div className="relative z-10 flex flex-wrap justify-center gap-8 mb-12">
          {programs.map((program, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className={`cursor-pointer text-2xl font-semibold transition-all duration-300 ${activeIndex === idx ? "text-white scale-105" : "text-gray-400"
                }`}
            >
              {program.title}
            </div>
          ))}
        </div>

        {/* Glass Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="relative z-10 w-[90%] md:w-[500px] bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20 shadow-xl"
          >
            <h3 className="text-2xl font-bold">
              {programs[activeIndex].title}
            </h3>
            <p className="mt-2 text-white/80 text-sm">
              {programs[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
