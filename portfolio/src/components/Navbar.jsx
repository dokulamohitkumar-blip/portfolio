import { motion } from "framer-motion";

function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Education",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="#home"
          className="text-3xl font-black tracking-tight text-slate-900"
        >
          MOHIT KUMAR<span className="text-cyan-500">.</span>
        </a>

        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative py-2 text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-cyan-600"
            >
              {link}

              {/* Hover line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-cyan-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* LET'S TALK */}
        <a
          href="#contact"
          className="group hidden items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-200 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-cyan-300 sm:flex"
        >
          Let's Talk

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>

      </div>
    </motion.header>
  );
}

export default Navbar;