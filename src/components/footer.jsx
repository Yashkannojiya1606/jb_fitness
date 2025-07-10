// import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 border-t dark:border-zinc-700">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Top section: Logo + Email + Social */}
//         <div className="grid md:grid-cols-3 gap-8 mb-10">
//           {/* Logo */}
//           <div className="flex flex-col items-start space-y-3">
//             <img src="/images/jb_logo_new.png" alt="JB_Fitness" className="h-14 w-auto" />
//             <p className="text-sm">
//               Build your strength with us. Premium facilities and expert trainers to guide your journey.
//             </p>
//           </div>

//           {/* Newsletter Form */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Subscribe to Newsletter</h3>
//             <form className="flex flex-col sm:flex-row items-center gap-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 rounded-md w-full sm:w-auto text-sm dark:bg-zinc-800 dark:text-white"
//               />
//               <button
//                 type="submit"
//                 className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 rounded-md"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>

//           {/* Social Icons */}
//           <div>
//             <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
//             <div className="flex space-x-4 text-xl">
//               <a href="#" className="hover:text-yellow-500"><FaFacebookF /></a>
//               <a href="#" className="hover:text-yellow-500"><FaInstagram /></a>
//               <a href="#" className="hover:text-yellow-500"><FaYoutube /></a>
//               <a href="#" className="hover:text-yellow-500"><FaTwitter /></a>
//             </div>
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//           <div>
//             <h4 className="font-semibold mb-2">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
//               <li><a href="#about" className="hover:text-yellow-500">About</a></li>
//               <li><a href="#services" className="hover:text-yellow-500">Services</a></li>
//               <li><a href="#plans" className="hover:text-yellow-500">Plans</a></li>
//               <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-2">Programs</h4>
//             <ul className="space-y-2">
//               <li>Personal Training</li>
//               <li>Group Workouts</li>
//               <li>Cardio & Strength</li>
//               <li>Yoga & Wellness</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-2">Support</h4>
//             <ul className="space-y-2">
//               <li>FAQs</li>
//               <li>Privacy Policy</li>
//               <li>Terms of Service</li>
//               <li>Support Center</li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-semibold mb-2">Contact</h4>
//             <ul className="space-y-2">
//               <li>Email: contact@jbfitness.com</li>
//               <li>Phone: +91 98765 43210</li>
//               <li>Location: Pune, Maharashtra</li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-300 dark:border-zinc-700 mt-8 pt-4 text-center text-sm">
//           <p>&copy; {new Date().getFullYear()} JB_Fitness. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }


import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-300 border-t dark:border-zinc-700 mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Tagline */}
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-yellow-500 text-xl font-bold">
                        <img
                            src="/images/jb_logo_new.png"
                            alt="JB_Fitness"
                            className="h-14 w-auto p-0 m-0"
                        />            <span>JB Fitness Gym</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Build Strength. Burn Limits. Become Unstoppable.

                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
                        <li><a href="#courses" className="hover:text-yellow-500">About</a></li>
                        <li><a href="#devchallenge" className="hover:text-yellow-500">Services</a></li>
                        <li><a href="#labs" className="hover:text-yellow-500">Plans</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
                        <li><a href="#terms" className="hover:text-yellow-500">Terms of Use</a></li>
                        <li><a href="#refund" className="hover:text-yellow-500">Refund & Cancellation</a></li>
                    </ul>
                </div>

                {/* Get in Touch */}
                <div>
                    <h4 className="text-lg font-semibold mb-3">Get in Touch</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        <a href="mailto:Support@Codehelp.in" className="hover:text-yellow-500">
                            Support@jbfitness.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="border-t dark:border-zinc-700 mt-6 pt-4 text-center text-sm text-gray-600 dark:text-gray-400 px-6">
                © {new Date().getFullYear()} JB_Fitness. All rights reserved.
            </div>
        </footer>
    );
}



