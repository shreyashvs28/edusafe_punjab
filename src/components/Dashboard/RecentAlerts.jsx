import React from 'react';
import { AlertTriangle } from 'lucide-react';

const RecentAlerts = ({ alerts, language, t }) => {
    const severityColors = {
        Critical: "bg-red-100 text-red-800",
        High: "bg-orange-100 text-orange-800",
        Medium: "bg-yellow-100 text-yellow-800",
        Low: "bg-green-100 text-green-800",
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.recentAlerts || "Recent Alerts"}</h3>
            <div className="space-y-4">
                {alerts.slice(0, 3).map(alert => (
                    <div key={alert.id} className="border-l-4 p-3 rounded-r-lg" style={{ borderLeftColor: alert.color }}>
                        <div className="flex justify-between items-start">
                             <div>
                                <p className={`text-xs font-bold px-2 py-1 rounded-full inline-block ${severityColors[alert.severity]}`}>{alert.severity}</p>
                                <p className="font-semibold text-gray-800 mt-1">{alert.title[language]}</p>
                             </div>
                             <p className="text-xs text-gray-500 flex-shrink-0 ml-2">{new Date(alert.timestamp).toLocaleTimeString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentAlerts;
