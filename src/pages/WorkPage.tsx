import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { works } from "../data/works";

// Group works by brand instead of category
const brandGroups = works.reduce<Record<string, typeof works>>((groups, work) => {
  groups[work.brand] = [...(groups[work.brand] ?? []), work];
  return groups;
}, {});

export const WorkPage = () => {
  return (
    <main className="min-h-screen bg-black px-4 pb-32 pt-28 text-white md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        {/* Back Link */}
        <motion.a
          href="/"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 inline-flex items-center gap-3 text-sm font-medium text-white/50 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to overview
        </motion.a>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-[1px] w-12 bg-white/20" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Work Archive
            </p>
          </div>
          <h1 className="max-w-5xl text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl italic font-heading">
            Brands that built<br />
            <span className="text-white/20">with intention.</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10">
            <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed text-white/60">
              A comprehensive archive of design systems, digital experiences, 
              and campaign visuals crafted for brands that value precision and 
              visual narrative.
            </p>
            <div className="flex flex-wrap gap-4">
              {Object.keys(brandGroups).map((brand) => (
                <a 
                  key={brand}
                  href={`#${brand.toLowerCase().replaceAll(" ", "-")}`}
                  className="px-4 py-2 rounded-full border border-white/10 text-xs font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  {brand}
                </a>
              ))}
            </div>
          </div>
        </motion.header>

        {/* Work Sections */}
        <div className="space-y-40 md:space-y-64">
          {Object.entries(brandGroups).map(([brand, items]) => (
            <section 
              key={brand} 
              id={brand.toLowerCase().replaceAll(" ", "-")}
              className="relative"
            >
              <div className="sticky top-32 z-10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mix-blend-difference">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                      {items[0].category}
                    </p>
                  </div>
                  <h2 className="text-5xl font-bold tracking-tight md:text-7xl font-heading italic">{brand}</h2>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-white/40 mb-1">Brand Partnership</p>
                  <p className="text-sm text-white/60">{items.length} Deliverables</p>
                </div>
              </div>

              <div className="grid gap-12 md:gap-24">
                {items.map((work, index) => (
                  <motion.article
                    key={work.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group grid gap-10 md:grid-cols-2 md:items-center ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}
                  >
                    <div className={`relative aspect-[16/10] overflow-hidden bg-white/5 rounded-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <img
                        src={work.image}
                        alt={`${work.title} for ${work.brand}`}
                        className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="mb-8">
                        <span className="inline-block px-3 py-1 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40 mb-6">
                          Project {work.id.toString().padStart(2, '0')} - {work.year}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                          {work.title}
                        </h3>
                        <p className="text-lg leading-relaxed text-white/50 max-w-lg">
                          {work.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {work.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="inline-flex items-center gap-2 text-xs font-medium text-white/40"
                          >
                            <span className="h-1 w-1 rounded-full bg-white/20" />
                            {deliverable}
                          </span>
                        ))}
                      </div>

                      <button className="inline-flex items-center gap-2 text-sm font-semibold group/btn transition-colors hover:text-white/60">
                        View Project Details
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </button>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};
