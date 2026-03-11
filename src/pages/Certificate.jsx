import React from 'react';

const Certificate = ({ userData }) => {
    return (
        <div className="container mx-auto px-6 py-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Congratulations, {userData?.name || "User"}!</h1>
            <p className="text-lg text-gray-600 mb-8">You have successfully completed all disaster preparedness quizzes.</p>
            
            <div className="max-w-3xl mx-auto p-8 border-4 border-yellow-500 bg-yellow-50 rounded-lg relative">
                 <h2 className="text-3xl font-bold text-yellow-800">Certificate of Completion</h2>
                 <p className="my-4 text-gray-700">This certificate is awarded to</p>
                 <p className="text-4xl font-serif text-blue-800 my-4">{userData?.name || "A Dedicated Learner"}</p>
                 <p className="my-4 text-gray-700">for demonstrating outstanding commitment to disaster preparedness and safety education by completing all modules in the EduSafe Punjab program.</p>
                 <div className="flex justify-between items-center mt-12">
                     <div>
                        <p className="border-t-2 border-gray-400 pt-2">Signature</p>
                        <p className="text-sm text-gray-500">EduSafe Authority</p>
                     </div>
                      <div>
                        <p className="border-t-2 border-gray-400 pt-2">Date</p>
                        <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                     </div>
                 </div>
                 <div className="absolute top-4 right-4 text-5xl opacity-20">🏆</div>
            </div>
        </div>
    );
};

export default Certificate;
