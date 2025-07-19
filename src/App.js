import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { NavigationMenu } from "./components/navigation";
import Footer from "./components/footer";
// import Hero from "./components/pages/home";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
     
import "./App.css";
import Swiper from "./components/ui/swiper";
import Achievements from "./components/Achievements";
import TrainerSpotlight from "./components/TrainerSpotlight";
import FaqSection from "./components/FaqSection";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-white dark:bg-black flex flex-col font-montserrat">
          <NavigationMenu />

          {/* Route Content */}
          <Routes>
            <Route path="/" element={<><Home /></>} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
           <div className="mt-20 w-full">
          <Swiper />
           <Achievements />
          <TrainerSpotlight />
          <FaqSection />
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
