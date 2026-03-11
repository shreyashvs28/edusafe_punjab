import React from 'react';
// Yahan naye icons import kiye gaye hain
import { ShieldCheck, Wind, Sun, Flame, Car, Factory, Activity, Zap, Droplets, FlaskConical, Users } from 'lucide-react';

// Neeche ICONS object mein naye icons jode gaye hain
const ICONS = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-500" />,
  Wind: <Wind className="w-8 h-8 text-gray-500" />,
  Sun: <Sun className="w-8 h-8 text-orange-500" />,
  Flame: <Flame className="w-8 h-8 text-red-500" />,
  Car: <Car className="w-8 h-8 text-indigo-500" />,
  Factory: <Factory className="w-8 h-8 text-gray-700" />,
  Activity: <Activity className="w-8 h-8 text-purple-500" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500" />,
  Droplets: <Droplets className="w-8 h-8 text-cyan-500" />,
  FlaskConical: <FlaskConical className="w-8 h-8 text-green-500" />,
  Users: <Users className="w-8 h-8 text-pink-500" />,
};

const ModuleCard = ({ module, language, onModuleSelect }) => {
  // Is component ke baaki code mein koi badlav nahi hai
  return (
    <div 
      onClick={() => onModuleSelect(module)} 
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4">
        {ICONS[module.icon] || <ShieldCheck className="w-8 h-8 text-blue-500" />}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title[language]}</h3>
      <p className="text-gray-600 flex-grow">{module.content.introduction[language]}</p>
    </div>
  );
};

export default ModuleCard;

