"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RequestProperty() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    budget: "",
    propertyType: "Apartment",
    purpose: "Rent"
  });

  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message?: string }>({
    type: "idle",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setStatus({ type: "loading" });

    // Combine description with extra form fields for backend ingestion
    const fullDescription = `
      Purpose: ${formData.purpose}
      Property Type: ${formData.propertyType}
      Target Budget: ${formData.budget}
      Additional Details: ${formData.description}
    `.trim();

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
          description: fullDescription
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({ type: "success", message: "Your detailed property request has been received. Our agents will reach out within 24 hours!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          description: "",
          budget: "",
          propertyType: "Apartment",
          purpose: "Rent"
        });
      } else {
        setStatus({ type: "error", message: data.error || "Form submission failed. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", message: "Network error. Please try again later." });
    }
  };

  return (
    <main className="flex flex-col min-h-screen px-4 md:px-8 py-20 max-w-[800px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-12"
      >
        <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-6 block">
          Request A Property
        </span>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">What type of house are you looking for?</h1>
        <p className="text-stone-600">Provide details about your desired property and we will source it for you.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="bg-white p-8 md:p-12 rounded-[32px] shadow-sm border border-stone-200"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Purpose</label>
              <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm">
                <option value="Rent">Rent</option>
                <option value="Buy">Buy</option>
                <option value="Lease">Lease</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Property Type</label>
              <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm">
                <option value="Apartment">Apartment</option>
                <option value="Duplex">Duplex</option>
                <option value="Terrace">Terrace</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Office Space">Office Space</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="First and last name" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234..." required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Target Budget (NGN)</label>
            <input type="text" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g. ₦5,000,000 / year" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm" />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">Describe What You Are Looking For *</label>
            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="e.g. A neat 3-bedroom flat in Aguda with security, constant water supply, and gated compound." rows={5} required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3.5 outline-none focus:border-stone-400 transition-colors text-sm resize-none"></textarea>
          </div>

          <button type="submit" disabled={status.type === "loading"} className="bg-black text-white px-6 py-4 rounded-xl font-medium hover-lift mt-2 text-sm disabled:bg-stone-400 transition-colors">
            {status.type === "loading" ? "Submitting..." : "Send Request"}
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
    </main>
  );
}
