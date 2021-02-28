const mongoose = require('mongoose');

const connectDB = ()=>{
    mongoose.connect(process.env.ATLES_URL,{
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
})
.then(()=>{
    console.log("Database connected success!");
})
.catch(err=>console.log("Database connected fail, Error: "+ err))

}

module.exports = connectDB;