import React, { useState } from 'react';
import { modulesData } from '../data/modulesData';

const PreQuizForm = ({ moduleId, onFormSubmit, language }) => {
    const moduleInfo = modulesData.find(m => m.id.toString() === moduleId);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: "",
        role: "Student",
        institution: "",
        taluka: "",
        district: "",
        state: "Punjab",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        if (!formData.name || !formData.institution || !formData.district) {
            setError("Please fill in Name, Institution, and District.");
            setIsLoading(false);
            return;
        }

        try {
            // This is the new part: sending data to the backend
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to register.');
            }

            const savedUser = await response.json(); // User data from the DB, including the new _id
            onFormSubmit(savedUser); // Pass the complete user object to App.jsx

        } catch (err) {
            console.error("Registration failed:", err);
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center text-gray-800">Ready for the Quiz?</h1>
                <p className="text-center text-gray-600">You are about to start the quiz for:</p>
                <p className="text-center text-xl font-bold text-blue-600">{moduleInfo.title[language]}</p>
                <p className="text-center text-gray-600">First, please provide your details to appear on the leaderboard.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="name" onChange={handleChange} placeholder="Full Name" className="w-full p-3 border rounded-lg" required />
                    <select name="role" onChange={handleChange} className="w-full p-3 border rounded-lg">
                        <option>Student</option>
                        <option>Teacher</option>
                        <option>Staff</option>
                        <option>Public</option>
                    </select>
                    <input name="institution" onChange={handleChange} placeholder="Institution Name" className="w-full p-3 border rounded-lg" required />
                    <input name="taluka" onChange={handleChange} placeholder="Taluka / Tehsil" className="w-full p-3 border rounded-lg" />
                    <input name="district" onChange={handleChange} placeholder="District" className="w-full p-3 border rounded-lg" required />
                    
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                    <button type="submit" disabled={isLoading} className="w-full py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 disabled:bg-gray-400">
                        {isLoading ? 'Saving...' : 'Start Quiz Now'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PreQuizForm;

