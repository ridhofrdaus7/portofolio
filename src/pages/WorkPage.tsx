import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Layers3 } from "lucide-react";
import { works } from "../data/works";

const brandGroups = works.reduce<Record<string, typeof works>>((groups, work) => {
  groups[work.brand] = [...(groups[work.brand] ?? []), work];
  return groups;
}, {});

const toAnchor = (value: string) => value.toLowerCase().replaceAll(" ", "-");

export const WorkPage = () => {
  return (
    <main className="min-h-screen bg-background px-4 pb-24 pt-28 text-foreground md:px-6 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <motion.a
          href="/"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-foreground/15 bg-white px-5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </motion.a>

        <motion.header
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-foreground/10 pb-10"
        >
          <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/50">
            <Layers3 className="h-4 w-4" />
            Work archive
          </p>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              All design works by brand.
            </h1>
            <p className="max-w-md text-base leading-relaxed text-foreground/60 md:justify-self-end">
              Seluruh hasil design ditampilkan dalam grid yang rapi dan
              dikelompokkan berdasarkan brand agar mudah discan tanpa teks
              menumpuk.
            </p>
          </div>
        </motion.header>

        <div className="mt-8 flex flex-wrap gap-2">
          {Object.entries(brandGroups).map(([brand, items]) => (
            <a
              key={brand}
              href={`#${toAnchor(brand)}`}
              className="inline-flex min-h-10 cursor-pointer items-center rounded-full border border-foreground/10 bg-white px-4 text-sm font-medium text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
            >
              {brand}
              <span className="ml-2 text-foreground/40">{items.length}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 space-y-20">
          {Object.entries(brandGroups).map(([brand, items], brandIndex) => (
            <section key={brand} id={toAnchor(brand)} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: brandIndex * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="mb-6 flex flex-col justify-between gap-4 border-b border-foreground/10 pb-5 md:flex-row md:items-end"
              >
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/45">
                    {items[0].category}
                  </p>
                  <h2 className="text-4xl font-heading italic leading-none text-foreground md:text-6xl">
                    {brand}
                  </h2>
                </div>
                <p className="text-sm text-foreground/50">{items.length} works</p>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {items.map((work, index) => (
                  <motion.article
                    key={work.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="group overflow-hidden border border-foreground/10 bg-white"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5">
                      <img
                        src={work.image}
                        alt={`${work.title} untuk ${work.brand}`}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                      <span
                        className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-foreground shadow-sm"
                        style={{ backgroundColor: work.color }}
                      >
                        {work.year}
                      </span>
                    </div>

                    <div className="p-6 md:p-8">
                      <div className="mb-5 flex items-start justify-between gap-6">
                        <div>
                          <p className="text-sm font-medium text-foreground/50">{work.brand}</p>
                          <h3 className="mt-2 text-3xl font-heading italic leading-none text-foreground md:text-4xl">
                            {work.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground/45 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>

                      <p className="max-w-xl text-sm leading-relaxed text-foreground/65">
                        {work.description}
                      </p>

                      <div className="mt-7 flex flex-wrap gap-2">
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
