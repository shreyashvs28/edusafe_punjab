import React from 'react';
import { modulesData } from '../data/modulesData';
import { gamifiedQuizData } from '../data/gamifiedQuizData';

const QuizHub = ({ setPage, quizScores, language, t }) => {
    
    const startQuiz = (moduleId) => {
        setPage(`quiz/${moduleId}`);
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">My Progress & Quizzes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modulesData.map(module => {
                    const score = quizScores[module.id] || 0;
                    const questionsAvailable = gamifiedQuizData[module.id]?.length > 0;
                    return (
                        <div key={module.id} className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-800">{module.title[language]}</h3>
                            <p className="text-gray-600 my-2">Highest Score: <span className="font-bold text-blue-600">{score} / 100</span></p>
                            <div className="w-full bg-gray-200 rounded-full h-4 my-2">
                                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${score}%` }}></div>
                            </div>
                            <button 
                                onClick={() => startQuiz(module.id)}
                                disabled={!questionsAvailable}
                                className={`w-full mt-4 py-2 font-semibold text-white rounded-lg ${
                                    !questionsAvailable ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
                                }`}
                            >
                                {score > 0 ? "Retake Quiz" : "Start Quiz"}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default QuizHub;
