import React, { useState, useEffect } from 'react';

const Leaderboard = ({ userData, quizScores }) => {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [filter, setFilter] = useState("Punjab"); // Default filter
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setIsLoading(true);
            setError('');
            // The API URL will be updated based on the selected filter
            let url = 'http://localhost:5000/api/leaderboard';

            // Note: Filtering by district/institution would require backend changes.
            // For now, we will fetch the general leaderboard.
            
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Could not fetch leaderboard data.');
                }
                const data = await response.json();
                setLeaderboardData(data);
            } catch (err) {
                setError(err.message);
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLeaderboard();
    }, [filter]); // Refetch when the filter changes

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">Leaderboard</h1>
            <p className="text-center text-gray-600 mb-6">See where you stand among the most prepared!</p>
            
            {/* The filter UI remains for future backend enhancements */}
            <div className="flex justify-center my-4 bg-gray-200 p-1 rounded-lg">
                 {["Punjab", "District", "Institution"].map(f => (
                    <button key={f} onClick={() => setFilter(f)} className={`w-1/3 py-2 font-semibold rounded-md ${filter === f ? 'bg-white shadow' : ''}`}>
                        {f}
                    </button>
                ))}
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg">
                {isLoading ? (
                    <p className="text-center p-8 text-gray-500">Loading Leaderboard...</p>
                ) : error ? (
                    <p className="text-center p-8 text-red-500">{error}</p>
                ) : (
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="p-3">Rank</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Institution</th>
                                <th className="p-3">District</th>
                                <th className="p-3 text-right">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboardData.map((user, index) => (
                                <tr key={index} className={`border-b ${user.name === userData?.name ? 'bg-blue-50' : ''}`}>
                                    <td className="p-3 font-bold text-lg">{index + 1}</td>
                                    <td className="p-3">{user.name}</td>
                                    <td className="p-3 text-gray-600">{user.institution}</td>
                                    <td className="p-3 text-gray-600">{user.district}</td>
                                    <td className="p-3 text-right font-bold text-blue-600">{user.points}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Leaderboard;

