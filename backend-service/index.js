const express = require("express");
const fs = require("fs");
const client = require("prom-client");

const app = express();

const client = require("prom-client");

// custom counter
const requestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total HTTP requests",
  });

  // middleware
app.use((req, res, next) => {
    requestCounter.inc();
    next();
  });
  

// Load songs
const songs = JSON.parse(fs.readFileSync("songs.json", "utf-8"));

// API endpoints
app.get("/", (req, res) => {
    res.json({ message: "Backend is running 🚀" });
  });

app.get("/songs", (req, res) => {
  res.json(songs);
});

app.get("/metrics", async (req, res) => {
    res.set("Content-Type", client.register.contentType);
    res.end(await client.register.metrics());
  });
  
app.listen(5000, () => {
  console.log("Node service running on 5000");
});