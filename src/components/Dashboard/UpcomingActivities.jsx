import React from 'react';
import { modulesData } from '../../data/modulesData';
// Corrected import name from 'drillAutomationData' to 'initialDrills'
import { initialDrills } from '../../data/drillAutomationData';

const UpcomingActivities = ({ quizScores, setPage, language, t }) => {
    const incompleteQuizzes = modulesData.filter(m => !quizScores[m.id]);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.upcomingActivities || "Upcoming Activities"}</h3>
            <div>
                <h4 className="font-semibold text-gray-700 mb-2">{t.upcomingDrills || "Upcoming Drills"}</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {/* Used the correct variable name 'initialDrills' here */}
                    {initialDrills.slice(0, 2).map(drill => (
                        <li key={drill.id}>{drill.type} - {new Date(drill.date).toLocaleDateString()}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-6">
                <h4 className="font-semibold text-gray-700 mb-2">{t.quizzesToComplete || "Quizzes to Complete"}</h4>
                 <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {incompleteQuizzes.slice(0, 2).map(module => (
                        <li key={module.id} className="flex justify-between items-center">
                            <span>{module.title[language]}</span>
                            <button onClick={() => setPage(`quiz/${module.id}`)} className="text-xs bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">Start</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UpcomingActivities;

