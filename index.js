const express = require("express");
const app = express();
const locationRoutes = require("./routes/location");
const fs = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//pull
const PORT = process.env.PORT || 8080;

//CORS middleware
app.use(cors());

// Middleware to give us access to req.body;
app.use(express.json());

// Middleware to serve up static files
app.use(express.static("public"));


//endpoint
app.use("/", locationRoutes);


app.listen(8080, () => {
    console.log("Server is up and running on port 8080! 🚀")
})