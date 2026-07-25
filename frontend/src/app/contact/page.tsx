import * as motion from "framer-motion/client";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl font-semibold tracking-tight mb-6 text-balance">Get in touch.</h1>
          <p className="text-lg text-stone-600 mb-12">
            Whether you are looking to buy, sell, or rent, our team of experts is ready to assist you.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Phone</h3>
              <p className="text-lg font-medium">+234 (0) 800 000 0000</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">WhatsApp</h3>
              <p className="text-lg font-medium">+234 (0) 800 000 0000</p>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Email</h3>
              <p className="text-lg font-medium">hello@aurahomesbylonis.com</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-stone-200"
        >
          <h2 className="text-2xl font-semibold mb-8">Send a Message</h2>
          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full" />
              <input type="text" placeholder="Last Name" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full" />
            </div>
            <input type="email" placeholder="Email Address" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full" />
            <input type="tel" placeholder="Phone Number" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full" />
            <textarea placeholder="How can we help you?" rows={4} className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full resize-none"></textarea>
            <button className="bg-black text-white px-8 py-4 rounded-xl font-medium hover-lift mt-4">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
