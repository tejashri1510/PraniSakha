const mongoose = require("mongoose");

const conditionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  keywords: { type: [String], required: true },
  care: { type: String, required: true },
});

module.exports = mongoose.model("Condition", conditionSchema);
