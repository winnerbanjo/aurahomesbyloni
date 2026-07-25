import * as motion from "framer-motion/client";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[800px]"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
            Aura Homes by Lonis
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.1] mb-8">
            Extraordinary homes for extraordinary lives.
          </h1>
          <p className="text-lg md:text-xl text-stone-600 text-balance mb-12 max-w-[600px] mx-auto">
            Discover a curated collection of the finest properties across Surulere, Yaba, Gbagada, Shomolu, Ogudu, and Ikeja.
          </p>
        </motion.div>
      </section>

      {/* Property Search Bar */}
      <section className="px-4 mb-24 max-w-[900px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-4 rounded-full shadow-sm border border-stone-200 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          <input type="text" placeholder="Search by location (e.g. Surulere, Yaba)..." className="w-full bg-transparent outline-none px-4 text-stone-700" />
          <button className="bg-black text-white px-8 py-3 rounded-full text-sm font-medium hover-lift w-full md:w-auto shrink-0">
            Search Properties
          </button>
        </motion.div>
      </section>

      {/* Photography Hero Image Placeholder */}
      <section className="px-4 md:px-8 pb-32 max-w-[1400px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full h-[60vh] md:h-[80vh] bg-stone-200 rounded-[24px] md:rounded-[32px] overflow-hidden relative flex items-center justify-center text-stone-500 font-medium"
        >
          <img src="/images/hero.jpg" alt="Aura Homes Hero" className="absolute inset-0 w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Latest Properties Section */}
      <section className="px-4 md:px-8 py-24 max-w-[1400px] w-full mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Latest Properties</h2>
          <a href="#" className="text-sm font-medium hover:underline">View All</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder Cards */}
          {[1, 2, 3].map((item, index) => (
            <div key={item} className="group cursor-pointer">
              <div className="w-full h-80 bg-stone-200 rounded-2xl mb-6 overflow-hidden relative">
                <img src={`/images/prop${item}.jpg`} alt="Property" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">Luxury Duplex</h3>
                <span className="font-semibold">₦150M</span>
              </div>
              <p className="text-stone-500 text-sm mb-3">Surulere, Lagos</p>
              <div className="flex gap-4 text-sm text-stone-500">
                <span>4 Beds</span>
                <span>5 Baths</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Properties for Sale & Rent (Grid layout) */}
      <section className="px-4 md:px-8 py-24 bg-white w-full">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[500px] bg-stone-100 rounded-3xl p-12 flex flex-col justify-end hover-lift cursor-pointer">
            <h2 className="text-3xl font-semibold mb-4">Properties for Sale</h2>
            <p className="text-stone-600 mb-8 max-w-sm">Discover homes ready for your unique touch.</p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium w-fit">Browse Sales</button>
          </div>
          <div className="h-[500px] bg-stone-100 rounded-3xl p-12 flex flex-col justify-end hover-lift cursor-pointer">
            <h2 className="text-3xl font-semibold mb-4">Properties for Rent</h2>
            <p className="text-stone-600 mb-8 max-w-sm">Find the perfect space for your next chapter.</p>
            <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium w-fit">Browse Rentals</button>
          </div>
        </div>
      </section>

      {/* About Us & Why Choose Us */}
      <section className="px-4 md:px-8 py-32 max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">About Aura Homes</h2>
          <p className="text-lg text-stone-600 mb-8 text-balance leading-relaxed">
            We are dedicated to providing a premium luxury real estate experience. Operating across Surulere, Yaba, Gbagada, Shomolu, Ogudu, and Ikeja, we connect extraordinary people with extraordinary properties.
          </p>
          <h3 className="text-xl font-semibold mb-4 mt-12">Why Choose Us</h3>
          <ul className="space-y-4 text-stone-600">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              Exclusive premium listings
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              Seamless buying & renting experience
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
              Trusted by high-net-worth clients
            </li>
          </ul>
        </div>
        <div className="h-[600px] bg-stone-200 rounded-[32px] overflow-hidden relative">
          <img src="/images/about.jpg" alt="About Aura Homes" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 md:px-8 py-24 bg-black text-white text-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <div className="text-5xl font-semibold mb-2">150+</div>
            <div className="text-stone-400 text-sm">Properties Sold</div>
          </div>
          <div>
            <div className="text-5xl font-semibold mb-2">98%</div>
            <div className="text-stone-400 text-sm">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-5xl font-semibold mb-2">₦10B+</div>
            <div className="text-stone-400 text-sm">Sales Volume</div>
          </div>
          <div>
            <div className="text-5xl font-semibold mb-2">6</div>
            <div className="text-stone-400 text-sm">Premium Locations</div>
          </div>
        </div>
      </section>
    </main>
  );
}
