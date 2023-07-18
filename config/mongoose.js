const mongoose = require('mongoose');

// creating the database on the cloud
const DB = "mongodb://argha:argha234@ac-oaaqjwl-shard-00-00.0wvn1g6.mongodb.net:27017,ac-oaaqjwl-shard-00-01.0wvn1g6.mongodb.net:27017,ac-oaaqjwl-shard-00-02.0wvn1g6.mongodb.net:27017/csv-upload?ssl=true&replicaSet=atlas-cu1ow8-shard-0&authSource=admin&retryWrites=true&w=majority";

// creating the connection
mongoose.connect(DB).then(()=> {
    console.log("Connection successful");
}).catch((err)=> console.log("No connection : ",err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function() {
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;