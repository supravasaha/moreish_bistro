import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NGOLogin = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/ngos/login",
        formData
      );
      setMessage(response.data.message);
      // console.log("NGO Info:", response.data.ngo);
      navigate("/")
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="ngo-container">
      <h3>NGO Login</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
      <p className="ngo-login-text">
        New to this website?{" "}
        <span>
          {" "}
          <Link to="/ngo-register"> Register </Link>{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default NGOLogin;
