import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect('mongodb+srv://neverstareatany1:Wp3tiWlM5vGjcNi9@cluster0.ge5c1.mongodb.net/food-del')
    .then(() => console.log("DB connected"));
};


// mongodb+srv://neverstareatany1:tYMxGqVTP8Jj5olS@cluster0.ge5c1.mongodb.net/moreish-bistro

// mongodb+srv://neverstareatany1:Wp3tiWlM5vGjcNi9@cluster0.ge5c1.mongodb.net/food-del


