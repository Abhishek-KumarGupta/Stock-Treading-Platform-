const { model } = require("mongoose");

const {OrdersSchema} = require('../schemas/OrdersSchema')

const OrdersModel = new model("order", OredrsSchema);

module.exports = { OrdersModel };

