// This file now fetches REAL data from the Open-Meteo API.

// This helper function is now updated to parse the Open-Meteo response format.
const fetchSimulatedWeatherData = (apiData, city) => {
    const { hourly } = apiData;

    // Find the index for the current hour
    const now = new Date();
    const currentHourISO = now.toISOString().slice(0, 14) + "00:00"; // Format: YYYY-MM-DDTHH:00:00
    const currentIndex = hourly.time.findIndex(time => time.startsWith(now.toISOString().slice(0, 13)));
    
    // If we can't find the current hour, default to the first available entry
    const index = currentIndex !== -1 ? currentIndex : 0;

    return {
        city: city, // City name is passed in now
        coordinates: {
            lat: apiData.latitude,
            lon: apiData.longitude
        },
        timestamp: new Date().toLocaleTimeString(),
        // Get the data from the arrays at the current index
        temperature: parseFloat(hourly.temperature_2m[index].toFixed(1)),
        windSpeed: parseFloat(hourly.wind_speed_10m[index].toFixed(1)),
        rainfall: parseFloat(hourly.precipitation[index].toFixed(1)),
    };
};

// This is the main function our app will call.
export const fetchRealWeatherData = async (city = 'Ludhiana') => {
    // Map city names to coordinates for the API call
    const cityCoordinates = {
        Amritsar: { lat: 31.63, lon: 74.87 },
        Ludhiana: { lat: 30.90, lon: 75.85 },
        Jalandhar: { lat: 31.32, lon: 75.57 },
        Patiala: { lat: 30.34, lon: 76.38 },
        Bathinda: { lat: 30.21, lon: 74.94 },
        Firozpur: { lat: 30.92, lon: 74.60 },
        Chandigarh: { lat: 30.73, lon: 76.77 },
    };

    const coords = cityCoordinates[city] || cityCoordinates['Ludhiana'];
    
    // The API URL is now dynamic based on the selected city's coordinates.
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&hourly=temperature_2m,precipitation,wind_speed_10m`;

    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Weather data not found.');
        }
        const data = await response.json();
        // Transform the data before returning it to the app.
        return fetchSimulatedWeatherData(data, city);
    } catch (error) {
        console.error("Failed to fetch real weather data for", city, ":", error);
        return null; // Return null if there's an error.
    }
};

