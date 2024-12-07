import { Link } from "react-router-dom";
import "./Pupolarmenu.css"
import image1 from "../../assets/food_30.png"
import image2 from "../../assets/food_28.png"
import image3 from "../../assets/food_15.png"
import image4 from "../../assets/food_19.png"

const PopularMenu = () => {
  return (
    <div className="popular-menu-container">
      <div>
        <h1 className="mt-2 text-2xl font-semibold md:text-3xl text-white"> Popular Menu </h1>

        <p className="mt-3 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-5">

        <div className="max-w-2xl overflow-hidden rounded-lg popular-menu-item single-popular-item">
          <img className="object-cover w-full h-64" src={image1} alt="Article" />

          <div className="p-6">
            <div className="mb-5">
              <h2 href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform text-white" role="link">Noodles</h2>
              <p className="mt-2 mb-10 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.</p>
              <Link to="/menus" className="primary-btn">View Menu</Link>
            </div>
          </div>
        </div>

        <div className="max-w-2xl overflow-hidden rounded-lg shadow-md popular-menu-item">
          <img className="object-cover w-full h-64" src={image2} alt="Article" />

          <div className="p-6">
            <div className="mb-5">
              <h2 href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform text-white" role="link">Pasta</h2>
              <p className="mt-2 mb-10 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.</p>
              <Link to="/menus" className="primary-btn">View Menu</Link>
            </div>
          </div>
        </div>

        <div className="max-w-2xl overflow-hidden rounded-lg shadow-md popular-menu-item">
          <img className="object-cover w-full h-64" src={image3} alt="Article" />

          <div className="p-6">
            <div className="mb-5">
              <h2 href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform text-white" role="link">Sandwich</h2>
              <p className="mt-2 mb-10 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.</p>
              <Link to="/menus" className="primary-btn">View Menu</Link>
            </div>
          </div>
        </div>

        <div className="max-w-2xl overflow-hidden rounded-lg shadow-md popular-menu-item">
          <img className="object-cover w-full h-64" src={image4} alt="Article" />

          <div className="p-6">
            <div className="mb-5">
              <h2 href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform text-white" role="link">Cake</h2>
              <p className="mt-2 mb-10 text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel.</p>
              <Link to="/menus" className="primary-btn">View Menu</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularMenu;