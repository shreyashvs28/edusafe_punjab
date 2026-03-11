import React from 'react';

const BadgeDisplay = ({ score }) => {
    let badge = null;

    if (score === 100) {
        badge = { name: "Disaster Master", icon: "🏆", color: "text-yellow-500", bgColor: "bg-yellow-100" };
    } else if (score >= 80) {
        badge = { name: "Preparedness Pro", icon: "⭐", color: "text-blue-500", bgColor: "bg-blue-100" };
    } else if (score >= 50) {
        badge = { name: "Learner", icon: "🎓", color: "text-green-500", bgColor: "bg-green-100" };
    }

    if (!badge) return null;

    return (
        <div className={`p-4 rounded-lg text-center ${badge.bgColor}`}>
            <p className="font-semibold text-gray-700">You've earned a badge!</p>
            <div className={`text-4xl ${badge.color}`}>{badge.icon}</div>
            <p className={`font-bold text-xl ${badge.color}`}>{badge.name}</p>
        </div>
    );
};

export default BadgeDisplay;

