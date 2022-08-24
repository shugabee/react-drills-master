
const data = require('./db.json')
const houseId = 4;

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(data);
    }

    // deleteHouse: (req, res) => {

    // }, 

    // createHouse: (req, res) => {

    // }, 

    // updateHouse: (req, res) => {

    // }

}