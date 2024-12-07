import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Add from "./pages/Add/Add.jsx";
import AddCategory from "./pages/Category/Add/Add.jsx";
import ListCategory from "./pages/Category/List/List.jsx";
import AddEmployeeForm from "./pages/Employee/AddEmployee/AddEmployee.jsx";
import EmployeeList from "./pages/Employee/EmployeeList/EmployeeList.jsx";
import EmployeeSalary from "./pages/EmployeeSalary/EmployeeSalary.jsx";
import AddItems from "./pages/Items/Add/Add.jsx";
import ListItems from "./pages/Items/List/List.jsx";
import List from "./pages/List/List.jsx";
import AddFoodForNGO from "./pages/NGO/Add/Add.jsx";
import ListFoodForNGO from "./pages/NGO/List/List.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import SalesReport from "./pages/SalesReport/SalesReport.jsx";

const url = "http://localhost:4000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/add",
        element: <Add url={url}></Add>,
      },
      {
        path: "/list",
        element: <List url={url}></List>,
      },
      {
        path: "/orders",
        element: <Orders url={url}></Orders>,
      },
      {
        path: "/category/add",
        element: <AddCategory url={url}></AddCategory>,
      },
      {
        path: "/category/list",
        element: <ListCategory url={url}></ListCategory>,
      },
      {
        path: "/items/add",
        element: <AddItems url={url}></AddItems>,
      },
      {
        path: "/items/list",
        element: <ListItems url={url}></ListItems>,
      },
      {
        path: "/add-food-for-ngo",
        element: <AddFoodForNGO url={url}></AddFoodForNGO>,
      },
      {
        path: "/list-food-for-ngo",
        element: <ListFoodForNGO url={url}></ListFoodForNGO>,
      },
      {
        path: "/employee/add",
        element: <AddEmployeeForm url={url}></AddEmployeeForm>,
      },
      {
        path: "/employee/list",
        element: <EmployeeList url={url}></EmployeeList>,
      },
      {
        path: "/employee/salary",
        element: <EmployeeSalary url={url}></EmployeeSalary>,
      },
      {
        path: "/SalesReport",
        element: <SalesReport url={url}></SalesReport>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
