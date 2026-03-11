import React, { useState } from 'react';
import { drillsData } from '../data/drillsData';
import DrillCard from '../components/DrillCard';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

// This is a new sub-component to show the detailed view of a drill.
const DrillDetail = ({ drill, language, t, onBack }) => {
    return (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto animate-fade-in">
            <button onClick={onBack} className="flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800">
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t.backToDrills || "Back to Drills"}
            </button>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{drill.title[language]}</h2>
            <p className="text-lg text-gray-600 mb-8 italic">{drill.content.introduction[language]}</p>

            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">Steps</h3>
                    <ol className="list-decimal list-inside space-y-3 text-gray-700 text-lg">
                        {drill.content.steps.map((step, index) => <li key={index}>{step[language]}</li>)}
                    </ol>
                </div>
                 <div>
                    <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-yellow-300 pb-2 mb-4">Safety Tips</h3>
                    <ul className="space-y-3">
                        {drill.content.safetyTips.map((tip, index) => (
                            <li key={index} className="flex items-start">
                                <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-lg">{tip[language]}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const DrillsPage = ({ language, t }) => {
  // State to manage which drill is selected
  const [selectedDrill, setSelectedDrill] = useState(null);

  // If a drill is selected, show the detail view
  if (selectedDrill) {
    return (
        <div className="container mx-auto px-6 py-12">
            <DrillDetail drill={selectedDrill} language={language} t={t} onBack={() => setSelectedDrill(null)} />
        </div>
    );
  }

  // Otherwise, show the grid of all drill cards
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.drillsPageTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {drillsData.map(drill => (
          <DrillCard 
            key={drill.id} 
            drill={drill} 
            language={language} 
            onDrillSelect={setSelectedDrill} // Pass the function to select a drill
          />
        ))}
      </div>
    </div>
  );
};

export default DrillsPage;

