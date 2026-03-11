import React, { useState } from 'react';

const DrillScheduler = ({ onAddDrill }) => {
    const [drillType, setDrillType] = useState("Fire");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!location || !date || !time) {
            alert("Please fill all fields.");
            return;
        }
        
        const newDrill = {
            id: Date.now(),
            type: drillType,
            location,
            dateTime: new Date(`${date}T${time}`),
            status: "Scheduled",
            participants: [],
            report: null,
        };
        onAddDrill(newDrill);
        // Reset form
        setLocation("");
        setDate("");
        setTime("");
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Schedule a New Drill</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-semibold text-gray-600">Drill Type</label>
                    <select value={drillType} onChange={(e) => setDrillType(e.target.value)} className="w-full p-2 border rounded-lg mt-1">
                        <option>Fire</option>
                        <option>Earthquake</option>
                        <option>Flood</option>
                        <option>Cybersecurity</option>
                    </select>
                </div>
                 <div>
                    <label className="block font-semibold text-gray-600">Location</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="e.g., Main Academic Building" className="w-full p-2 border rounded-lg mt-1" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div>
                        <label className="block font-semibold text-gray-600">Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-2 border rounded-lg mt-1" />
                    </div>
                     <div>
                        <label className="block font-semibold text-gray-600">Time</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full p-2 border rounded-lg mt-1" />
                    </div>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300">
                    Schedule Drill
                </button>
            </form>
        </div>
    );
};

export default DrillScheduler;
