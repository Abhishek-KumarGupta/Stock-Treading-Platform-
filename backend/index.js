const dns = require("dns");

// MongoDB Atlas DNS/SRV connection problem ko fix karne ke liye
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// Holdings aur Positions ke models import kar rahe hain
const { HoldingsModel } = require("./model/HoldingsModels");
const { PositionsModel } = require("./model/PositionsModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// Middleware
// JSON data ko read karne ke liye
app.use(express.json());

// Form data ko read karne ke liye
app.use(express.urlencoded({ extended: true }));



//                 ADD HOLDINGS


// app.get("/addholdings", async (req, res) => {

//   // Holdings ka temporary data
//   let tempHoldings = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },

//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   // Har holding ko database mein insert karenge
//   for (let item of tempHoldings) {

//     // HoldingsModel ka naya object create kar rahe hain
//     let newHolding = new HoldingsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     // Database mein holding save kar rahe hain
//     await newHolding.save();
//   }

//   // Response
//   res.send("Holdings inserted successfully");
// });


//                 ADD POSITIONS


// app.get("/addposition", async (req, res) => {

//   // Positions ka temporary data
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },

//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   // Har position ko database mein insert karenge
//   for (let item of tempPositions) {

//     // PositionsModel ka naya object create kar rahe hain
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     // Database mein position save kar rahe hain
//     await newPosition.save();
//   }

//   // Response
//   res.send("Positions inserted successfully");
// });


app.get('/allHoldings', async(req, res)=>{
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
})

app.get('/allPositions', async(req, res)=>{
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
})



//                 MONGODB CONNECTION

mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("DB connection error:", err);
  });


// ======================================================
//                 START SERVER
// ======================================================

app.listen(PORT, () => {
  console.log(`App is started on port ${PORT}`);
});