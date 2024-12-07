import mongoose from "mongoose";

const excessFoodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    thresholdLevel: { type: Number, required: true },
    description: { type: String, required: true },
    foodImage: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("ExcessFood", excessFoodSchema);
