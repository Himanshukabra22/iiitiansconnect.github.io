const mongoose = require("mongoose")
const {MONGO} = require("../../ignore")

// connecting to database
mongoose.connect(`${MONGO}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    // autoIndex: true, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}).then(() =>{
    console.log("Connection is successful"); 
}).catch((e) =>{
    console.log("No connection"); 
    console.log(e); 
});
