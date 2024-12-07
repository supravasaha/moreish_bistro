import axios from "axios";
import { useState } from "react";
import "./NGO.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Link } from "react-router-dom";

const MySwal = withReactContent(Swal);

const NGORegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/ngos/register",
        formData
      );
      MySwal.fire("Success", "Registration Successfull", "success");
      //   alert(response.data.message);
    } catch (error) {
      MySwal.fire("Error", "Registration failed", "error");
      //   alert(error.response.data.error || "Registration failed");
    }
  };

  return (
    <div className="ngo-container">
      <h3>NGO Registration</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NGO Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Register</button>
      </form>

      <p className="ngo-login-text">
        Already have an account?{" "}
        <span>
          {" "}
          <Link to="/ngo-login"> Login </Link>{" "}
        </span>{" "}
      </p>
    </div>
  );
};

export default NGORegister;
