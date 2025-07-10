import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";

export function NavigationMenu() {
  const [dark, setDark] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 shadow-md bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/jb_logo_new.png"
            alt="JB_Fitness"
            className="h-12 w-auto p-0 m-0"
          />
        </div>

        {/* Center Nav Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-10 text-lg font-semibold text-black dark:text-white">
          {["Home", "About", "Services", "Plans", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Theme Toggle + Sign In + Mobile */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-black dark:text-yellow-400 hover:text-yellow-500 text-xl"
            title="Toggle Theme"
          >
            {dark ? <FaMoon /> : <FaSun />}
          </button>

          {/* Sign In Button */}
          <a
            href="#signin"
            className="hidden md:inline-block px-4 py-1.5 rounded-md border border-yellow-400 text-sm font-medium text-yellow-500 hover:bg-yellow-400 hover:text-white transition"
          >
            Sign In
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-black dark:text-white text-2xl"
            title="Menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white dark:bg-black text-black dark:text-white px-6 py-4 space-y-3">
          {["Home", "About", "Services", "Plans", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-yellow-400 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Sign In button in mobile view */}
          <a
            href="#signin"
            className="inline-block w-full text-center px-4 py-2 rounded-md border border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-white transition"
          >
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
}
