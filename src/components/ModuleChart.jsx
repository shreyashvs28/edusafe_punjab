import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ModuleChart = ({ data, language, t }) => {
    const COLORS = ['#10B981', '#F59E0B'];
    const translatedData = data.map(d => ({ ...d, name: d.name[language] }));
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.moduleCompletion}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie data={translatedData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                        {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ModuleChart;
