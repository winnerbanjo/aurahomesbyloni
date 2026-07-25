"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] w-full mx-auto">
      <Link href="/" className="flex flex-col items-center justify-center group">
        {/* Placeholder for uploaded logo. We style the text to resemble the gold/black logo if image fails */}
        <div className="relative">
          <img src="/logo.png" alt="Aura Homes Logo" className="h-12 w-auto hidden" onError={(e) => e.currentTarget.style.display = 'none'} />
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl tracking-widest text-[#D4AF37] leading-none mb-1">AURA HOMES</span>
            <span className="text-[0.65rem] tracking-[0.2em] text-[#D4AF37] font-medium leading-none">BY LONISS</span>
          </div>
        </div>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
        <Link href="/properties" className={`hover:text-black transition-colors ${pathname === '/properties' ? 'text-black font-semibold' : ''}`}>Properties</Link>
        <Link href="/about" className={`hover:text-black transition-colors ${pathname === '/about' ? 'text-black font-semibold' : ''}`}>About Us</Link>
        <Link href="/contact" className={`hover:text-black transition-colors ${pathname === '/contact' ? 'text-black font-semibold' : ''}`}>Contact</Link>
      </div>
      
      <Link href="/contact" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover-lift">
        Book Inspection
      </Link>
    </nav>
  );
}
