const dns = require("dns");

// Fix MongoDB Atlas DNS/SRV connection issue
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });

// Start Server
app.listen(PORT, () => {
  console.log(`App is started on port ${PORT}`);
});