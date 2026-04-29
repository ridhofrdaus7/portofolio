import { motion } from "framer-motion";

export const ContactCTA = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-black text-white mx-4 md:mx-6 my-4 md:my-6 shadow-sm border border-white/5 relative overflow-hidden rounded-3xl">
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

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Got a brand to level up?<br /> Let's make it impossible to ignore.
          </h2>

          <p className="text-white/60 mb-12 max-w-md mx-auto">
            Available for fresh launches, rebrands, campaign visuals, and digital design that turns attention into action.
          </p>

          <a
            href="mailto:hello@studio.com"
            className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-white/80 transition-colors duration-200 cursor-pointer"
          >
            hello@studio.com
          </a>
        </motion.div>
      </div>

      {/* Abstract Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl -z-0"></div>
    </section>
  );
};
