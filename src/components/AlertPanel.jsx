import React from 'react';
import { X } from 'lucide-react';

const SEVERITY_STYLES = {
  Critical: "border-red-500",
  High: "border-orange-500",
  Medium: "border-yellow-500",
  Low: "border-green-500",
};

const AlertPanel = ({ alerts, language, onClose, t }) => {
  if (!alerts) return null;

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl p-6 z-[99] animate-slide-in-panel">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">{t.navAlerts || "Notifications"}</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4 h-[calc(100vh-100px)] overflow-y-auto">
        {alerts.length > 0 ? alerts.map(alert => (
          <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${SEVERITY_STYLES[alert.severity] || 'border-gray-500'} bg-gray-50`}>
            <div className="flex justify-between items-center">
              <h4 className="font-bold text-gray-800">{alert.title[language]}</h4>
              <span className="text-xs text-gray-500">{formatTime(alert.timestamp)}</span>
            </div>
            <p className="text-gray-600 mt-1">{alert.description[language]}</p>
          </div>
        )) : (
          <p className="text-gray-500 text-center mt-10">No new notifications.</p>
        )}
      </div>
    </div>
  );
};

export default AlertPanel;
