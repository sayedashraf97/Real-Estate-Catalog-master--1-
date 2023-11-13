// Import required modules such as express, cors, body-parser, and set up environmental variables using dotenv.
const express = require('express');
// Create an instance of the Express application with const app = express();.
const app = express();
const cors = require("cors");
const bodyparse = require('body-parser');
require("dotenv").config();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const {validateToken} = require("./middleware/token");
const propertyRoutes = require('./routes/properties')
const searchRoutes = require('./routes/searchRoutes');
//middleware
//Set up middleware for handling JSON requests with a size limit of 50mb using express.json.

app.use(express.json({ limit: "50mb" }));
// Set up middleware for handling urlencoded requests with a size limit of 50mb and extended option using express.urlencoded.
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
// Additional body-parser middleware is also used for JSON and urlencoded requests.
app.use(bodyParser.json({limit: "50mb"}));

app.use(
    bodyparse.urlencoded({
        limit:"50mb",
        extended: true,
        parameterLimit: 50000
    })
);
// Use app.use(cors()); to enable Cross-Origin Resource Sharing (CORS), allowing the server to respond to requests from different origins.
app.use(cors());
// Use authentication routes from the "./routes/auth" file under the path "/api/users".
app.use("/api/users",authRoutes);
// Use property routes with token validation from the "./routes/properties" file under the path "/api/property".
// app.use("/api/property",validateToken,propertyRoutes);
//Use search routes from the "./routes/searchRoutes" file under the path "/api/search".
app.use('/api/search',searchRoutes);

module.exports = app;

// server application deployed link
// https://tenxmanikanta-syed-bindhu.onrender.com/