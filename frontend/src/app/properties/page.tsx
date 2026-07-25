import * as motion from "framer-motion/client";

export default function PropertiesPage() {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Properties</h1>
        
        {/* Filters */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200 mb-12 flex flex-wrap gap-4 items-center">
          <input type="text" placeholder="Location or keyword" className="flex-1 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none min-w-[200px]" />
          <select className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none min-w-[150px]">
            <option>All Types</option>
            <option>Duplex</option>
            <option>Terrace</option>
            <option>Apartment</option>
          </select>
          <select className="bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 outline-none min-w-[150px]">
            <option>Any Price</option>
            <option>Under ₦50M</option>
            <option>₦50M - ₦150M</option>
            <option>Over ₦150M</option>
          </select>
          <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover-lift w-full md:w-auto">
            Apply Filters
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item, i) => (
            <motion.a
              key={item}
              href={`/properties/luxury-villa-${item}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer block"
            >
              <div className="w-full h-80 bg-stone-200 rounded-2xl mb-6 overflow-hidden relative">
                <img src={`/images/prop${(i % 4) + 1}.jpg`} alt="Property" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold z-10">For Sale</div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg group-hover:underline">Luxury Villa {item}</h3>
                <span className="font-semibold">₦250M</span>
              </div>
              <p className="text-stone-500 text-sm mb-3">Yaba, Lagos</p>
              <div className="flex gap-4 text-sm text-stone-500">
                <span>5 Beds</span>
                <span>6 Baths</span>
                <span>500 sqm</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
