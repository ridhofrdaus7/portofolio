import { motion } from "framer-motion";

export const AboutSkills = () => {
  const skills = [
    "Branding Identity",
    "UI/UX Design",
    "Creative Direction",
    "Motion Graphics",
    "Editorial Layout",
    "Typography",
    "Social Media Design"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-foreground text-background mx-4 md:mx-6 my-4 md:my-6 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Left: About */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h2 className="text-sm uppercase tracking-widest text-background/60 mb-8">About & Approach</h2>
          <p className="text-2xl md:text-3xl lg:text-4xl leading-snug font-medium text-balance mb-8">
            Great design is not just pretty pixels. It is the way your brand walks into the room, gets noticed, and makes people want in.
          </p>
          <p className="text-background/70 max-w-md">
            I build clean, premium visual systems with a fresh editorial edge, made to stay consistent across socials, websites, ads, packaging, and every brand moment that matters.
          </p>
        </motion.div>

        {/* Right: Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col"
        >
          <h2 className="text-sm uppercase tracking-widest text-background/60 mb-8">Core Capabilities</h2>
          
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span 
                key={i} 
                className="px-5 py-3 rounded-full border border-background/20 text-sm font-medium hover:bg-background hover:text-foreground transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-sm text-background/60 uppercase tracking-wider">Years Exp.</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-sm text-background/60 uppercase tracking-wider">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
