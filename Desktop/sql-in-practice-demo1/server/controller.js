require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

const userId = 4;
const clientId =3;


module.exports = {
    getUserInfo: (req, res) => {
        sequelize.query(`SELECT * FROM cc_clients AS c
        JOIN cc_users AS u ON c.user_id = u.user_id
        WHERE u.user_id = ${userId}`)
            .then((dbResult) => {
                res.status(200).send(dbResult[0]);
            })
            .catch((err) => console.log(err));
    },

    updateUserInfo: (req, res) => {
        let {
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            city,
            state,
            zipCode
        } = req.body

        sequelize.query(`update cc_users set first_name = '${firstName}', 
        last_name = '${lastName}', 
        email = '${email}', 
        phone_number = ${phoneNumber}
        where user_id = ${userId};
        
        update cc_clients set address = '${address}', 
        city = '${city}', 
        state = '${state}', 
        zip_code = ${zipCode}
        where user_id = ${userId};`)
            .then(() => res.sendStatus(200))
            .catch(err => console.log(err))

    },

    getUserAppt: (req, res) => {
        sequelize.query(`select * from cc_appointments
        where client_id = ${clientId}
        order by date desc;`)
            .then(dbResult => res.status(200).send(dbResult[0]))
            .catch((err) => console.log(err))
    }, 

    requestAppointment: (req, res) => {
        const {date, service} = req.body 

        sequelize.query(`insert into cc_appointments (client_id, date, service_type, notes, approved, completed)
        values (${clientId}, '${date}', '${service}', '', false, false)
        returning *;`)
            .then((dbResult) => res.status(200).send(dbResult[0]))
            .catch((err) => console.log(err))
    }
    };