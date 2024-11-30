import { Link } from "react-router-dom";
import "./Slide.css"

/* eslint-disable react/prop-types */
const Slide = ({ img, title, text, btnText }) => {
  return (
    <header>

      <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: `url(${img})` }}>
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center max-w-4xl">
            <h1 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h1>
            <p className="text-gray-300 mb-10 mt-3">{text}</p>
            <Link to="/menus" className="primary-btn">{btnText}</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Slide;