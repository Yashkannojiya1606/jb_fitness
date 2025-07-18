// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { FaUsers, FaDumbbell, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";

// const stats = [
//   { icon: <FaUsers size={28} />, label: "Active Members", value: 250 },
//   { icon: <FaChartLine size={28} />, label: "Transformations", value: 50 },
//   { icon: <FaDumbbell size={28} />, label: "Certified Trainers", value: 10 },
//   { icon: <FaMapMarkerAlt size={28} />, label: "Total Branches", value: 3 },
// ];

// const branches = [
//   { city: "Mumbai", address: "Andheri West, Near Station" },
//   { city: "Pune", address: "Baner Road, Opposite Zudio" },
//   { city: "Delhi", address: "Connaught Place, Block B" },
// ];

// export default function Achievements() {
//   return (
//     <section className="w-full bg-black text-white py-20 px-4 md:px-12">
//       {/* Heading */}
//       <motion.h2
//         className="text-4xl font-bold text-center text-[#FACC15] mb-14"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         Our Achievements
//       </motion.h2>

//       {/* Floating Stats */}
//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center mb-20"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:shadow-[0_0_40px_rgba(250,204,21,0.3)] transition-all duration-300 hover:scale-105"
//           >
//             <div className="text-[#FACC15] mb-2">{stat.icon}</div>
//             <h3 className="text-3xl font-bold text-[#FACC15]">
//               <CountUp end={stat.value} duration={2} />+
//             </h3>
//             <p className="text-sm text-white/80 mt-1 text-center">{stat.label}</p>
//           </div>
//         ))}
//       </motion.div>

//       {/* Branches */}
//       <motion.div
//         className="text-center"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* <h3 className="text-3xl font-semibold mb-10 text-[#FACC15]">Our Branches</h3>
//         <div className="flex flex-wrap justify-center gap-6">
//           {branches.map((branch, index) => (
//             <div
//               key={index}
//               className="w-[260px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 hover:shadow-[0_0_20px_rgba(250,204,21,0.25)] transition hover:scale-105"
//             >
//               <h4 className="text-xl font-semibold">{branch.city}</h4>
//               <p className="text-sm text-white/70 mt-1">{branch.address}</p>
//             </div>
//           ))}
//         </div> */}
//       </motion.div>
//     </section>
//   );
// }


// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { FaUsers, FaDumbbell, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";

// const stats = [
//   { icon: <FaUsers size={28} />, label: "Active Members", value: 250 },
//   { icon: <FaChartLine size={28} />, label: "Transformations", value: 50 },
//   { icon: <FaDumbbell size={28} />, label: "Certified Trainers", value: 10 },
//   { icon: <FaMapMarkerAlt size={28} />, label: "Total Branches", value: 3 },
// ];

