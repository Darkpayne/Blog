const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("everything is okay!");
});

port = 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
