import React from 'react';

const ProgressTracker = ({ quizScores, totalModules, t }) => {
    const completedQuizzes = Object.keys(quizScores).length;
    const overallScore = Math.round((completedQuizzes / totalModules) * 100);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.preparednessProgress || "Preparedness Progress"}</h3>
            <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{t.quizzesCompleted || "Quizzes Completed"}</span>
                    <span className="text-sm font-bold text-blue-600">{completedQuizzes} / {totalModules}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${overallScore}%` }}></div>
                </div>
            </div>
            <div>
                 <p className="text-sm font-medium text-gray-700">{t.overallScore || "Overall Score"}</p>
                 <p className="text-3xl font-bold text-gray-900">{overallScore}<span className="text-lg">%</span></p>
            </div>
        </div>
    );
};

export default ProgressTracker;