// export default function Achievements() {
//   return (
//     <section className="w-full dark:bg-black bg-white dark:text-white text-black py-20 px-4 md:px-12">
//       <motion.h2
//         className="text-4xl font-bold text-center mb-14 dark:text-[#FACC15] text-yellow-500"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//        Legacy of Strength
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {stats.map((stat, index) => (
//           <Tilt
//             key={index}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             perspective={1000}
//             transitionSpeed={1000}
//             glareEnable={false}
//             className="rounded-2xl"
//           >
//             <motion.div
//               className="flex flex-col items-center justify-center p-6 rounded-2xl 
//                 dark:bg-white/5 bg-black/5 backdrop-blur-md 
//                 border border-white/10 
//                 shadow-[0_0_15px_rgba(250,204,21,0.1)] 
//                 hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] 
//                 animate-glow hover:scale-[1.03] transition-all duration-300"
//               whileHover={{ rotateZ: 0.5 }}
//             >
//               <div className="mb-2 text-yellow-500 group-hover:scale-125 transition-all duration-300">
//                 {stat.icon}
//               </div>
//               <h3 className="text-3xl font-bold text-yellow-500">
//                 <CountUp end={stat.value} duration={2} />+
//               </h3>
//               <p className="text-sm opacity-80 mt-1 text-center">{stat.label}</p>
//             </motion.div>
//           </Tilt>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import CountUp from "react-countup";
// import { FaUsers, FaDumbbell, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";

// const stats = [
//   { icon: <FaUsers size={28} />, label: "Active Members", value: 250 },
//   { icon: <FaChartLine size={28} />, label: "Transformations", value: 50 },
//   { icon: <FaDumbbell size={28} />, label: "Certified Trainers", value: 10 },
//   { icon: <FaMapMarkerAlt size={28} />, label: "Total Branches", value: 3 },
// ];

// export default function Achievements() {
//   return (
//     <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-4 md:px-12 transition-colors duration-500">
//       {/* Heading */}
//   <motion.h2
//   className="text-4xl sm:text-5xl font-extrabold text-center mb-14 
//              text-black dark:text-white tracking-tight"
//   initial={{ opacity: 0, y: 40 }}
//   whileInView={{ opacity: 1, y: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.6, ease: 'easeOut' }}
// >
//   Our Achievements
// </motion.h2>


//       {/* Floating Stats */}
//       <motion.div
//         className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center"
//         initial={{ opacity: 0, y: 60 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {stats.map((stat, index) => (
//           <div
//             key={index}
//             className={`
//               flex flex-col items-center justify-center p-6 rounded-2xl 
//               bg-white/80 dark:bg-white/5
//               backdrop-blur-md border border-black/10 dark:border-white/10
//               shadow-lg dark:shadow-[0_0_20px_rgba(250,204,21,0.3)]
//               hover:shadow-2xl hover:scale-105 transition-all duration-300
//             `}
//           >
//             <div className="text-yellow-500 dark:text-[#FACC15] mb-2">
//               {stat.icon}
//             </div>
//             <h3 className="text-3xl font-bold text-black dark:text-[#FACC15]">
//               <CountUp end={stat.value} duration={2} />+
//             </h3>
//             <p className="text-sm font-medium mt-1 text-center text-gray-700 dark:text-white/80">
//               {stat.label}
//             </p>
//           </div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaUsers, FaDumbbell, FaChartLine, FaMapMarkerAlt } from "react-icons/fa";

const stats = [
  { icon: <FaUsers size={28} />, label: "Active Members", value: 250 },
  { icon: <FaChartLine size={28} />, label: "Transformations", value: 50 },
  { icon: <FaDumbbell size={28} />, label: "Certified Trainers", value: 10 },
  { icon: <FaMapMarkerAlt size={28} />, label: "Total Branches", value: 3 },
];

export default function Achievements() {
  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-4 md:px-12 transition-colors duration-500">
      
      {/* Heading */}
      {/* <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-14 tracking-tight text-black dark:text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Our Achievements
      </motion.h2> */}
      <motion.h2
  className="text-4xl sm:text-5xl font-bold text-center mb-14 text-black dark:text-white"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    type: "spring",
    stiffness: 60,
    damping: 12,
    delay: 0.2,
  }}
>
  Our Achievements
</motion.h2>


      {/* Stats Grid */}
    <motion.div
  className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-center mb-20"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    type: "spring",
    stiffness: 50,
    damping: 14,
    delay: 0.3,
  }}
>

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              glareEnable={false}
              className="rounded-2xl"
            >
              <div
                className="flex flex-col items-center justify-center p-6 rounded-2xl
                bg-white/80 dark:bg-white/5 backdrop-blur-md 
                border border-black/10 dark:border-white/10 
                shadow-lg dark:shadow-[0_0_20px_rgba(250,204,21,0.3)]
                hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-yellow-500 dark:text-[#FACC15] mb-2">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-black dark:text-[#FACC15]">
                  <CountUp end={stat.value} duration={2} />+
                </h3>
                <p className="text-sm font-medium mt-1 text-center text-gray-700 dark:text-white/80">
                  {stat.label}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
