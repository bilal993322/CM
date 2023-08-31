const mongoose = require("mongoose");

const PaymentScheema = mongoose.Schema(
  {
    number: Number,
    name: String,
    expiry: String,
    cvc: String,
  }
);

const PaymentModel = mongoose.model("Payment", PaymentScheema);
module.exports = PaymentModel;
