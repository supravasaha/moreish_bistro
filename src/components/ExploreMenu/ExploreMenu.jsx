/* eslint-disable react/prop-types */
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="exploreMenu-area">
      <div className="explore-menu" id="explore-menu">
        <h1 className="text-white text-2xl font-semibold md:text-3xl">Take a tour in MOREISH</h1>
        <p className="explore-menu-text text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere rem cum
          pariatur quia minus voluptas laborum, maxime dolore quisquam libero
          adipisci.
        </p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => {
            return (
              <div
                key={index}
                className="explore-menu-list-item"
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
              >
                <img
                  className={category === item.menu_name ? "active" : ""}
                  src={item.menu_image}
                  alt="menu-image"
                />
                <p className="text-white text-xl xl:text-2xl">{item.menu_name}</p>
              </div>
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default ExploreMenu;
