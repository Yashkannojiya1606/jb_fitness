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
import { IoIosArrowDropdown } from "react-icons/io";

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

const programs = [
  {
    title: "Weight Training",
    image: "/images/service_1.webp",
    description: "Build muscle with guided strength routines",
  },
  {
    title: "Cardio Fitness",
    image: "/images/service_2.webp",
    description: "Boost endurance with our cardio sessions",
  },
  {
    title: "CrossFit",
    image: "/images/service_3.webp",
    description: "High intensity CrossFit challenges await you",
  },
  {
    title: "Personal Training",
    image: "/images/weight_4.webp",
    description: "One-on-one sessions tailored to your goals",
  },
];

export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full overflow-hidden">
      {/* 🔥 HERO SECTION */}
      <section
        id="hero" // ✅ ID added for scrolling target
        className="relative h-screen w-full overflow-hidden"
      >
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

          <motion.div variants={item} className="flex gap-4 mb-10">
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
      </section>

      {/* 👇 DOWN ARROW – Scroll to HERO */}
      <motion.section
        id="wellness-heading"
        className="w-full text-center pt-40 pb-32 px-4 backdrop-blur-md bg-white/5 border-t border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="w-full flex justify-center mb-12">
          <button
            onClick={() =>
              document
                .getElementById("hero") // ✅ Scrolls to HERO
                .scrollIntoView({ behavior: "smooth" })
            }
            className="text-white text-6xl animate-bounce"
          >
            <IoIosArrowDropdown />
          </button>
        </div>

        <p className="text-[14px] font-extrabold tracking-widest text-yellow-400 uppercase mb-2 relative inline-block after:block after:mt-1 after:w-10 after:h-1 after:bg-yellow-400 after:mx-auto after:rounded-full after:blur-sm">
          WE'VE GOT EXPERTS TO HELP YOU
        </p>
        <h2 className="text-[32px] md:text-[64px] font-extrabold leading-tight font-orbitron dark:text-white text-black">
          WELLNESS SPECIALISTS
        </h2>
      </motion.section>

      {/* ✅ SERVICE SECTION */}
<section
  className="relative w-full h-[700px] flex flex-col justify-end items-center text-white transition-all duration-500"
  style={{
    backgroundImage: `url(${programs[activeIndex].image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/60 z-0" />

  <div className="relative z-10 w-full max-w-6xl px-8">
    <div className="flex justify-between gap-36">
      {programs.map((program, idx) => (
        <div
          key={idx}
          onMouseEnter={() => setActiveIndex(idx)}
          className="relative group cursor-pointer text-center w-64"
        >
          {/* Glass Card on Hover */}
          {activeIndex === idx && (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-full mb-6 w-72 bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white shadow-xl z-20"
              style={{ minHeight: "320px" }} // Increased height
            >
              <h3 className="text-[32px] font-semibold">{program.title}</h3>
              <p className="mt-2 text-[18px] font-normal text-white/80 leading-relaxed">
                {program.description} <br />
                This program helps you transform physically and mentally with expert guidance and proven methods.
              </p>
              <button className="mt-6 w-full bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition font-medium text-sm">
                Explore More
              </button>
            </motion.div>
          )}

          {/* Show only when not hovered */}
          {activeIndex !== idx && (
            <>
              <div className="text-[32px] font-semibold text-gray-300">
                {program.title}
              </div>
              <p className="text-[18px] font-normal text-gray-400 mt-1">
                {program.description}
              </p>
            </>
          )}
        </div>
      ))}
    </div>
  </div>

  <div className="h-16" /> {/* Bottom spacing */}
</section>









    </div>
  );
}
