// This file simulates a database of drills for the Drill Automation System.
export const initialDrills = [
    {
        id: 1,
        type: "Fire",
        location: "Main Academic Building",
        dateTime: new Date(new Date().getTime() + 2 * 60 * 60 * 1000), // 2 hours from now
        status: "Scheduled",
        participants: [],
        report: null,
    },
    {
        id: 2,
        type: "Earthquake",
        location: "Library Complex",
        dateTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
        status: "Scheduled",
        participants: [],
        report: null,
    },
    {
        id: 3,
        type: "Flood",
        location: "Sports Ground Area",
        dateTime: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        status: "Completed",
        participants: [
            { id: 'p1', name: 'User 1', status: 'Safe' },
            { id: 'p2', name: 'User 2', status: 'Safe' },
        ],
        report: {
            evacuationTime: "5 minutes 30 seconds",
            participantCount: 150,
            feedback: "Evacuation was orderly. Some confusion near Exit B.",
        },
    },
];
