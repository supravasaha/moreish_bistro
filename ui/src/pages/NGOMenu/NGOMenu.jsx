import { useState } from "react";
import FoodDisplay from "../../components/NGOFoodDisplay/NGOFoodDisplay";

const NGOMenu = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  );
};

export default NGOMenu;
