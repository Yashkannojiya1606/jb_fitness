import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import treadmillAnim from "../assets/lottie/Running on Treadmill.json";
import weightliftingAnim from "../assets/lottie/Weightlifting competition.json";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer personal training, group fitness, online coaching, and nutrition guidance.",
  },
  {
    question: "Do you have certified trainers?",
    answer:
      "Yes, all our trainers are certified and experienced professionals.",
  },
  {
    question: "How can I join?",
    answer:
      "You can sign up online or visit our gym directly for membership.",
  },
  {
    question: "Do you offer diet plans?",
    answer:
      "Yes, our certified nutritionists provide custom diet plans tailored to your fitness goals.",
  },
  {
    question: "Are trial sessions available?",
    answer: "Absolutely! We offer free trial sessions for first-time visitors.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-40 px-6 md:px-20 bg-white dark:bg-black transition-colors duration-500 overflow-hidden"
    >
      {/* ✅ Group lifter and FAQ in one wrapper to align properly */}
      <div className="relative max-w-3xl mx-auto z-10">
        {/* ✅ Lifter Lottie - Now sticks to top of FAQ */}
        <div className="relative z-20 flex justify-center -mb-15">
          {/* Glow background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-400/30 dark:bg-yellow-300/10 blur-3xl rounded-full z-[-1]" />
          <motion.div
            className="w-56 md:w-72 lg:w-80 opacity-90"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Lottie animationData={weightliftingAnim} loop />
          </motion.div>
        </div>

        {/* ✅ FAQ Box - Removed `mt-44` to eliminate top margin */}
        <div className="relative bg-white dark:bg-zinc-900 rounded-3xl p-10 shadow-xl z-10">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-black dark:text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5 divide-y divide-gray-300 dark:divide-zinc-700">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: i % 2 === 0 ? -100 : 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, bounce: 0.2, type: "spring" },
                }}
                viewport={{ once: true }}
                className="pt-5 first:pt-0"
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-xl font-semibold text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-all"
                >
                  <span>{f.question}</span>
                  <span className="text-3xl">{openIndex === i ? "–" : "+"}</span>
                </button>

                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-5 text-lg text-black/80 dark:text-white/70 leading-relaxed"
                  >
                    {f.answer}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
