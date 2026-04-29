import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-start bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero_bg.jpeg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-b from-transparent to-black z-0"></div>

      {/* Content */}
      <div className="z-10 relative flex flex-col items-center pt-[150px] w-full px-4 text-center">

        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-full px-1 py-1 flex items-center gap-3 mb-8"
        >
          <span className="bg-white text-black rounded-full px-3 py-1 text-xs font-semibold">
            Fresh
          </span>
          <span className="text-white text-sm pr-4">
            Brand visuals that make people stop scrolling.
          </span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="Design that hits different."
          delay={0.1}
          className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl text-center mx-auto tracking-normal mb-8"
        />

        {/* Subtext */}
        <motion.p
          initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base text-white font-body font-light leading-tight max-w-lg mb-12"
        >
          I'm Ridho, a visual designer crafting bold identities, scroll-stopping content, and digital experiences that help brands look premium and sell smarter.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6"
        >
          <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-white hover:bg-white/30 transition-colors">
            Start a Project
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium">
            <Play className="w-4 h-4 fill-current" />
            See the Vibe
          </button>
        </motion.div>

        {/* Partners bar */}
        <div className="mt-auto pb-8 pt-32 w-full flex flex-col items-center">
          <div className="liquid-glass rounded-full px-6 py-2 text-white/80 text-sm mb-8">
            Built for brands that want to look ahead
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16 text-2xl md:text-3xl font-heading italic text-white/50">
            <span>Stripe</span>
            <span>Vercel</span>
            <span>Linear</span>
            <span>Notion</span>
            <span>Figma</span>
          </div>
        </div>

      </div>
    </section>
  );
};
