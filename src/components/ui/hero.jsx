// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/banner.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="relative z-10 h-full w-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Unleash Your Strength at{" "}
          <span className="text-yellow-400">JB_Fitness</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Build your dream physique with top trainers and world-class facilities.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <a
            href="#plans"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
          >
            Join Now
          </a>
          <a
            href="#about"
            className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Fallback Overlay (Optional) */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </section>
  );
}
