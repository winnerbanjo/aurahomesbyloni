import * as motion from "framer-motion/client";

export default function AreaGuide() {
  const areas = [
    {
      name: "Bode Thomas",
      desc: "One of the most popular commercial and residential hubs in Surulere. It's packed with boutiques, eateries, banks, and major businesses, making it perfect for young professionals.",
      vibe: "Active & Commercial"
    },
    {
      name: "Aguda",
      desc: "A sprawling residential neighborhood known for its peaceful street layout, affordable apartments, and a family-friendly community atmosphere.",
      vibe: "Quiet & Residential"
    },
    {
      name: "Adeniran Ogunsanya",
      desc: "Surulere's shopping heartbeat. It hosts premium malls, restaurants, and schools, offering a balanced mix of high-street shopping and high-end residential living.",
      vibe: "Upscale Shopping & Living"
    },
    {
      name: "Aguda / Ijesha border",
      desc: "Known for quick access to the Apapa-Oshodi Expressway, offering excellent transit routes for residents commuting across Lagos.",
      vibe: "Accessible & Busy"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto text-center mb-20"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
          Area Guide
        </span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1] mb-8">
          The Surulere Neighborhood Guide.
        </h1>
        <p className="text-lg text-stone-600 text-balance leading-relaxed">
          Surulere is more than just a destination; it's a vibrant, culturally rich hub on Lagos Mainland. Known for its historical landmarks, film heritage, and active community life, Surulere offers a perfect home for everyone.
        </p>
      </motion.div>

      {/* Grid of Key Sub-Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {areas.map((area, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 bg-white border border-stone-200 rounded-[24px] shadow-sm flex flex-col justify-between hover-lift"
          >
            <div>
              <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-3">{area.vibe}</span>
              <h3 className="text-2xl font-semibold mb-4">{area.name}</h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{area.desc}</p>
            </div>
            <a href="/properties" className="text-sm font-semibold text-black hover:underline inline-flex items-center gap-2">
              Browse Properties in {area.name} →
            </a>
          </motion.div>
        ))}
      </div>

      {/* Neighborhood Insights Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full bg-[#111111] text-white p-12 md:p-20 rounded-[32px] overflow-hidden relative"
      >
        <div className="max-w-[700px] relative z-10">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">Access Premium Locations & Fast Transit</h2>
          <p className="text-stone-400 text-lg leading-relaxed mb-8">
            Centrally located on Lagos Mainland, Surulere is bordered by Yaba, Mushin, and Ebute Metta. It is only 15 minutes away from Lagos Island via the Eko Bridge, making it one of the most accessible areas for business owners and commuters.
          </p>
          <div className="grid grid-cols-2 gap-8 border-t border-stone-800 pt-8">
            <div>
              <h4 className="text-[#D4AF37] text-2xl font-semibold mb-2">Eko Bridge</h4>
              <p className="text-stone-500 text-sm">Direct link to Victoria Island & Ikoyi</p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] text-2xl font-semibold mb-2">Funsho Williams</h4>
              <p className="text-stone-500 text-sm">High-speed artery linking North & South Lagos</p>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
