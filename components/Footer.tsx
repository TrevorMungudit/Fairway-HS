import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { SCHOOL_NAME, SCHOOL_EMAIL, SCHOOL_PHONE, SCHOOL_LOCATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-12 pb-8 px-6 rounded-t-[2.5rem] mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Slogan */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">{SCHOOL_NAME}</h3>
            <p className="text-sm text-gray-400">Toil and Preserve</p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering the next generation of leaders through holistic education and academic excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-brand-accent">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-brand-accent" />
                {SCHOOL_LOCATION}
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-brand-accent" />
                {SCHOOL_PHONE}
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-brand-accent" />
                {SCHOOL_EMAIL}
              </li>
            </ul>
          </div>

          {/* Social & Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg text-brand-accent">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors text-white">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-accent transition-colors text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
