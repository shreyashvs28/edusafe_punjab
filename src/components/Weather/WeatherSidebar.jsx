import React from 'react';
import { CloudRain, Sun, Flame, Waves, Wind, MapPin } from 'lucide-react';

const categories = [
    { name: 'Rainfall', icon: <CloudRain /> },
    { name: 'Heatwave', icon: <Sun /> },
    { name: 'Flood Zones', icon: <Waves /> },
    { name: 'Fire Risk', icon: <Flame /> },
    { name: 'Cyclone', icon: <Wind /> },
];

const cities = ['Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Firozpur'];

const WeatherSidebar = ({ onSelectCategory, onSelectCity, selectedCategory, selectedCity }) => {
  return (
    <div className="w-64 bg-white h-full p-4 flex-shrink-0 shadow-md">
      <div>
        <h3 className="font-bold text-gray-800 mb-4 text-lg">Weather Events</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.name}>
              <button
                onClick={() => onSelectCategory(cat.name)}
                className={`w-full flex items-center p-2 rounded-lg text-left transition-colors duration-200 ${selectedCategory === cat.name ? 'bg-blue-500 text-white shadow-sm' : 'hover:bg-gray-100'}`}
              >
                <span className="mr-3">{cat.icon}</span>
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 border-t pt-4">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center text-lg"><MapPin size={18} className="mr-2"/>Cities</h3>
         <ul className="space-y-2">
          {cities.map((city) => (
            <li key={city}>
              <button
                onClick={() => onSelectCity(city)}
                className={`w-full p-2 rounded-lg text-left text-sm transition-colors duration-200 ${selectedCity === city ? 'bg-gray-200 font-semibold text-gray-800' : 'hover:bg-gray-100 text-gray-600'}`}
              >
                {city}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherSidebar;

