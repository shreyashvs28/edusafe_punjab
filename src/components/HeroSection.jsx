import React from 'react';

const HeroSection = ({ t }) => {
    return (
        <div className="bg-blue-50 text-center py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">{t.heroTitle}</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t.heroSubtitle}</p>
        </div>
    );
};

export default HeroSection;
