const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
port = 6060;

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
})
.then(console.log("connected to MongoDB"))
.catch((err)=>console.log(err));

app.get("/", (req, res) => {
  res.send("everything is okay!");
});

app.use("/api/auth", authRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
