import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Layers3 } from "lucide-react";
import { works, type WorkItem } from "../data/works";

const projects = works.slice(0, 4);
const STACK_TOTAL = projects.length + 1;

const ProjectCard = ({
  project,
  index,
  progress,
}: {
  project: WorkItem;
  index: number;
  progress: MotionValue<number>;
}) => {
  const segment = 1 / STACK_TOTAL;
  const isFirst = index === 0;
  const isLast = index === STACK_TOTAL - 1;

  const enterStart = index * segment - segment * 0.35;
  const enterEnd = index * segment;

  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [enterStart, enterEnd, 1],
    isFirst ? ["0%", "0%"] : ["108%", "0%", "0%"]
  );

  const shrinkStart = (index + 1) * segment - segment * 0.35;
  const shrinkEnd = (index + 1) * segment;

  const scale = useTransform(
    progress,
    isLast ? [0, 1] : [shrinkStart, shrinkEnd],
    isLast ? [1, 1] : [1, 0.94]
  );

  return (
    <motion.div
      style={{
        y,
        scale,
        zIndex: index + 1,
        backgroundColor: project.color,
      }}
      className="absolute inset-3 origin-top overflow-hidden shadow-[0_-2px_40px_-8px_rgba(0,0,0,0.22)] group cursor-pointer md:inset-5"
    >
      <div className="relative flex h-full w-full flex-col p-6 md:p-10 lg:p-14">
        <div className="mb-6 flex items-start justify-between gap-6 md:mb-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-foreground/55">
              {project.category}
            </p>
            <h3 className="max-w-3xl text-3xl font-heading italic leading-none text-foreground/90 md:text-5xl lg:text-6xl">
              {project.brand}
            </h3>
          </div>
          <span className="shrink-0 text-sm font-medium text-foreground/55">{project.year}</span>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 min-h-0 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
                {project.title}
              </h4>
              <p className="max-w-md text-sm leading-relaxed text-foreground/75 md:text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="mt-8">
              <div className="mb-6 grid gap-2">
                {project.deliverables.map((deliverable) => (
                  <div key={deliverable} className="flex items-center gap-3 text-sm text-foreground/70">
                    <Check className="h-4 w-4 text-foreground" />
                    {deliverable}
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground group/link"
              >
                See more
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[190px] w-full overflow-hidden md:min-h-0">
            <img
              src={project.image}
              alt={`${project.title} for ${project.brand}`}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              loading={index < 2 ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ShowMoreCard = ({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) => {
  const segment = 1 / STACK_TOTAL;
  const enterStart = index * segment - segment * 0.35;
  const enterEnd = index * segment;

  const y = useTransform(progress, [enterStart, enterEnd, 1], ["108%", "0%", "0%"]);

  return (
    <motion.div
      style={{ y, scale: 1, zIndex: index + 1 }}
      className="absolute inset-3 origin-top overflow-hidden bg-foreground text-background shadow-[0_-2px_40px_-8px_rgba(0,0,0,0.22)] md:inset-5"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%]"
        style={{
          background:
            "radial-gradient(ellipse 82% 72% at 22% 86%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.48) 36%, rgba(0,0,0,0.18) 66%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 32%, rgba(0,0,0,0.18) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 md:p-10 lg:p-14">
        <div className="flex items-start justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-background/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            Full archive
          </p>
          <span className="text-sm font-medium text-background/70 drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">{works.length} works</span>
        </div>

        <div className="grid gap-12 md:max-w-[85rem] md:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] md:items-end">
          <div>
            <h3 className="max-w-4xl text-6xl font-heading italic leading-[0.85] text-background drop-shadow-[0_4px_32px_rgba(0,0,0,0.8)] md:text-8xl lg:text-[8rem]">
              More work,<br /> more flavor.
            </h3>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-background/85 drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] md:text-lg">
              Explore the full collection of brand identities, campaigns, websites,
              product UI, and editorial visuals grouped by brand category.
            </p>
          </div>

          <div className="flex flex-col gap-8 md:items-start">
            <div className="grid gap-4 text-base md:text-lg text-background/90 drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)] font-medium">
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 text-background" />
                Brand identity
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 text-background" />
                Campaign visual
              </div>
              <div className="flex items-center gap-4">
                <Check className="h-6 w-6 text-background" />
                UI and editorial system
              </div>
            </div>

            <a
              href="/work"
              className="inline-flex min-h-14 w-fit cursor-pointer items-center gap-3 rounded-full bg-background px-10 text-base font-bold text-foreground transition-all duration-300 hover:bg-background/90 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background shadow-lg"
            >
              View all work
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const SelectedWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full bg-background"
      style={{ height: `${(STACK_TOTAL + 1) * 100}vh` }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-28 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-8 border-b border-foreground/10 pb-10 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground/50">
              <Layers3 className="h-4 w-4" />
              Selected work
            </p>
            <h2 className="max-w-4xl text-4xl font-bold leading-[1.02] tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Visuals made to launch, level up, and get remembered.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground/60 md:text-base">
            A curated stack of brand visuals, campaign assets, websites, and product
            interfaces built to make every touchpoint feel sharper.
          </p>
        </motion.div>
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
        <ShowMoreCard index={projects.length} progress={scrollYProgress} />
      </div>
    </section>
  );
};
