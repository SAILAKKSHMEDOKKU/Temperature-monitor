const express = require('express');
const app = express();
const port = 3000; // You can use any available port

// Replace the following mock data with actual data retrieval logic
const temperatureData = [
    { time: '1', localTemperature: 22, batteryTemperature: 30 },
    { time: '2', localTemperature: 23, batteryTemperature: 31 },
    { time: '3', localTemperature: 24, batteryTemperature: 32 },
    { time: '4', localTemperature: 25, batteryTemperature: 33 },
    { time: '5', localTemperature: 26, batteryTemperature: 34 }
];

app.get('/api/temperature', (req, res) => {
    res.json(temperatureData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
