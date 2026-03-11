// This file now fetches REAL data from the OpenWeatherMap API.

// This helper function converts the complex API response into the simple format our app needs.
const transformWeatherData = (apiData) => {
    // Convert wind speed from m/s to km/h
    const windKmh = (apiData.wind.speed * 3.6).toFixed(1);
    
    // API provides rain in mm over the last hour, default to 0 if not raining.
    const rainfallMm = apiData.rain ? apiData.rain['1h'] : 0;

    return {
        city: apiData.name,
        coordinates: {
            lat: apiData.coord.lat,
            lon: apiData.coord.lon
        },
        timestamp: new Date().toLocaleTimeString(),
        temperature: parseFloat(apiData.main.temp.toFixed(1)),
        windSpeed: parseFloat(windKmh),
        rainfall: parseFloat(rainfallMm),
    };
};

// This is the main function our app will call. The name has been updated for clarity.
export const fetchRealWeatherData = async (city = 'Ludhiana') => {
    // --- IMPORTANT: PASTE YOUR FREE API KEY FROM OPENWEATHERMAP.ORG HERE ---
    const API_KEY = "b37fecb5bcca20677a12e42f9d9dd1da";
    
    const units = "metric"; // For Celsius
    const URL =  "https://api.open-meteo.com/v1/forecast?latitude=30.7333&longitude=76.7794&hourly=temperature_2m,precipitation,wind_speed_10m";

    // This check provides a clear error if the API key is missing.
    if (API_KEY === "b37fecb5bcca20677a12e42f9d9dd1da") {
        console.error("OpenWeatherMap API Key is missing from src/api/weatherApi.js");
        return null; // Return null to indicate an error.
    }

    try {
        const response = await fetch( "https://api.open-meteo.com/v1/forecast?latitude=30.7333&longitude=76.7794&hourly=temperature_2m,precipitation,wind_speed_10m");
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Weather data not found.');
        }
        const data = await response.json();
        return transformWeatherData(data);
    } catch (error) {
        console.error("Failed to fetch real weather data for", city, ":", error);
        return null; // Return null if there's an error.
    }
};

