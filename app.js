const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));