import { useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./AddEmployee.css"

const MySwal = withReactContent(Swal);

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeID: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    position: '',
    joiningDate: '',
    hourlyRate: '',
    rosterDuration: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/employees/add', employee);
      MySwal.fire('Success', 'Employee added successfully!', 'success');
      setEmployee({
        employeeID: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        position: '',
        joiningDate: '',
        hourlyRate: '',
        rosterDuration: '',
      });
    } catch (error) {
      MySwal.fire('Error', "Failed to add employee!", 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md add">
      <h3 className="text-center mb-4">Add Employee</h3>
      {['employeeID', 'name', 'email', 'phone', 'address', 'position', 'hourlyRate', 'rosterDuration'].map((field) => (
        <div key={field} className="mb-4">
          <p className="block text-gray-700">{field.charAt(0).toUpperCase() + field.slice(1)}</p>
          <input
            type="text"
            name={field}
            value={employee[field]}
            onChange={handleChange}
            required={field !== 'address'}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      ))}
      <div className="mb-4">
        <p className="block text-gray-700">Joining Date</p>
        <input
          type="date"
          name="joiningDate"
          value={employee.joiningDate}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded"
        />
      </div>
      <button
        type="submit"
        className="add-btn add-employee"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
