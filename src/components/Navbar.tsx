import { motion } from "framer-motion";

export const Navbar = ({ isWorkPage = false }: { isWorkPage?: boolean }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 mix-blend-difference text-white pointer-events-none"
    >
      <a href="/" className="text-xl font-bold tracking-widest uppercase pointer-events-auto cursor-pointer font-heading">
        RIDO
      </a>
      <div className="flex gap-6 md:gap-10 text-sm md:text-base font-medium tracking-wide pointer-events-auto">
        <a href={isWorkPage ? "/work" : "#work"} className="hover:opacity-60 transition-opacity relative group">
          Work
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href={isWorkPage ? "/#about" : "#about"} className="hover:opacity-60 transition-opacity relative group">
          About
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href={isWorkPage ? "/#contact" : "#contact"} className="hover:opacity-60 transition-opacity relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </motion.nav>
  );
};
