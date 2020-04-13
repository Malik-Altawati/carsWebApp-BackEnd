const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./config/database");
//ⓓⓐⓣⓐⓑⓐⓢⓔ ⓒⓞⓝⓝⓔⓒⓣⓘⓞⓝ ⓒⓗⓔⓒⓚ
db.authenticate()
  .then(() => console.log("db connected..."))
  .catch((err) => console.log(`ERROR### ${err}`));

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));


app.use("/user", require("./routes/user"));
app.use("/car", require("./routes/car"));



const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
