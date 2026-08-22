const { model } = require("mongoose");

const {HoldingSchema} = require('../schemas/HoldingSchema')

const HoldingsModels = new model("holding", HoldingSchema);

model.exports = { HoldingsModels };

