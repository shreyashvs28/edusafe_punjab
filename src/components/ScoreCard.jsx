import React from 'react';

const ScoreCard = ({ title, score }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg text-center">
        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        <p className="text-5xl font-bold text-blue-600 mt-2">{score}%</p>
    </div>
);

export default ScoreCard;
