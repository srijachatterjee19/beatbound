const express = require("express");
const fs = require("fs");

const app = express();

// Load songs
const songs = JSON.parse(fs.readFileSync("songs.json", "utf-8"));

// API endpoints
app.get("/", (req, res) => {
    res.json({ message: "Backend is running 🚀" });
  });

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.listen(5000, () => {
  console.log("Node service running on 5000");
});