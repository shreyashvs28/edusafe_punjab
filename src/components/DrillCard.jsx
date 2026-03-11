import React from 'react';
// Yahan naye drills ke liye zaroori icons import kiye gaye hain
import { ShieldAlert, Flame, Wind, Activity, Sun, Factory, Zap, HeartPulse, Siren, Users, FlaskConical } from 'lucide-react';

// Neeche ICONS object mein naye icons jode gaye hain
const ICONS = {
  ShieldAlert: <ShieldAlert className="w-8 h-8 text-green-500" />,
  Flame: <Flame className="w-8 h-8 text-red-500" />,
  Wind: <Wind className="w-8 h-8 text-gray-500" />,
  Activity: <Activity className="w-8 h-8 text-purple-500" />,
  Sun: <Sun className="w-8 h-8 text-orange-500" />,
  Factory: <Factory className="w-8 h-8 text-gray-700" />,
  Siren: <Siren className="w-8 h-8 text-blue-500" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-rose-500" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500" />,
  Users: <Users className="w-8 h-8 text-pink-500" />,
  FlaskConical: <FlaskConical className="w-8 h-8 text-teal-500" />,
};

const DrillCard = ({ drill, language, onDrillSelect }) => {
  return (
    <div 
      onClick={() => onDrillSelect(drill)}
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="mb-4">
        {ICONS[drill.icon] || <ShieldAlert className="w-8 h-8 text-green-500" />}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{drill.title[language]}</h3>
      {/* Yeh ab naye data structure se introduction dikhayega */}
      <p className="text-gray-600 flex-grow">{drill.content.introduction[language]}</p>
    </div>
  );
};

export default DrillCard;

