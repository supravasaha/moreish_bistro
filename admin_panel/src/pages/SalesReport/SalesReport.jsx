import axios from "axios";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import "./SalesReport.css";

const SalesReport = ({ url }) => {
  const [salesData, setSalesData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const response = await axios.get(`${url}/api/order/sales`);

      if (response.data.success) {
        setSalesData(response.data.data);
      } else {
        toast.error("Error fetching sales data");
      }
    } catch (error) {
      toast.error("Error fetching sales data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
        <p>Loading...</p>
      </div>
    ); // Show a loading state while fetching
  }

  return (
    <div className="sales-report">
      <h1>Sales Report</h1>
      <div className="summary">
        <div className="summary-item">
          <h2>Total Sales</h2>
          <p>${salesData.totalsales}</p>
        </div>
        <div className="summary-item">
          <h2>Number of Orders</h2>
          <p>{salesData.numberoforders}</p>
        </div>
        <div className="summary-item">
          <h2>Total Items Sold</h2>
          <p>{salesData.totalitemsSold}</p>
        </div>
        <div className="summary-item">
          <h2>Average Order Value</h2>
          <p>${salesData.averageOrderValue?.toFixed(2)}</p>
        </div>
      </div>
      <div className="top-items">
        <h2>Top-Selling Food Items</h2>
        <table>
          <thead>
            <tr className="table-header">
              <th>Image</th>
              <th>Food Item</th>
              <th>Quantity Sold</th>
              <th>Total Revenue</th>
            </tr>
          </thead>
          <tbody>
            {salesData.topSellingItems?.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={`${url}/images/` + item.myimage}
                    alt={item.name}
                    className="item-image"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantitySold}</td>
                <td>${item.totalRevenue * item.quantitySold}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesReport;
