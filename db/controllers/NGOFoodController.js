import fs from "fs";
import ngoFoodModel from "../models/NGOFoodModel.js";

// add food item
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new ngoFoodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({
      success: true,
      message: "Food added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// all food list
const listFood = async (req, res) => {
  try {
    const foods = await ngoFoodModel.find({});
    res.json({
      success: true,
      data: foods,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

// remove food item
const removeFood = async (req, res) => {
  try {
    const food = await ngoFoodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => { });

    await ngoFoodModel.findByIdAndDelete(req.body.id);
    res.json({
      success: true,
      message: "Food removed",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error",
    });
  }
};

export { addFood, listFood, removeFood };
