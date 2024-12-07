import axios from "axios";
import { useState } from "react";

const AddExcessFood = () => {
  const [foodData, setFoodData] = useState({
    name: "",
    quantity: "",
    price: "",
    thresholdLevel: "",
    description: "",
    foodImage: "",
  });

  const imageBBApiKey = "4cc224d490d98026ce689f5788d7cb34";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=${imageBBApiKey}`,
        formData
      );
      setFoodData({ ...foodData, foodImage: response.data.data.url });
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/excess-food", foodData);
      alert("Excess food posted successfully!");
    } catch (error) {
      console.error("Error posting food:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 shadow-md rounded-md"
    >
      <h2 className="text-2xl font-bold mb-4">Post Excess Food</h2>
      <label className="block mb-2">
        Food Name:
        <input
          type="text"
          name="name"
          value={foodData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Quantity:
        <input
          type="number"
          name="quantity"
          value={foodData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Price:
        <input
          type="number"
          name="price"
          value={foodData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Threshold Level:
        <input
          type="number"
          name="thresholdLevel"
          value={foodData.thresholdLevel}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Description:
        <textarea
          name="description"
          value={foodData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>
      <label className="block mb-2">
        Food Image:
        <input
          type="file"
          onChange={handleImageUpload}
          className="w-full p-2 border rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
      >
        Post Food
      </button>
    </form>
  );
};

export default AddExcessFood;
