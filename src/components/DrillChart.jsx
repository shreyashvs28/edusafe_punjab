import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DrillChart = ({ data, language, t }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.drillParticipation}</h3>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data.map(d => ({ name: d.name[language], participation: d.participation }))} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="participation" fill="#3B82F6" />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export default DrillChart;
