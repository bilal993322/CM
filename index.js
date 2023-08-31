const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
const mongoose = require("mongoose")


const app = express();

// middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// to serve images inside public folder
app.use(require('./routes/Counsler'))

app.get("/" ,(req,res)=>{
  res.send("Hello World")
})
const PORT = process.env.PORT;

const CONNECTION =process.env.MONGODB_CONNECTION;
mongoose
  .connect(CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Listening at Port ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

module.exports = app