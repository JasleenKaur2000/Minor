const express = require("express");

const app = express();

app.listen(5000, console.log("Server started on PORT 5000"));

app.use((req, res) => {
  res.send("Hello World");
});
