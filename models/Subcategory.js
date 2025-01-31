const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  taxApplicability: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
});

module.exports = mongoose.model("Subcategory", SubcategorySchema);
