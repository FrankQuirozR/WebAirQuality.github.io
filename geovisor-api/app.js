const express = require('express');
const cors = require("cors");
const axios = require('axios'); // Necesitarás instalar axios: npm install axios
const app = express();

app.use(cors());

app.get('/webair', async (req, res) => {
    try {
        // Consumir la API de canair
        const response = await axios.get('http://api.canair.io:8080/dwc/stations');
        
        // Enviar los datos recibidos al frontend
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos de canair:', error);
        res.status(500).json({ 
            error: 'Error al obtener datos de las estaciones',
            details: error.message 
        });
    }
});

app.listen(3003, () => {
    console.log("Server running on port 3003");
});