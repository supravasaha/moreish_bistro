import { CiBoxList, CiMoneyBill } from "react-icons/ci";
import { FaChartPie, FaUserTie } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdLibraryBooks, MdRestaurantMenu } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <MdRestaurantMenu />
          <p>Add Menu</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option">
          <CiBoxList />
          <p> Menu List</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <MdLibraryBooks />
          <p>Orders</p>
        </NavLink>

        <NavLink to="/category/add" className="sidebar-option">
          <TbCategory />
          <span className="sidebar-text">Add Category</span>
        </NavLink>
        <NavLink as={NavLink} to="/category/list" className="sidebar-option">
          <CiBoxList />
          <span className="sidebar-text">Category List</span>
        </NavLink>

        <NavLink as={NavLink} to="/items/add" className="sidebar-option">
          <IoFastFoodOutline />
          <span className="sidebar-text">Add Item</span>
        </NavLink>
        <NavLink as={NavLink} to="/items/list" className="sidebar-option">
          <CiBoxList />
          <span className="sidebar-text">Item List</span>
        </NavLink>

        {/* <NavLink as={NavLink} to="/add-food-for-ngo" className="sidebar-option">
          <CiBoxList />
          <span className="sidebar-text">Add NGO`&apos;`s Food</span>
        </NavLink> */}
        <NavLink to="/add-food-for-ngo" className="sidebar-option">
          <MdRestaurantMenu />
          <p> Add NGO`&apos;`s Food </p>
        </NavLink>
        <NavLink to="/list-food-for-ngo" className="sidebar-option">
          <CiBoxList />
          <p> NGO`&apos;`s Food List </p>
        </NavLink>

        <NavLink as={NavLink} to="/employee/add" className="sidebar-option">
          <FaUserTie />
          <span className="sidebar-text">Add Employee</span>
        </NavLink>
        <NavLink as={NavLink} to="/employee/list" className="sidebar-option">
          <CiBoxList />
          <span className="sidebar-text">Employee List</span>
        </NavLink>
        <NavLink as={NavLink} to="/employee/salary" className="sidebar-option">
          <CiMoneyBill />
          <span className="sidebar-text">Employee Salary</span>
        </NavLink>

        <NavLink to="/SalesReport" className="sidebar-option">
          <FaChartPie />
          <span className="sidebar-text">Sales Report</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
