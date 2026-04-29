import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from "lucide-react";
import { works } from "../data/works";

const categoryGroups = works.reduce<Record<string, typeof works>>((groups, work) => {
  groups[work.category] = [...(groups[work.category] ?? []), work];
  return groups;
}, {});

export const WorkPage = () => {
  return (
    <main className="min-h-screen bg-background px-4 pb-24 pt-28 text-foreground md:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-5 text-sm font-semibold transition-colors hover:border-foreground/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </motion.a>

        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-foreground/10 pb-12"
        >
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/50">
            <Layers3 className="h-4 w-4" />
            Complete work archive
          </p>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Work built for brands that want to stand out, sell, and stay memorable.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-foreground/60 md:justify-self-end">
              Browse the full archive by brand category, from identity and campaign
              visuals to websites, product UI, and editorial systems.
            </p>
          </div>
        </motion.header>

        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {Object.entries(categoryGroups).map(([category, items]) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replaceAll(" ", "-")}`}
              className="block min-h-32 cursor-pointer border border-foreground/10 bg-white p-5 transition-colors hover:bg-foreground hover:text-background"
            >
              <p className="text-xs uppercase tracking-widest opacity-50">Category</p>
              <div className="mt-7 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-heading italic leading-none">{category}</h2>
                <span className="text-sm opacity-60">{items.length} works</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 space-y-24">
          {Object.entries(categoryGroups).map(([category, items], categoryIndex) => (
            <section key={category} id={category.toLowerCase().replaceAll(" ", "-")}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: categoryIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex flex-col justify-between gap-4 border-b border-foreground/10 pb-5 md:flex-row md:items-end"
              >
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/45">
                    Brand category
                  </p>
                  <h2 className="text-4xl font-bold tracking-tight md:text-6xl">{category}</h2>
                </div>
                <p className="text-sm text-foreground/50">{items.length} selected works</p>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {items.map((work, index) => (
                  <motion.article
                    key={work.id}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="group overflow-hidden border border-foreground/10 bg-white"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                      <img
                        src={work.image}
                        alt={`${work.title} for ${work.brand}`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <div
                        className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-foreground shadow-sm"
                        style={{ backgroundColor: work.color }}
                      >
                        {work.year}
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="mb-6 flex items-start justify-between gap-6">
                        <div>
                          <p className="text-sm font-medium text-foreground/50">{work.brand}</p>
                          <h3 className="mt-2 text-3xl font-heading italic leading-none md:text-4xl">
                            {work.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                      <p className="max-w-xl text-sm leading-relaxed text-foreground/65">
                        {work.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {work.deliverables.map((deliverable) => (
                          <span
                            key={deliverable}
                            className="inline-flex min-h-9 items-center gap-2 rounded-full border border-foreground/10 px-3 text-xs font-medium text-foreground/70"
                          >
                            <Check className="h-3.5 w-3.5 text-foreground" />
                            {deliverable}
                          </span>
                        ))}
                      </div>
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
