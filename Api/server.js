const express = require("express");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
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
app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
