import { motion } from "framer-motion";

export const BlurText = ({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) => {
  const words = text.split(" ");
  
  return (
    <div className={`${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block mr-[0.2em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};
