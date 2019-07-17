const mongoose = require('mongoose');

const MONGODB_CONNECTION = process.env.MONGO_DB_ATLAS || `mongodb://localhost/${process.env.MONGO_DATABASE}`
 
mongoose.connect(MONGODB_CONNECTION, {
    useNewUrlParser: true
})

.catch(error => {
    console.log("error at mongoose connection to database")
})

const db = mongoose.connection;

module.exports = db;