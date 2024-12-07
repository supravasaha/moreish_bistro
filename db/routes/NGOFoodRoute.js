import express from "express";
import multer from "multer";
import {
  addFood,
  listFood,
  removeFood,
} from "../controllers/NGOFoodController.js";

const ngoFoodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

ngoFoodRouter.post("/add", upload.single("image"), addFood);
ngoFoodRouter.get("/list", listFood);
ngoFoodRouter.post("/remove", removeFood);

export default ngoFoodRouter;
