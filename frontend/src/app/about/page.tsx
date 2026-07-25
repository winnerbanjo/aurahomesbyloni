import * as motion from "framer-motion/client";

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
          Our Story
        </span>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-8 text-balance">
          Redefining luxury real estate in Lagos.
        </h1>
        <p className="text-lg text-stone-600 text-balance">
          Aura Homes by Lonis is a premier real estate firm dedicated to connecting discerning clients with extraordinary properties. Our portfolio represents the pinnacle of luxury, architecture, and design.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[50vh] bg-stone-200 rounded-[32px] mb-32 overflow-hidden relative"
      >
        <img src="/images/about.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            To provide an unparalleled, frictionless real estate experience. We believe that finding your dream home or next major investment should be as seamless and elegant as the properties we represent.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            To be the most trusted and sought-after luxury real estate brand in Nigeria, recognized for our uncompromising standards, attention to detail, and deep market expertise.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
