import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const LiveDrillDashboard = ({ drills }) => {
    // For this simulation, we'll just show the first "Scheduled" drill as "Live"
    const liveDrill = drills.find(d => d.status === "Scheduled");

    if (!liveDrill) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Live Drill Dashboard</h3>
                <p className="text-gray-500">No drills are currently live.</p>
            </div>
        );
    }
    
    const locationCoords = [31.1471, 75.3412]; // Default to Punjab center

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg animate-fade-in space-y-4">
             <h3 className="text-2xl font-bold text-gray-800 mb-4">Live Drill: <span className="text-red-600 animate-pulse">{liveDrill.type} Drill</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold text-gray-600">Time Elapsed</p>
                    <p className="text-3xl font-bold text-gray-800">02:45</p>
                </div>
                 <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold text-gray-600">Participants</p>
                    <p className="text-3xl font-bold text-gray-800">125 / 150</p>
                </div>
                 <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="font-semibold text-gray-600">Status</p>
                    <p className="text-3xl font-bold text-green-600">In Progress</p>
                </div>
            </div>
            
             <div>
                <h4 className="font-bold text-lg text-gray-700 mb-2">Live Map - {liveDrill.location}</h4>
                <div className="h-80 w-full rounded-lg overflow-hidden">
                     <MapContainer center={locationCoords} zoom={15} style={{ height: '100%', width: '100%' }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={locationCoords}>
                            <Popup>Assembly Point for {liveDrill.location}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default LiveDrillDashboard;
