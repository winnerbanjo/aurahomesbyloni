import * as motion from "framer-motion/client";

export default function Blog() {
  const posts = [
    {
      title: "Renting in Surulere: What Young Professionals Need to Know",
      excerpt: "From Bode Thomas commercial hubs to quiet residential Aguda, learn how to budget, inspect properties, and select the perfect location for your commute.",
      date: "August 12, 2026",
      readTime: "4 mins read",
      image: "/images/prop1.jpg"
    },
    {
      title: "How to Avoid Scams & Fake Real Estate Agents in Lagos",
      excerpt: "Renting a house can be stressful. We discuss the essential checks you must make before paying any landlord or agent in Lagos Mainland.",
      date: "August 05, 2026",
      readTime: "5 mins read",
      image: "/images/prop2.jpg"
    },
    {
      title: "Surulere Area Guide: Navigating Aguda, Yaba, and Ikeja",
      excerpt: "A deep dive into Lagos Mainland neighborhood profiles. We check school grids, road conditions, power updates, and transport bridges.",
      date: "July 28, 2026",
      readTime: "6 mins read",
      image: "/images/about.jpg"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-20"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
          Aura Homes Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Latest News & Articles</h1>
        <p className="text-stone-600">Deep market expertise, neighborhood profiles, and rental guides for Surulere.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div className="w-full h-64 bg-stone-100 rounded-3xl overflow-hidden relative mb-6 border border-stone-200">
              <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex gap-4 items-center text-stone-400 text-xs mb-3 font-semibold uppercase tracking-wider">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold group-hover:underline text-stone-800 mb-3 leading-snug">{post.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed mb-4 text-balance">{post.excerpt}</p>
            <span className="text-sm font-semibold text-black group-hover:translate-x-1 transition-transform inline-block">Read Article →</span>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
