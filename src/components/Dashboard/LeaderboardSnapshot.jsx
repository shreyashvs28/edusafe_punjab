import React from 'react';
import { Trophy } from 'lucide-react';

// Using the same dummy data logic as the main leaderboard
const generateDummyData = (currentUser) => {
    const names = ["Aarav", "Vivaan", "Aditya", "Vihaan", "Arjun", "Sai", "Reyansh"];
    const users = Array.from({ length: 7 }, (_, i) => ({ name: names[i], points: Math.floor(Math.random() * 800) + 200 }));
    if (currentUser) users.push(currentUser);
    return users.sort((a, b) => b.points - a.points);
};

const LeaderboardSnapshot = ({ userData, quizScores, t }) => {
    const totalPoints = Object.values(quizScores).reduce((sum, score) => sum + score, 0);
    const currentUser = { name: userData.name, points: totalPoints };
    const leaderboard = generateDummyData(currentUser);
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.leaderboardSnapshot || "Leaderboard Snapshot"}</h3>
            <div className="space-y-3">
                {leaderboard.slice(0, 3).map((user, index) => (
                    <div key={index} className={`p-3 rounded-lg flex items-center justify-between ${user.name === userData.name ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-center">
                            <span className="font-bold text-gray-600 mr-3">{index + 1}</span>
                            <p className="font-semibold text-gray-800">{user.name}</p>
                        </div>
                        <p className="font-bold text-blue-600">{user.points} pts</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LeaderboardSnapshot;
