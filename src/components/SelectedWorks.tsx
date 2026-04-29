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
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260422_191657_800d4e1f-7ab3-41af-90b6-9bd3039eb294.mp4"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/58 to-black/20" />

      <div className="relative z-10 flex h-full w-full flex-col justify-between p-6 md:p-10 lg:p-14">
        <div className="flex items-start justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-background/55">
            Full archive
          </p>
          <span className="text-sm font-medium text-background/55">{works.length} works</span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_0.75fr] md:items-end">
          <div>
            <h3 className="max-w-4xl text-5xl font-heading italic leading-none text-background md:text-7xl lg:text-8xl">
              More work, more flavor.
            </h3>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-background/65 md:text-base">
              Explore the full collection of brand identities, campaigns, websites,
              product UI, and editorial visuals grouped by brand category.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:items-start">
            <div className="grid gap-2 text-sm text-background/70">
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-background" />
                Brand identity
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-background" />
                Campaign visual
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-4 w-4 text-background" />
                UI and editorial system
              </div>
            </div>

            <a
              href="/work"
              className="inline-flex min-h-12 w-fit cursor-pointer items-center gap-2 rounded-full bg-background px-7 text-sm font-semibold text-foreground transition-colors hover:bg-background/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
            >
              View all work
              <ArrowUpRight className="h-4 w-4" />
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
