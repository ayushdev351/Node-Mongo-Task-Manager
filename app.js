// modules
const express = require('express');
const app = express();

const port = 3000;
//environment variables
require('dotenv').config();

// files
const tasks = require('./routes/tasks.js');
const connectDb = require('./db/connect.js');


//middlewares
app.use(express.json());
app.use(express.static('./public'));

//routes
app.use('/api/v1/tasks', tasks);


//connection
const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI);
        app.listen(port, console.log(`Server running on port ${port}.....`));
    }
    catch(err){
        console.error(err);
    }
}

start();
