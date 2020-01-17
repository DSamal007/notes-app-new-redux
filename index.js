const express = require('express')
const app = express()
// const port = 3005;
const port = process.env.PORT || 3005;
const path = require('path') 
const configureDB = require('./config/database')
const router = require('./config/routes')
const cors = require('cors')

configureDB()

app.use(cors())
app.use(express.json())

// ROute Handlers || Request Handlers
// app.get('/', (req,res) => {
//     res.send('Welcome to the page')
// })

app.use('/',router)

app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
})

app.listen(port, () => {
    console.log('listening to port,',port)
})
