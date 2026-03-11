import React from 'react';
import HeroSection from '../components/HeroSection';
import { BookOpen, ShieldAlert, BrainCircuit, LayoutDashboard } from 'lucide-react';

const HomePage = ({ setPage, t }) => {
    const quickLinks = [
        { title: t.cardModulesTitle, text: t.cardModulesText, icon: <BookOpen className="w-10 h-10 text-blue-600 mb-4" />, page: 'modules' },
        { title: t.cardDrillsTitle, text: t.cardDrillsText, icon: <ShieldAlert className="w-10 h-10 text-blue-600 mb-4" />, page: 'drills' },
        { title: t.cardQuizTitle, text: t.cardQuizText, icon: <BrainCircuit className="w-10 h-10 text-blue-600 mb-4" />, page: 'quiz' },
        { title: t.cardDashboardTitle, text: t.cardDashboardText, icon: <LayoutDashboard className="w-10 h-10 text-blue-600 mb-4" />, page: 'dashboard' },
    ];

    return (
        <div>
            <HeroSection t={t} />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {quickLinks.map(link => (
                        <div key={link.page} onClick={() => setPage(link.page)} className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col items-center justify-start cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            {link.icon}
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{link.title}</h3>
                            <p className="text-gray-600">{link.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white py-12">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-2xl font-semibold text-gray-700 italic">{t.awarenessSlogan}</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
