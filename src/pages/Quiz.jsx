import React, { useState } from 'react';
import { gamifiedQuizData } from '../data/gamifiedQuizData';
import BadgeDisplay from '../components/Gamification/BadgeDisplay';
import { modulesData } from '../data/modulesData';

const QuizInterface = ({ moduleId, language, t, onQuizComplete }) => {
    const quizQuestions = gamifiedQuizData[moduleId];
    const moduleInfo = modulesData.find(m => m.id.toString() === moduleId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [showResult, setShowResult] = useState(false);

    // If quiz data for the module doesn't exist
    if (!quizQuestions || quizQuestions.length === 0) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800">Quiz Not Available</h2>
                    <p className="text-gray-600 mt-2">We're working on adding a quiz for this module. Please check back later!</p>
                     <button onClick={() => onQuizComplete(moduleId, 0)} className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
                        Back to Progress
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    // Multilingual support for questions and options
    const questionText = currentQuestion.q[language] || currentQuestion.q['en'] || currentQuestion.q;
    const optionsText = currentQuestion.o.map(opt => opt[language] || opt['en'] || opt);

    const handleOptionSelect = (index) => {
        if (!submitted) {
            setSelectedOption(index);
        }
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;
        setSubmitted(true);
        if (selectedOption === currentQuestion.a) {
            setScore(prev => prev + 10);
        }
    };

    const handleNext = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizQuestions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedOption(null);
            setSubmitted(false);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="container mx-auto px-6 py-12 text-center">
                <div className="bg-white p-8 rounded-xl shadow-lg max-w-md mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h2>
                    <p className="text-lg text-gray-600">Your Score for {moduleInfo.title[language]}</p>
                    <p className="text-5xl font-bold text-blue-600 my-4">{score}</p>
                    <BadgeDisplay score={score} />
                    <button onClick={() => onQuizComplete(moduleId, score)} className="w-full mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg">
                        Back to Progress
                    </button>
                </div>
            </div>
        );
    }
    
    return (
         <div className="container mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">{moduleInfo.title[language]} Quiz</h2>
             <p className="text-center text-gray-500 mb-8">Question {currentQuestionIndex + 1}/{quizQuestions.length}</p>
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">{questionText}</h3>
                <div className="space-y-4 mb-6">
                    {optionsText.map((option, index) => {
                         let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 text-lg ";
                         if (submitted) {
                            if (index === currentQuestion.a) buttonClass += "bg-green-100 border-green-500 text-green-800";
                            else if (index === selectedOption) buttonClass += "bg-red-100 border-red-500 text-red-800";
                            else buttonClass += "bg-gray-100 border-gray-300 text-gray-500";
                         } else {
                            buttonClass += (selectedOption === index) ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:bg-blue-50";
                         }
                        return (
                            <button key={index} onClick={() => handleOptionSelect(index)} disabled={submitted} className={buttonClass}>
                                {option}
                            </button>
                        );
                    })}
                </div>
                {!submitted ? (
                     <button onClick={handleSubmit} disabled={selectedOption === null} className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold text-lg disabled:bg-gray-400">
                        Submit Answer
                    </button>
                ) : (
                    <button onClick={handleNext} className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold text-lg">
                        Next Question
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizInterface;

