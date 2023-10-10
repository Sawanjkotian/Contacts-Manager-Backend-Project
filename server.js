const express = require('express');
const connectDB = require('./config/dbconnection');
const errorHandler = require('./middleware/errorHandler');

const dotenv = require("dotenv").config();

connectDB();
const app = express();
 
const port = process.env.PORT || 5000;

app.use(express.json({}));

app.use("/api/contact", require("./routes/contactRoute"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); 

app.listen(port, ()=>{
    console.log(`server running on port ${port}`);
});

