import React from 'react';
import WeatherDashboard from '../components/Weather/WeatherDashboard';

// This page now correctly passes the 't' prop down to the dashboard component.
const WeatherPage = ({ t }) => {
    return (
        <div>
            <WeatherDashboard t={t} />
        </div>
    );
};

export default WeatherPage;

