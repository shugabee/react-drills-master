const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); 

const {getHouses} = require('./controller.js');

app.get('/api/houses', getHouses)

app.listen(4004, () => console.log('Server running on port 4004'));