import * as motion from "framer-motion/client";

export default function SinglePropertyPage() {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-12 max-w-[1400px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-8">
          <span className="bg-stone-200 text-stone-800 px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">For Sale</span>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Premium Detached Duplex</h1>
          <p className="text-xl text-stone-500">Surulere, Lagos</p>
        </div>

        {/* Gallery Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 h-[60vh] min-h-[400px]">
          <div className="md:col-span-3 bg-stone-200 rounded-3xl h-full w-full overflow-hidden relative">
            <img src="/images/hero.jpg" alt="Property main" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            <div className="bg-stone-200 rounded-2xl flex-1 overflow-hidden relative">
              <img src="/images/prop1.jpg" alt="Property interior 1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="bg-stone-200 rounded-2xl flex-1 overflow-hidden relative">
              <img src="/images/prop2.jpg" alt="Property interior 2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex gap-8 border-b border-stone-200 pb-8 mb-8 text-lg font-medium">
              <span>₦350,000,000</span>
              <span className="text-stone-400">|</span>
              <span>5 Beds</span>
              <span className="text-stone-400">|</span>
              <span>6 Baths</span>
              <span className="text-stone-400">|</span>
              <span>650 sqm</span>
            </div>

            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-stone-600 leading-relaxed mb-12 text-balance">
              Experience the pinnacle of luxury in this exquisitely finished detached duplex. Located in a serene and secure neighborhood, this property features automated systems, a private pool, a fully fitted contemporary kitchen, and expansive living spaces designed for ultimate comfort and entertainment.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-4 text-stone-600 mb-12">
              <li className="flex items-center gap-2">✓ Swimming Pool</li>
              <li className="flex items-center gap-2">✓ Fully Fitted Kitchen</li>
              <li className="flex items-center gap-2">✓ CCTV Security</li>
              <li className="flex items-center gap-2">✓ Ample Parking</li>
              <li className="flex items-center gap-2">✓ BQ</li>
              <li className="flex items-center gap-2">✓ Water Treatment</li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Interested in this property?</h3>
              <form className="flex flex-col gap-4 mb-6">
                <input type="text" placeholder="Your Name" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none" />
                <input type="email" placeholder="Your Email" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none" />
                <input type="tel" placeholder="Your Phone" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 outline-none" />
                <button className="bg-black text-white px-6 py-4 rounded-xl font-medium hover-lift mt-2">
                  Book Inspection
                </button>
              </form>
              <div className="flex gap-4">
                <button className="flex-1 bg-[#25D366] text-white px-4 py-3 rounded-xl font-medium hover-lift flex items-center justify-center gap-2 text-sm">
                  WhatsApp
                </button>
                <button className="flex-1 bg-stone-100 text-stone-800 px-4 py-3 rounded-xl font-medium hover-lift flex items-center justify-center gap-2 text-sm border border-stone-200">
                  Call Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
