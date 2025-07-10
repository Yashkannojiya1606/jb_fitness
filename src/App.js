import { ThemeProvider } from "./components/ui/theme-provider";
import { NavigationMenu } from "./components/ui/navigation";
import "./App.css";
import Footer from "./components/footer";
import Hero from "./components/ui/hero"; // Assuming hero is a component, not a video file  

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-black">
        <NavigationMenu />
        <Hero /> {/* Hero section with video background */}
      
        {/* Add your pages here */}
      </div>


      <div className="flex flex-col screen">
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
