const mongoose = require('mongoose')

// db configuration
const configureDB =  () => {
    mongoose.Promise = global.Promise
    const CONNECTION_URI= process.env.MONGODB_URI || 'mongodb://localhost:27017/aug-notes-app'
    mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Connected to Datatbase')
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = configureDB
