import React, { useState, useEffect } from 'react';
import WeatherSidebar from './WeatherSidebar';
import MapContainer from './MapContainer';
import DataPanel from './DataPanel';
// Corrected the import name to match the API file
import { fetchRealWeatherData } from '../../api/weatherApi';

const WeatherDashboard = ({ t }) => {
  const [selectedCategory, setSelectedCategory] = useState('Rainfall');
  const [selectedCity, setSelectedCity] = useState('Ludhiana');
  const [weatherData, setWeatherData] = useState(null); // Start with null data

  useEffect(() => {
    const getData = async () => {
        // Now calling the correct function name
        const data = await fetchRealWeatherData(selectedCity);
        setWeatherData(data);
    };

    getData();
  }, [selectedCity]); // Refetch data when city changes

  // The category selection is now for display/logic, not API call, as the new API doesn't use it.
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex h-[calc(100vh-80px)] bg-gray-100">
      <WeatherSidebar 
        onSelectCategory={handleSelectCategory} 
        onSelectCity={setSelectedCity} 
        selectedCategory={selectedCategory}
        selectedCity={selectedCity}
      />
      
      <div className="flex-grow p-4">
        <div className="w-full h-full shadow-lg rounded-xl overflow-hidden">
          <MapContainer category={selectedCategory} data={weatherData} />
        </div>
      </div>

      <div className="w-72 flex-shrink-0 p-4">
          <DataPanel data={weatherData} />
      </div>
    </div>
  );
};

export default WeatherDashboard;

