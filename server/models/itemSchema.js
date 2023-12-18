// Import necessary modules
import mongoose from "mongoose";

// Define the item schema
const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min:0,
    default:0,
  },
  mrp: {
    type: Number,
    required: true,
    min: 0,
    default:0,
  },
});

// Create and export the item model
export default mongoose.model("Item", itemSchema);
