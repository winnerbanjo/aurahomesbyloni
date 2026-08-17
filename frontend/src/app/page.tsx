"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      setStatus({ type: "error", message: "Please fill out all fields." });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const res = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Your property request has been submitted successfully!" });
        setFormData({ name: "", email: "", phone: "", description: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Connection error. Please try again later." });
    }
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Surulere on the island or mainland?",
      a: "Surulere is located on the mainland of Lagos State, Nigeria. It is one of the most vibrant and strategically positioned areas in Lagos, serving as a hub for commercial activities and residential living."
    },
    {
      q: "Which local government is Surulere in Lagos?",
      a: "Surulere is a local government area (LGA) in Lagos State, one of the 20 LGAs in the state's South-West geopolitical zone. It is one of Lagos' most notable LGAs due to its cultural, historical, and economic significance."
    },
    {
      q: "Is Yaba under Surulere?",
      a: "No, Yaba is not under Surulere, but it is geographically close to Surulere and shares borders with it. Yaba is an independent neighborhood and a major part of Lagos Mainland, known for its educational institutions, tech hubs, and commercial activities."
    },
    {
      q: "What does Surulere mean in Yoruba?",
      a: "The word Surulere is derived from the Yoruba language and translates to 'patience is rewarding' or 'patience is profitable'. This name carries profound cultural significance, reflecting the Yoruba people's deep belief in the virtues of patience, perseverance, and resilience."
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero & Lead Form Section */}
      <section className="px-4 md:px-8 pt-12 pb-24 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
            Aura Homes by Loniss
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1] mb-8">
            Connecting You to Real Properties to Rent, Lease, or Buy, Real Quick.
          </h1>
          <p className="text-lg text-stone-600 text-balance leading-relaxed">
            We’re more than just a service. We’re your trusted partner in finding the perfect property. With expert guidance, personalized support, and a deep understanding of Surulere’s real estate market, we make your property journey seamless and stress-free.
          </p>
        </motion.div>

        {/* Lead Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[32px] shadow-sm border border-stone-200"
        >
          <h3 className="text-xl font-semibold mb-6">Tell us what you need and we will respond in 24 hours.</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the type of house you're looking for"
                rows={4}
                className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.type === "loading"}
              className="bg-black text-white px-6 py-4 rounded-xl font-medium hover-lift mt-2 text-sm disabled:bg-stone-400 transition-colors"
            >
              {status.type === "loading" ? "Submitting..." : "Request a Property"}
            </button>

            <AnimatePresence>
              {status.type === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-emerald-600 text-sm font-medium text-center mt-2"
                >
                  {status.message}
                </motion.p>
              )}
              {status.type === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-rose-600 text-sm font-medium text-center mt-2"
                >
                  {status.message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </section>

      {/* Counters Section */}
      <section className="px-4 md:px-8 py-20 bg-stone-100 border-y border-stone-200 text-center">
        <div className="max-w-[1400px] w-full mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-12 tracking-tight">Connecting You to Exceptional Homes in Surulere.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-semibold mb-2">200+</div>
              <div className="text-stone-500 text-sm font-medium">Properties in Surulere</div>
            </div>
            <div>
              <div className="text-5xl font-semibold mb-2">150+</div>
              <div className="text-stone-500 text-sm font-medium">Landlords Connected</div>
            </div>
            <div>
              <div className="text-5xl font-semibold mb-2">100%</div>
              <div className="text-stone-500 text-sm font-medium">Trusted & Verified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="px-4 md:px-8 py-24 max-w-[1400px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="h-[450px] rounded-[32px] overflow-hidden relative shadow-sm border border-stone-100">
          <img src="/images/hero.jpg" alt="Surulere luxury real estate" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Simplifying Your Search for Homes in Surulere</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-8 text-balance">
            At RentHouseSurulere (powered by Aura Homes by Loniss), we’re reimagining how people find homes in the vibrant heart of Surulere, Lagos. Born from a desire to simplify the often stressful rental process, we are more than just a platform—we’re a trusted partner, connecting renters, landlords, and agents in a seamless and transparent way.
          </p>
          <Link href="/about" className="bg-black text-white px-6 py-3.5 rounded-full text-sm font-medium hover-lift inline-block">
            Read More About Us
          </Link>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="px-4 md:px-8 py-24 bg-white border-y border-stone-200">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">What sets us apart?</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Homes That Transform Your Living Experience</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover-lift">
              <h4 className="text-xl font-semibold mb-3">100% Trusted Properties</h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                Say goodbye to fake agents and scams. Every listing on our platform is verified for authenticity, ensuring you can rent with confidence.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover-lift">
              <h4 className="text-xl font-semibold mb-3">Inspection Support</h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                Schedule physical or virtual property inspections through our platform to confirm every detail before signing the agreement.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover-lift">
              <h4 className="text-xl font-semibold mb-3">For Property Owners</h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                We'll help you connect directly with qualified renters and get real-time updates on tenant inquiries, all while we manage the process for you.
              </p>
            </div>

            <div className="p-8 bg-stone-50 rounded-3xl border border-stone-200 hover-lift">
              <h4 className="text-xl font-semibold mb-3">Neighborhood Insights</h4>
              <p className="text-stone-600 leading-relaxed text-sm">
                Find verified details about streets, amenities, schools, road conditions, and landmarks to ensure your next property in Surulere fits your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 md:px-8 py-24 bg-black text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Live The Surulere Lifestyle.</h2>
          <p className="text-stone-400 mb-10 text-balance text-lg">
            Discover affordable, stylish, and comfortable homes designed to suit your lifestyle. Experience the joy of living in a space that truly feels like home.
          </p>
          <Link href="/request-property" className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-medium hover-lift inline-block">
            Request Property
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-8 py-24 max-w-[1000px] w-full mx-auto">
        <h3 className="text-3xl font-semibold mb-12 tracking-tight text-center">FAQs</h3>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full px-6 py-5 text-left font-semibold flex justify-between items-center hover:bg-stone-50 transition-colors"
              >
                <span>{faq.q}</span>
                <span className="text-[#D4AF37] text-lg font-bold">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {openFaq === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 md:px-8 py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">Testimonial</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tenants Feedback & Reviews</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-600 text-sm italic mb-6 leading-relaxed">
                "Finding a neat apartment in Surulere was so stress-free. The inspection support helped me double check every detail, and the contract signing was extremely fast."
              </p>
              <h5 className="font-semibold text-stone-800">Tunde A.</h5>
              <span className="text-stone-400 text-xs">Tenant in Aguda</span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-600 text-sm italic mb-6 leading-relaxed">
                "As a landlord, listing my property was the best decision. I got connected directly to qualified tenants within 48 hours without deal breakers or fake agents."
              </p>
              <h5 className="font-semibold text-stone-800">Chief Mrs. Balogun</h5>
              <span className="text-stone-400 text-xs">Landlord in Bode Thomas</span>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
              <p className="text-stone-600 text-sm italic mb-6 leading-relaxed">
                "Verified properties only! That's what made me trust Aura Homes. The neighborhood guides also gave me clear details about street lights and landmarks."
              </p>
              <h5 className="font-semibold text-stone-800">Chidi O.</h5>
              <span className="text-stone-400 text-xs">Tenant in Adeniran Ogunsanya</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
