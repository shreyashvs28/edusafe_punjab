import React, { useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

const SEVERITY_STYLES = {
  Critical: "bg-red-500",
  High: "bg-orange-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

const AlertToast = ({ alert, language, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 8000); // Auto-dismiss after 8 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!alert) return null;

  const severityClass = SEVERITY_STYLES[alert.severity] || "bg-gray-500";

  return (
    <div className="fixed top-5 right-5 w-96 bg-white rounded-xl shadow-2xl p-4 border-l-8 border-red-500 animate-slide-in z-[100]">
       <div className={`absolute top-0 left-0 bottom-0 w-2 ${severityClass}`}></div>
       <div className="ml-3">
        <div className="flex justify-between items-start">
            <div className="flex items-center">
                <AlertTriangle className={`w-6 h-6 ${severityClass.replace('bg','text')}`} />
                <h4 className="font-bold text-lg text-gray-800 ml-2">{alert.title[language]}</h4>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                <X size={20} />
            </button>
        </div>
        <p className="text-gray-600 mt-2">{alert.description[language]}</p>
       </div>
    </div>
  );
};

export default AlertToast;
