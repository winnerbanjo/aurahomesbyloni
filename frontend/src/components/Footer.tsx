export default function Footer() {
  return (
    <footer className="bg-[#111111] text-stone-400 py-20 px-8 text-sm">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand & About */}
        <div className="md:col-span-1">
          <div className="flex flex-col items-start mb-6">
            <span className="font-serif text-xl tracking-widest text-[#D4AF37] leading-none mb-1">AURA HOMES</span>
            <span className="text-[0.65rem] tracking-[0.2em] text-[#D4AF37] font-medium leading-none">BY LONISS</span>
          </div>
          <p className="mb-6 max-w-sm text-balance">
            Extraordinary homes for extraordinary lives. We specialize in luxury real estate across premium locations in Lagos.
          </p>
        </div>

        {/* Operating Locations */}
        <div>
          <h4 className="text-white font-semibold mb-6">Primary Locations</h4>
          <ul className="space-y-3">
            <li>Surulere</li>
            <li>Yaba</li>
            <li>Gbagada</li>
            <li>Shomolu</li>
            <li>Ogudu</li>
            <li>Ikeja</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Us</h4>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition-colors">Phone Call</a></li>
            <li><a href="#" className="hover:text-white transition-colors">WhatsApp</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Email Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Book Inspection</a></li>
          </ul>
        </div>

        {/* Social & Legal */}
        <div>
          <h4 className="text-white font-semibold mb-6">Social Media</h4>
          <ul className="space-y-3">
            <li><a href="https://tiktok.com/@aurahomesbylonisss" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok (@aurahomesbylonisss)</a></li>
            <li><a href="https://instagram.com/aurahomesbylonisss" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram (@aurahomesbylonisss)</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Aura Homes by Lonis. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
