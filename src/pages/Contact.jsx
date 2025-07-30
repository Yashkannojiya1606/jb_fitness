

// import { Card, CardContent } from "../components/ui/card"
// import { Input } from "../components/ui/input"
// import { Textarea } from "../components/ui/textarea"
// import { Button } from "../components/ui/button"
// import { Label } from "../components/ui/label"
// import Lottie from "lottie-react"
// import contactAnim from "../assets/lottie/contactus.json";
// import React, { useState } from "react";


// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     alert("Form submitted!");
//   };

//   return (
//     <section className="min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">
//       <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl">
//         {/* Lottie Animation */}
//         <div className="hidden md:block">
//           <Lottie animationData={contactAnim} loop className="w-full max-w-md" />
//         </div>

//         {/* Contact Form */}
//         <Card className="bg-white/5 backdrop-blur-md border border-white/10 text-white p-6 w-full space-y-6">
//           <h2 className="text-3xl font-bold tracking-tight">Contact Us</h2>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <Label htmlFor="name">Name</Label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="bg-black/20 text-white placeholder:text-white/60"
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="you@example.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="bg-black/20 text-white placeholder:text-white/60"
//                 required
//               />
//             </div>

//             <div>
//               <Label htmlFor="message">Message</Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Type your message here..."
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows={4}
//                 className="bg-black/20 text-white placeholder:text-white/60"
//                 required
//               />
//             </div>

//             <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold">
//               Send Message
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </section>
//   );
// }



import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import Lottie from "lottie-react";
import contactAnim from "../assets/lottie/contactus.json";
import { motion } from "framer-motion";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import React, { useState, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.section
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-black text-white pt-32 pb-24 px-6"
      ref={ref}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-20">Contact</h1>

     <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto items-start mt-20">
  {/* Left - Contact Info */}
  <motion.div
    style={{ y }}
    className="bg-white/5 backdrop-blur-md border border-yellow-400/30 p-8 rounded-2xl shadow-xl space-y-6"
  >
    <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Contact Address</h2>

    <div className="space-y-6">
      {/* Branch Office */}
      <div className="flex items-start gap-4">
        <MapPinIcon className="text-yellow-400 animate-pulse mt-1" />
        <p>
          <strong>Gwalior Branch:</strong><br />
          XYZ Building  <br />
      
        </p>
      </div>

      {/* Head Office */}
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="p-2 rounded-full bg-yellow-500/10"
        >
          <MapPinIcon className="text-yellow-400" />
        </motion.div>
        <p>
          <strong>XYZ Branch:</strong><br />
         City Center <br />
          Gwalior, MP 474006
        </p>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-4">
        <PhoneIcon className="text-yellow-400 animate-bounce" />
        <p>+91-8770521877, +91-123456789</p>
      </div>

      {/* Email */}
      <div className="flex items-center gap-4">
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <MailIcon className="text-yellow-400" />
        </motion.div>
        <p>XYZ@gmail.com</p>
      </div>
    </div>

    {/* Socials */}
    <div className="flex justify-center gap-6 pt-6">
      <FacebookIcon className="hover:scale-110 transition-transform duration-300 text-blue-500" />
      <InstagramIcon className="hover:scale-110 transition-transform duration-300 text-pink-500" />
      <LinkedinIcon className="hover:scale-110 transition-transform duration-300 text-blue-300" />
    </div>
  </motion.div>

  {/* Right - Map */}
  <motion.div
    style={{ y }}
    className="bg-white/5 backdrop-blur-md border border-yellow-400/30 rounded-2xl overflow-hidden shadow-xl h-[400px]"
  >
    <iframe
      title="Gym Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2105488858166!2d78.1906413!3d26.2082648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c50ef8257003%3A0xc68c82f9f91b7540!2sJB%20FITNESS%20GYM!5e0!3m2!1sen!2sin!4v1721713273820!5m2!1sen!2sin"
      className="w-full h-full border-none"
      loading="lazy"
      allowFullScreen=""
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </motion.div>
</div>


      {/* Center Section */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-24 mb-12">Get in Touch</h2>
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        {/* Lottie Animation */}
        <motion.div style={{ y }} className="w-full max-w-md">
          <Lottie animationData={contactAnim} loop className="w-full" />
        </motion.div>

        {/* Contact Form */}
        <Card className="bg-white/5 backdrop-blur-md border border-yellow-400/30 text-white p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black/30 text-white placeholder:text-white/60"
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-black/30 text-white placeholder:text-white/60"
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-black/30 text-white placeholder:text-white/60"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </motion.section>
  );
}
