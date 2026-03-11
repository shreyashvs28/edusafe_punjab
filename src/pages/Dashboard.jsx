import React from 'react';
import UserProfileCard from '../components/Dashboard/UserProfileCard';
import ProgressTracker from '../components/Dashboard/ProgressTracker';
import RecentAlerts from '../components/Dashboard/RecentAlerts';
import UpcomingActivities from '../components/Dashboard/UpcomingActivities';
import LeaderboardSnapshot from '../components/Dashboard/LeaderboardSnapshot';
import BadgesSection from '../components/Dashboard/BadgesSection';
import { modulesData } from '../data/modulesData';

const DashboardPage = ({ userData, quizScores, alerts, language, t, setPage }) => {
    // --- PROBLEM SOLVED ---
    // This check prevents the page from crashing if no user data exists.
    // Instead, it shows a helpful message guiding the user.
    if (!userData) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800">Welcome to Your Dashboard!</h2>
                    <p className="text-gray-600 mt-4 mb-6">
                        This is your personal control center. To see your progress, track your quiz scores, and earn badges, you first need to complete a quiz and create your profile.
                    </p>
                    <button 
                        onClick={() => setPage('quizHub')} 
                        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg transition-transform transform hover:scale-105"
                    >
                        Go to Quizzes
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                {t.dashboardWelcome || "Welcome Back"}, {userData.name.split(' ')[0]}!
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-1 space-y-6">
                    <UserProfileCard userData={userData} t={t} />
                    <ProgressTracker quizScores={quizScores} totalModules={modulesData.length} t={t} />
                </div>
                
                {/* Center Column */}
                <div className="lg:col-span-1 space-y-6">
                    <RecentAlerts alerts={alerts} language={language} t={t} />
                    <UpcomingActivities quizScores={quizScores} setPage={setPage} language={language} t={t} />
                </div>

                {/* Right Column */}
                <div className="lg:col-span-1 space-y-6">
                    <LeaderboardSnapshot userData={userData} quizScores={quizScores} t={t} />
                    <BadgesSection quizScores={quizScores} t={t} />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;

