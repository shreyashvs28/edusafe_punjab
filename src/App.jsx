import React, { useState, useEffect } from "react";
import "./index.css";
import { translations } from "./data/translations";
import { fetchRealWeatherData } from "./api/weatherApi"; 

// Import ALL Pages
import HomePage from "./pages/Home";
import ModulesPage from "./pages/Modules";
import DrillsPage from "./pages/Drills";
import ContactsPage from "./pages/Contacts";
import DashboardPage from "./pages/Dashboard";
import AboutPage from "./pages/About";
import WeatherPage from "./pages/Weather";
import DrillAutomationPage from "./pages/DrillAutomation";
import PreQuizForm from "./pages/PreQuizForm";
import QuizHub from "./pages/QuizHub";
import QuizInterface from "./pages/Quiz";
import Leaderboard from "./pages/Leaderboard";
import Certificate from "./pages/Certificate";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AlertToast from "./components/AlertToast";
import AlertPanel from "./components/AlertPanel";

export default function App() {
  const [page, setPage] = useState("home");
  const [language, setLanguage] = useState("en");
  const [userData, setUserData] = useState(null);
  const [quizScores, setQuizScores] = useState({});
  const [alerts, setAlerts] = useState([]);
  const [unreadAlertCount, setUnreadAlertCount] = useState(0);
  const [currentToast, setCurrentToast] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const t = translations[language];

  useEffect(() => {
    try {
      const storedUserData = localStorage.getItem('eduSafeUserData');
      const storedQuizScores = localStorage.getItem('eduSafeQuizScores');
      if (storedUserData) setUserData(JSON.parse(storedUserData));
      if (storedQuizScores) setQuizScores(JSON.parse(storedQuizScores));
    } catch (error) {
      console.error("Failed to parse localStorage data:", error);
    }
  }, []);

  useEffect(() => {
    const checkWeatherAndNotify = async () => {
        const city = userData?.district || 'Ludhiana';
        const weatherData = await fetchRealWeatherData(city);
        if (!weatherData) return;
        let newAlert = null;
        if (weatherData.temperature > 40) {
            newAlert = { severity: 'High', type: 'Heatwave', value: `${weatherData.temperature}°C` };
        } else if (weatherData.windSpeed > 60) {
            newAlert = { severity: 'High', type: 'High Wind', value: `${weatherData.windSpeed} km/h` };
        } else if (weatherData.rainfall > 20) {
            newAlert = { severity: 'High', type: 'Flood Risk', value: `${weatherData.rainfall} mm` };
        }
        
        if (newAlert) {
            const alertObject = {
                id: `weather-${Date.now()}`,
                title: { en: `${newAlert.type} Warning`, hi: `${newAlert.type} चेतावनी`, pa: `${newAlert.type} ਚੇਤਾਵਨੀ` },
                description: { en: `Extreme conditions in ${city}. Value: ${newAlert.value}.`, hi: `${city} में తీవ్ర स्थिति। मान: ${newAlert.value}।`, pa: `${city} ਵਿੱਚ ਗੰਭੀਰ ਹਾਲਾਤ। ਮੁੱਲ: ${newAlert.value}।` },
                severity: newAlert.severity,
                color: newAlert.severity === 'High' ? '#F97316' : '#EF4444',
                timestamp: new Date(),
            };
            setAlerts(prev => [alertObject, ...prev]);
            setCurrentToast(alertObject);
            if (!isPanelOpen) setUnreadAlertCount(prev => prev + 1);
        }
    };
    const interval = setInterval(checkWeatherAndNotify, 45000);
    checkWeatherAndNotify();
    return () => clearInterval(interval);
  }, [isPanelOpen, userData, language]);

  // This handler now saves user data directly to localStorage (frontend only).
  const handlePreQuizSubmit = (formData) => {
    setUserData(formData);
    localStorage.setItem('eduSafeUserData', JSON.stringify(formData)); // Saving locally
    const moduleId = page.split('/')[1] || "1";
    setPage(`quiz/${moduleId}`);
  };

  // This handler now saves the completed quiz score to localStorage (frontend only).
  const handleQuizComplete = (moduleId, score) => {
    const newScores = { ...quizScores };
    if (!newScores[moduleId] || score > newScores[moduleId]) {
      newScores[moduleId] = score;
    }
    setQuizScores(newScores);
    localStorage.setItem('eduSafeQuizScores', JSON.stringify(newScores)); // Saving locally
    setPage('quizHub');
  };

  const handleAlertBellClick = () => { setIsPanelOpen(true); setUnreadAlertCount(0); };
  const handlePanelClose = () => setIsPanelOpen(false);
  const handleToastClose = () => setCurrentToast(null);

  const renderPage = () => {
    if (page.startsWith('preQuiz/')) {
      const moduleId = page.split('/')[1];
      if (userData) { setPage(`quiz/${moduleId}`); return null; }
      return <PreQuizForm moduleId={moduleId} onFormSubmit={handlePreQuizSubmit} language={language} />;
    }
    if (page.startsWith('quiz/')) {
      const moduleId = page.split('/')[1];
      return <QuizInterface moduleId={moduleId} language={language} t={t} onQuizComplete={handleQuizComplete} />;
    }

    const pagesNeedingUserData = ["leaderboard", "certificate", "dashboard", "quizHub"];
    if (pagesNeedingUserData.includes(page) && (!userData || !userData.name)) {
        return <PreQuizForm moduleId="1" onFormSubmit={handlePreQuizSubmit} language={language} />;
    }

    switch (page) {
      case "home": return <HomePage setPage={setPage} t={t} />;
      case "modules": return <ModulesPage language={language} t={t} />;
      case "drills": return <DrillsPage language={language} t={t} />;
      case "weather": return <WeatherPage t={t} />;
      case "drillAdmin": return <DrillAutomationPage t={t} />;
      case "contacts": return <ContactsPage language={language} t={t} />;
      case "dashboard": return <DashboardPage userData={userData} quizScores={quizScores} alerts={alerts} language={language} t={t} setPage={setPage} />;
      case "about": return <AboutPage t={t} />;
      case "quizHub": return <QuizHub setPage={setPage} quizScores={quizScores} language={language} t={t} userData={userData} />;
      case "leaderboard": return <Leaderboard userData={userData} quizScores={quizScores} />;
      case "certificate": return <Certificate userData={userData} />;
      default: return <HomePage setPage={setPage} t={t} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar setPage={setPage} language={language} setLanguage={setLanguage} t={t} unreadAlertCount={unreadAlertCount} onAlertBellClick={handleAlertBellClick} userData={userData} />
      <AlertToast alert={currentToast} language={language} onClose={handleToastClose} />
      {isPanelOpen && <AlertPanel alerts={alerts} language={language} onClose={handlePanelClose} t={t} />}
      <main>{renderPage()}</main>
      <Footer t={t} setPage={setPage} />
    </div>
  );
}

