"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-[1400px] w-full mx-auto bg-transparent z-50 relative">
      <Link href="/" className="flex flex-col items-start group">
        <div className="flex flex-col items-start">
          <span className="font-serif text-xl tracking-widest text-[#D4AF37] leading-none mb-1 font-bold">AURA HOMES</span>
          <span className="text-[0.65rem] tracking-[0.2em] text-[#D4AF37] font-medium leading-none">BY LONISS</span>
        </div>
      </Link>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-stone-600">
        <Link href="/" className={`hover:text-black transition-colors ${pathname === '/' ? 'text-black font-semibold' : ''}`}>Home</Link>
        <Link href="/lagos-area-guide" className={`hover:text-black transition-colors ${pathname === '/lagos-area-guide' ? 'text-black font-semibold' : ''}`}>Area Guide</Link>
        <Link href="/request-property" className={`hover:text-black transition-colors ${pathname === '/request-property' ? 'text-black font-semibold' : ''}`}>Request Property</Link>
        <Link href="/blog" className={`hover:text-black transition-colors ${pathname === '/blog' ? 'text-black font-semibold' : ''}`}>Blog</Link>
      </div>
      
      <Link href="/contact-us" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover-lift">
        Contact Us
      </Link>
    </nav>
  );
}
