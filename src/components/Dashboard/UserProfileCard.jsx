import React from 'react';
import { User, Briefcase, Building, MapPin } from 'lucide-react';

const UserProfileCard = ({ userData, t }) => {
    if (!userData) return null;

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.myProfile || "My Profile"}</h3>
            <div className="flex items-center space-x-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full">
                    <User className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-900">{userData.name}</p>
                    <p className="text-sm text-gray-500">{userData.role}</p>
                </div>
            </div>
            <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-center"><Building className="w-4 h-4 mr-2 text-gray-400" /><span>{userData.institution}</span></div>
                <div className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-gray-400" /><span>{userData.district}, {userData.taluka}</span></div>
            </div>
        </div>
    );
};

export default UserProfileCard;
