const express = require('express');
const app = express();
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error');
require('dotenv').config()


const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB()

app.use(express.json());

app.use('/api/auth', require('./router/auth'))

// Error Handeler
app.use(errorHandler)


const server = app.listen(PORT,()=>{console.log("This server is running on the port: "+ PORT);})

process.on("unhandledRejection", (err, promise)=>{
    console.log("Logged Error: " + err);
    server.close(()=>process.exit(1))
})