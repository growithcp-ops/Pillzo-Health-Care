import { Link } from "wouter";
import { HeartPulse, Mail, Phone, MapPin } from "lucide-react";
import { TermsModal } from "@/components/TermsModal";
import { createPhoneUrl, phoneNumber } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t border-border/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer mb-4 w-fit">
                <div className="bg-primary/20 p-2 rounded-xl text-primary-foreground">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <span className="font-display font-bold text-2xl text-white tracking-tight">Pillzo</span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-primary/80 leading-none">Health & Simplified</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Links Col */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/pharmacy" className="text-sm text-white/70 hover:text-white transition-colors">Pharmacy</Link>
              </li>
              <li>
                <Link href="/appointments" className="text-sm text-white/70 hover:text-white transition-colors">Appointments</Link>
              </li>
              <li>
                <a href="/appointments#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <a href={createPhoneUrl()} className="hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <span>support@pillzo.health</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="h-4 w-4 mt-0.5 text-primary/80 shrink-0" />
                <span>Odisha</span>
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
