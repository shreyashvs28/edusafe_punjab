import React from 'react';

const DrillReports = ({ drills }) => {
    const completedDrills = drills.filter(d => d.status === "Completed");

    const handleExport = (format) => {
        console.log(`Exporting reports to ${format}...`);
        // In a real app, this would trigger a download.
        alert(`Simulating report export to ${format}.`);
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Completed Drill Reports</h3>
                <div>
                    <button onClick={() => handleExport('PDF')} className="bg-red-500 text-white px-3 py-1 rounded-md text-sm font-semibold mr-2 hover:bg-red-600">Export PDF</button>
                    <button onClick={() => handleExport('Excel')} className="bg-green-500 text-white px-3 py-1 rounded-md text-sm font-semibold hover:bg-green-600">Export Excel</button>
                </div>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-100 text-gray-600">
                            <th className="p-3">Drill Type</th>
                            <th className="p-3">Location</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Evacuation Time</th>
                            <th className="p-3">Participants</th>
                        </tr>
                    </thead>
                    <tbody>
                        {completedDrills.map(drill => (
                             <tr key={drill.id} className="border-b">
                                <td className="p-3 font-semibold">{drill.type}</td>
                                <td className="p-3">{drill.location}</td>
                                <td className="p-3">{new Date(drill.dateTime).toLocaleDateString()}</td>
                                <td className="p-3">{drill.report?.evacuationTime || 'N/A'}</td>
                                <td className="p-3">{drill.report?.participantCount || 'N/A'}</td>
                             </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    );
};

export default DrillReports;
