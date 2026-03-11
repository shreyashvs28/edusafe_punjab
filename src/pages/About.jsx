import React from 'react';

const AboutPage = ({ t }) => (
    <div className="container mx-auto px-6 py-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.aboutPageTitle}</h2>
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg space-y-8">
            <section>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t.projectPurpose}</h3>
                <p className="text-lg text-gray-600">{t.purposeText}</p>
            </section>
            <section>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t.whyItMatters}</h3>
                <p className="text-lg text-gray-600">{t.importanceText}</p>
            </section>
            <section>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t.ourSupporters}</h3>
                <p className="text-lg text-gray-600 mb-4">{t.supportersText}</p>
                <div className="flex flex-wrap gap-4">
                    <a href="https://ndma.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-blue-800 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200">National Disaster Management Authority (NDMA)</a>
                    <a href="https://www.pdma.punjab.gov.in/" target="_blank" rel="noopener noreferrer" className="bg-green-100 text-green-800 font-semibold px-4 py-2 rounded-lg hover:bg-green-200">Punjab State Disaster Management Authority (SDMA)</a>
                </div>
            </section>
             <section>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{t.creditsTitle}</h3>
                <p className="text-lg text-gray-600">{t.creditsText}</p>
            </section>
        </div>
    </div>
);

export default AboutPage;
