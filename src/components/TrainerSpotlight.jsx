// TrainerSpotlight.jsx
import { motion } from "framer-motion";

const trainers = [
  {
    name: "Amit Singh",
    title: "Strength & Conditioning Coach",
    experience: "7+ Years Experience • ISSA Certified",
    img: "/images/trainer_1.jpg",
  },
  {
    name: "Sneha Sharma",
    title: "Zumba & Cardio Expert",
    experience: "5+ Years • AFAA Certified",
    img: "/images/trainer_2.jpg",
  },
  {
    name: "Rohit Mehta",
    title: "Personal Trainer",
    experience: "10+ Years • ACE Certified",
    img: "/images/trainer_3.jpg",
  },
];

export default function TrainerSpotlight() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 text-white bg-black" id="trainer-spotlight">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/testimonial.webp"
          alt="Trainer Background"
          className="w-full h-full object-cover object-center opacity-10"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400"
        >
          Meet Our Expert Trainers
        </motion.h2>
        <p className="max-w-xl mx-auto text-white/70 mb-16">
          Our trainers are certified, experienced, and dedicated to helping you transform.
        </p>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: -2 }}
              className="relative group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-yellow-400/20 transition duration-700 overflow-hidden hover:animate-glow transform-style-3d"
            >
              {/* Trainer Image */}
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-full h-74 object-cover rounded-t-3xl"
              />

              {/* Trainer Info */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-yellow-300 group-hover:text-yellow-400 transition">
                  {trainer.name}
                </h3>
                <p className="text-white/70 mt-1">{trainer.title}</p>
                <p className="text-sm text-white/40 mt-3">{trainer.experience}</p>
              </div>

              {/* Glow border */}
              <div className="absolute -inset-0.5 rounded-3xl border border-yellow-400/20 blur-xl opacity-0 group-hover:opacity-30 transition duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


// with sound




// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// // Trainers data
// const trainers = [
//   {
//     name: "Amit Singh",
//     title: "Strength & Conditioning Coach",
//     experience: "7+ Years • ISSA Certified",
//     img: "/images/trainer_1.jpg",
//     borderColor: "border-red-500",
//   },
//   {
//     name: "Sneha Sharma",
//     title: "Zumba & Cardio Expert",
//     experience: "5+ Years • AFAA Certified",
//     img: "/images/trainer_2.jpg",
//     borderColor: "border-pink-500",
//   },
//   {
//     name: "Rohit Mehta",
//     title: "Personal Trainer",
//     experience: "10+ Years • ACE Certified",
//     img: "/images/trainer_3.jpg",
//     borderColor: "border-yellow-400",
//   },
// ];

// export default function TrainerSpotlight() {
//   const hoverSound = useRef(null); // 🎵 Create ref for hover sound

//   useEffect(() => {
//     const cards = document.querySelectorAll(".trainer-card");

//     const playSound = () => {
//       if (hoverSound.current) {
//         hoverSound.current.currentTime = 0;
//         hoverSound.current.play();
//       }
//     };

//     cards.forEach((card) => {
//       card.addEventListener("mouseenter", playSound);
//     });

//     // 🧹 Cleanup listeners
//     return () => {
//       cards.forEach((card) => {
//         card.removeEventListener("mouseenter", playSound);
//       });
//     };
//   }, []);

//   return (
//     <section
//       className="relative py-24 px-6 md:px-12 lg:px-20 text-white bg-black overflow-hidden"
//       id="trainer-spotlight"
//     >
//       {/* 🟡 Neon Background Glow Animation */}
//       <div className="absolute inset-0 animate-beat-glow">
//         <img
//           src="/images/testimonial.webp"
//           alt="Trainer Background"
//           className="w-full h-full object-cover object-center opacity-10"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-sm z-0" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl md:text-5xl font-extrabold mb-6 text-yellow-400"
//         >
//           Meet Our Expert Trainers
//         </motion.h2>
//         <p className="max-w-xl mx-auto text-white/70 mb-16">
//           Our trainers are certified, experienced, and dedicated to helping you transform.
//         </p>

//         {/* Trainer Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {trainers.map((trainer, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.07, rotateX: 2, rotateY: -2 }}
//               className={`trainer-card relative group bg-white/5 border-2 ${trainer.borderColor} backdrop-blur-xl rounded-3xl shadow-[0_0_60px_rgba(255,255,255,0.1)] hover:shadow-white/20 transition duration-700 overflow-hidden hover:animate-glow`}
//             >
//               <img
//                 src={trainer.img}
//                 alt={trainer.name}
//                 className="w-full h-72 object-cover rounded-t-3xl"
//               />

//               <div className="p-6 text-left">
//                 <h3 className="text-xl font-bold text-yellow-300 group-hover:text-yellow-400 transition">
//                   {trainer.name}
//                 </h3>
//                 <p className="text-white/70 mt-1">{trainer.title}</p>
//                 <p className="text-sm text-white/40 mt-3">{trainer.experience}</p>
//               </div>

//               <div className="absolute -inset-0.5 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* 🎧 Hover Sound Audio Element */}
//       <audio ref={hoverSound} src="/sounds/sound_1.mp3" preload="auto" />
//     </section>
//   );
// }





