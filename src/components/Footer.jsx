import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Footer = ({ t, setPage }) => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-6 py-8">
        {/* Bottom section with copyright */}
        <div className="pt-6 text-center text-gray-500 text-sm">
            <div className="flex items-center justify-center mb-2">
                <ShieldCheck className="w-5 h-5 text-blue-400 mr-2" />
                <span className="font-bold text-base text-gray-300">{t.appName}</span>
            </div>
          <p>{t.footerSlogan}</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} {t.appName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

