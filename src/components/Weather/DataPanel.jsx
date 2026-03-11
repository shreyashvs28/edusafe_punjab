import React from 'react';
import { Thermometer, Wind, Umbrella, MapPin } from 'lucide-react';

const DataPanel = ({ data }) => {
    // This guard clause is now more robust. It checks for the actual data (temperature)
    // instead of a property that the new API doesn't provide.
    if (!data || data.temperature === undefined) {
        return (
            <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg animate-pulse">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mt-2"></div>
            </div>
        );
    }

    // --- NEW: Severity logic is now inside the component ---
    // This makes the component self-reliant and fixes the bug.
    let severity = 'Low';
    if (data.temperature > 40) severity = 'High';
    else if (data.temperature > 35) severity = 'Medium';

    const severityStyles = {
        Low: { text: 'text-green-800', border: 'border-green-500', bg: 'bg-green-50' },
        Medium: { text: 'text-yellow-800', border: 'border-yellow-500', bg: 'bg-yellow-50' },
        High: { text: 'text-orange-800', border: 'border-orange-500', bg: 'bg-orange-50' },
        Critical: { text: 'text-red-800', border: 'border-red-500', bg: 'bg-red-50' },
    };
    
    const style = severityStyles[severity] || severityStyles.Medium;

    return (
        <div className={`w-full h-full p-4 bg-white rounded-lg shadow-lg border-l-4 ${style.border} ${style.bg}`}>
            <div className="flex justify-between items-center mb-4">
                <p className={`font-bold text-lg ${style.text}`}>{severity} Risk</p>
                <p className="text-xs text-gray-500">{data.timestamp}</p>
            </div>
            <div className="space-y-3 text-gray-700">
                <div className="flex items-center text-lg font-bold text-gray-800">
                    <MapPin size={18} className="mr-3" />
                    <span>{data.city}</span>
                </div>
                <div className="border-t my-3"></div>
                <h4 className="font-bold text-gray-800">Live Statistics</h4>
                <div className="flex items-center"><Thermometer size={18} className="mr-3" /><span>Temp: <strong>{data.temperature}°C</strong></span></div>
                <div className="flex items-center"><Wind size={18} className="mr-3" /><span>Wind: <strong>{data.windSpeed} km/h</strong></span></div>
                <div className="flex items-center"><Umbrella size={18} className="mr-3" /><span>Rain: <strong>{data.rainfall} mm</strong></span></div>
            </div>
        </div>
    );
};

export default DataPanel;

