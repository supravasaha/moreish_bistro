import express from "express";
import { postExcessFood } from "../controllers/excessFoodController.js";
import ExcessFood from "../models/excessFoodModel.js";

const router = express.Router();

router.post("/", postExcessFood);

router.get("/", async (req, res) => {
  try {
    const foods = await ExcessFood.find({});
    res.json(foods);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch excess foods", error });
  }
});

export default router;
