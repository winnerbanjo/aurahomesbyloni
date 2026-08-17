"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          description: `General Inquiry: ${formData.message}`
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Thank you for contacting us! We'll get back to you shortly." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Message failed to send." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Connection error. Please try again later." });
    }
  };

  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[1400px] w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl font-semibold tracking-tight mb-6 text-balance">Contact Us</h1>
          <p className="text-lg text-stone-600 mb-12 max-w-md">
            Have questions about a listing or want to list your property with us? Reach out, we are here to help.
          </p>

          <div className="space-y-8 mb-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">WhatsApp Support</h3>
              <a href="https://wa.me/2348000000000" className="text-lg font-medium text-[#D4AF37] hover:underline">+234 (0) 800 000 0000</a>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Email Address</h3>
              <a href="mailto:hello@aurahomesbylonis.com" className="text-lg font-medium hover:underline">hello@aurahomesbylonis.com</a>
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-widest uppercase text-stone-500 mb-2">Location</h3>
              <p className="text-lg font-medium">Surulere, Lagos Mainland, Nigeria</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-stone-200"
        >
          <h2 className="text-2xl font-semibold mb-8">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full text-sm" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full text-sm" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full text-sm" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} className="bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 outline-none w-full resize-none text-sm"></textarea>
            
            <button type="submit" disabled={status.type === "loading"} className="bg-black text-white px-8 py-4 rounded-xl font-medium hover-lift mt-4 text-sm disabled:bg-stone-400 transition-colors">
              {status.type === "loading" ? "Sending..." : "Send Message"}
            </button>

            <AnimatePresence>
              {status.type === "success" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-emerald-600 text-sm font-medium text-center mt-2">
                  {status.message}
                </motion.p>
              )}
              {status.type === "error" && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-rose-600 text-sm font-medium text-center mt-2">
                  {status.message}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
