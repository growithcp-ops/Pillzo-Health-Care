import { HeartPulse, Mail, Phone, MapPin } from "lucide-react";
import { TermsModal } from "@/components/TermsModal";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <div 
              className="flex items-center gap-2 cursor-pointer mb-4 w-fit"
              onClick={scrollToTop}
            >
              <div className="bg-primary/20 p-2 rounded-xl text-primary-foreground">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl text-white tracking-tight">Pillzo</span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-primary/80 leading-none">Health & Simplified</span>
              </div>
            </div>
            <p className="text-white/70 max-w-sm text-sm leading-relaxed mb-6">
              Your door to medical peace of mind. We connect you instantly to expert doctors because panic should never be part of your healthcare experience.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button onClick={scrollToTop} className="text-sm text-white/70 hover:text-white transition-colors">Home</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({behavior: "smooth"})} className="text-sm text-white/70 hover:text-white transition-colors">About Us</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: "smooth"})} className="text-sm text-white/70 hover:text-white transition-colors">Pricing</button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})} className="text-sm text-white/70 hover:text-white transition-colors">Contact</button>
              </li>
              <li>
                <a href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <span>support@pillzo.health</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <span>123 Care Avenue, Suite 400<br/>San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Pillzo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <TermsModal />
            <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
