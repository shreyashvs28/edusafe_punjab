import React, { useState } from 'react';
import ModuleCard from '../components/ModuleCard';
import { modulesData } from '../data/modulesData'; // We will create this data file later
import { ArrowLeft, Wind, Sun, Flame, Car, Factory, ShieldCheck } from 'lucide-react';

const ICONS = {
    Wind: <Wind className="w-8 h-8 text-blue-500" />,
    Sun: <Sun className="w-8 h-8 text-orange-500" />,
    Flame: <Flame className="w-8 h-8 text-red-500" />,
    Car: <Car className="w-8 h-8 text-indigo-500" />,
    Factory: <Factory className="w-8 h-8 text-gray-700" />,
};

const ModuleDetail = ({ module, language, t, onBack }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center text-blue-600 font-semibold mb-6 hover:text-blue-800">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.backToModules}
        </button>
        <div className="flex items-center mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
                {ICONS[module.icon] || <ShieldCheck className="w-8 h-8 text-blue-500" />}
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{module.title[language]}</h2>
        </div>

        <div className="space-y-8">
            <div>
                <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">{t.beforeDisaster}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {module.content.before.map((item, index) => <li key={index}>{item[language]}</li>)}
                </ul>
            </div>
             <div>
                <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-green-200 pb-2 mb-4">{t.duringDisaster}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {module.content.during.map((item, index) => <li key={index}>{item[language]}</li>)}
                </ul>
            </div>
             <div>
                <h3 className="text-2xl font-semibold text-gray-700 border-b-2 border-yellow-200 pb-2 mb-4">{t.afterDisaster}</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {module.content.after.map((item, index) => <li key={index}>{item[language]}</li>)}
                </ul>
            </div>
        </div>
    </div>
);


const ModulesPage = ({ language, t }) => {
  const [selectedModule, setSelectedModule] = useState(null);

  if (selectedModule) {
    return (
        <div className="container mx-auto px-6 py-12">
            <ModuleDetail module={selectedModule} language={language} t={t} onBack={() => setSelectedModule(null)} />
        </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">{t.modulesPageTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modulesData.map(module => <div key={module.id} onClick={() => setSelectedModule(module)}><ModuleCard module={module} language={language} /></div>)}
      </div>
    </div>
  );
};

export default ModulesPage;
