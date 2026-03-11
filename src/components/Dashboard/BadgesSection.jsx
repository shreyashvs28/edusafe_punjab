import React from 'react';
import { Award, Download } from 'lucide-react';

const BadgesSection = ({ quizScores, t }) => {
    const badges = [];
    const scores = Object.values(quizScores);

    if (scores.some(s => s === 100)) badges.push({ name: "Disaster Master", icon: "🏆" });
    if (scores.some(s => s >= 80)) badges.push({ name: "Preparedness Pro", icon: "⭐" });
    if (scores.some(s => s >= 50)) badges.push({ name: "Learner", icon: "🎓" });
    
    const allQuizzesDone = Object.keys(quizScores).length === 10; // Assuming 10 modules

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg mt-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.myBadges || "My Badges"}</h3>
            {badges.length > 0 ? (
                <div className="flex justify-around items-center text-center">
                    {badges.map(badge => (
                        <div key={badge.name}>
                            <p className="text-4xl">{badge.icon}</p>
                            <p className="text-xs font-semibold text-gray-600">{badge.name}</p>
                        </div>
                    ))}
                </div>
            ) : <p className="text-sm text-gray-500">Complete quizzes to earn badges!</p>}
            
            {allQuizzesDone && (
                <button className="w-full mt-6 flex items-center justify-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                    <Download className="w-4 h-4 mr-2" />
                    {t.downloadCertificate || "Download Certificate"}
                </button>
            )}
        </div>
    );
};

export default BadgesSection;
