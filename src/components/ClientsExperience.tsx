import { motion } from "framer-motion";

const experiences = [
  { company: "Vanguard Studio", role: "Senior Designer", year: "2022 - Present" },
  { company: "Nexus Finance", role: "UI Designer", year: "2021 - 2022" },
  { company: "Lumina Archive", role: "Freelance Branding", year: "2020 - 2021" },
  { company: "Aura Skincare", role: "Visual Designer", year: "2019 - 2020" },
];

export const ClientsExperience = () => {
  return (
    <section className="py-24 px-6 bg-white mx-4 md:mx-6 my-4 md:my-6 shadow-sm border border-black/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience & Brand Collabs</h2>

        <div className="flex flex-col border-t border-foreground/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-foreground/10 group hover:bg-foreground/5 transition-colors px-4 -mx-4 rounded-lg"
            >
              <div className="text-2xl font-medium mb-2 md:mb-0 group-hover:text-foreground/80 transition-colors duration-200">
                {exp.company}
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-16 text-foreground/60">
                <span className="w-32">{exp.role}</span>
                <span className="text-sm font-mono">{exp.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
