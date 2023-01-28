const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("public"));

// routing

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/cars", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/cars.html"));
});

app.use(express.static(__dirname + "/public"));

app.listen(8000, "0.0.0.0", () => {
  console.log("Server sudah berjalan, silahkan buka http://0.0.0.0:%d", 8000);
});

app.get("*", function (req, res) {
  res.send("Halaman Tidak ditemukan!", 404);
});
