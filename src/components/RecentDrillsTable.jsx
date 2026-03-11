import React from 'react';

const RecentDrillsTable = ({ data, language, t }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{t.recentDrills}</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-100 text-gray-600">
                        <th className="p-3 font-semibold">{t.drillType}</th>
                        <th className="p-3 font-semibold">{t.date}</th>
                        <th className="p-3 font-semibold text-right">{t.participants}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((drill, index) => (
                        <tr key={index} className="border-b">
                            <td className="p-3">{drill.type[language]}</td>
                            <td className="p-3">{drill.date}</td>
                            <td className="p-3 text-right">{drill.participants}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default RecentDrillsTable;
