import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });
    
    const timerComponents = Object.keys(timeLeft).map(interval => {
        if (!timeLeft[interval] && interval !== 'seconds' && timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0) {
            return null;
        }
        return <span key={interval} className="text-center"><span className="text-2xl font-bold">{timeLeft[interval]}</span> {interval}</span>;
    });

    return (
        <div className="flex justify-center gap-4 text-blue-800">
            {timerComponents.length ? timerComponents : <span>Drill time has passed!</span>}
        </div>
    );
};

const DrillNotifications = ({ drills }) => {
    const upcomingDrills = drills.filter(d => d.status === "Scheduled" && new Date(d.dateTime) > new Date());
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in space-y-4">
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Drills</h3>
             {upcomingDrills.length > 0 ? (
                 upcomingDrills.map(drill => (
                    <div key={drill.id} className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <p className="font-bold text-lg text-gray-700">{drill.type} Drill - {drill.location}</p>
                        <p className="text-gray-500 mb-2">{new Date(drill.dateTime).toLocaleString()}</p>
                        <CountdownTimer targetDate={drill.dateTime} />
                    </div>
                 ))
             ) : (
                <p className="text-gray-500">No upcoming drills scheduled.</p>
             )}
        </div>
    );
};

export default DrillNotifications;
