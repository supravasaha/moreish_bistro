/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import NGOFoodItem from "../NGOFoodItem/FoodItem";
import "./FoodDisplay.css";

const NGOFoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2 className="pt-8 text-white text-2xl font-semibold md:text-3xl">
        MOREISH has the finest Cuisines to Offer Our NGOs
      </h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <NGOFoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              ></NGOFoodItem>
            );
          }
        })}
      </div>
    </div>
  );
};

export default NGOFoodDisplay;
