import React, { useState } from 'react';
import { initialDrills } from '../data/drillAutomationData';

// Import the new components
import DrillScheduler from '../components/DrillAutomation/DrillScheduler';
import DrillNotifications from '../components/DrillAutomation/DrillNotifications';
import LiveDrillDashboard from '../components/DrillAutomation/LiveDrillDashboard';
import DrillReports from '../components/DrillAutomation/DrillReports';

const DrillAutomationPage = () => {
    const [activeTab, setActiveTab] = useState("Scheduler");
    const [drills, setDrills] = useState(initialDrills);
    
    const addDrill = (newDrill) => {
        setDrills(prev => [newDrill, ...prev]);
        setActiveTab("Notifications"); // Switch to notifications after scheduling
    };

    const renderContent = () => {
        switch (activeTab) {
            case "Scheduler": return <DrillScheduler onAddDrill={addDrill} />;
            case "Notifications": return <DrillNotifications drills={drills} />;
            case "Live Dashboard": return <LiveDrillDashboard drills={drills} />;
            case "Reports": return <DrillReports drills={drills} />;
            default: return <DrillScheduler onAddDrill={addDrill} />;
        }
    };

    const TABS = ["Scheduler", "Notifications", "Live Dashboard", "Reports"];

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Drill Automation & Management</h1>
            <div className="flex justify-center border-b mb-6">
                {TABS.map(tab => (
                     <button 
                        key={tab} 
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-3 font-semibold text-lg transition-all duration-300 ${
                            activeTab === tab 
                            ? 'border-b-4 border-blue-600 text-blue-600' 
                            : 'text-gray-500'
                        }`}
                     >
                        {tab}
                     </button>
                ))}
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default DrillAutomationPage;
