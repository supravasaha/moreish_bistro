import ExcessFood from "../models/excessFoodModel.js";

export const postExcessFood = async (req, res) => {
  try {
    const foodData = req.body;
    const newFood = await ExcessFood.create(foodData);
    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: "Failed to post excess food", error });
  }
};
