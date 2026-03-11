import React, { useState } from 'react';
import { ShieldCheck, Languages, User, Star, Award } from 'lucide-react';
import AlertBell from './AlertBell';

const Navbar = ({ setPage, language, setLanguage, t, unreadAlertCount, onAlertBellClick, userData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  // This now includes the keys for the new pages
  const navLinks = [
    { name: t.navHome, page: 'home' },
    { name: t.navModules, page: 'modules' },
    { name: t.navDrills, page: 'drills' },
    { name: t.navWeather, page: 'weather' }, // Using new translation
    { name: t.navDrillAdmin, page: 'drillAdmin' }, // Using new translation
    { name: t.navDashboard, page: 'dashboard' },
    { name: t.navContacts, page: 'contacts' },
    { name: t.navAbout, page: 'about' },
  ];
  
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <ShieldCheck className="w-8 h-8 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-800" onClick={() => setPage('home')} style={{cursor: 'pointer'}}>{t.appName}</h1>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(link => (
            <a key={link.page} href="#" onClick={(e) => { e.preventDefault(); setPage(link.page); }} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-sm">
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
             {/* Language Dropdown */}
             <div className="relative">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center p-2 border rounded-lg hover:bg-gray-100">
                    <Languages className="w-5 h-5 text-gray-600"/>
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl z-20">
                       <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('en'); setDropdownOpen(false); }} className="block px-4 py-2 text-gray-800 hover:bg-blue-50">English</a>
                       <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('hi'); setDropdownOpen(false); }} className="block px-4 py-2 text-gray-800 hover:bg-blue-50">हिन्दी (Hindi)</a>
                       <a href="#" onClick={(e) => { e.preventDefault(); setLanguage('pa'); setDropdownOpen(false); }} className="block px-4 py-2 text-gray-800 hover:bg-blue-50">ਪੰਜਾਬੀ (Punjabi)</a>
                    </div>
                )}
            </div>
            
            <AlertBell unreadCount={unreadAlertCount} onClick={onAlertBellClick} />
            
            {/* User Menu */}
            <div className="relative">
                <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center p-2 bg-blue-100 rounded-full hover:bg-blue-200">
                    <User className="w-5 h-5 text-blue-700"/>
                </button>
                {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl z-20">
                        <div className="p-4 border-b">
                           <p className="font-bold text-gray-800">{userData?.name || "Guest"}</p>
                           <p className="text-sm text-gray-500">{userData?.role || ""}</p>
                        </div>
                       <a href="#" onClick={(e) => { e.preventDefault(); setPage('quizHub'); setUserMenuOpen(false); }} className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50">
                           <Star className="w-5 h-5 mr-3 text-yellow-500"/> My Progress
                       </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setPage('leaderboard'); setUserMenuOpen(false); }} className="flex items-center px-4 py-3 text-gray-800 hover:bg-blue-50">
                           <Award className="w-5 h-5 mr-3 text-green-500"/> Leaderboard
                       </a>
                    </div>
                )}
            </div>
             <button onClick={() => setPage('quizHub')} className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform duration-300 transform hover:scale-105">
              {t.takeQuiz}
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

