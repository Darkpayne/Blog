const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const mailRoute = require("./routes/mailer");
const refreshToken = require("./routes/refreshToken");
const logout = require("./routes/logout");
const userRoute = require("./routes/users");
const commentRoute = require("./routes/comments");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
port = 6060;
const verifyJWt = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser');

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
// app.use("/", express.static(path.join(__dirname, "../Client/build")));

// app.use(express.urlencoded());
app.use(cors()); // TODO configure Cors

app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .then(console.log("connected to MongoDB"))
  .catch((err) => console.log(err));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// to download a file
app.get("/api/download", (req, res) => {
  res.download("./CV.pdf", "joshua.pdf");
});

// uploading a file/picture
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
}); 

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded");
});

// End file upload

app.get("/", (req, res) => {
  res.send("everything is okay!");
}); 
 
app.use("/api/sendMail", mailRoute);
app.use("/api/auth", authRoute);
app.use("/api/refresh", refreshToken);
app.use("/api/logout", logout);
app.use("/api/categories", categoryRoute);
app.use("/api/post", postRoute);
app.use("/api/user", userRoute); 
app.use("/api/comment", commentRoute); 
// app.use(verifyJWt);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
