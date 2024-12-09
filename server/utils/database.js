require('dotenv').config()
const mongoose = require('mongoose');
const keys = require('../config/keys');

const {database} = keys

const setupDB = async () => {
    try {
        await mongoose.connect(database.url).then(result => {
            console.log('connected to database')
        }).catch(err => {
            console.log(err)
        })
    } catch (err) {
        console.log(err)
        return null
    }
}

module.exports = setupDB;