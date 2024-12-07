import "./EmployeeList.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleEdit = (employee) => {
    setEditEmployee(employee);
    Swal.fire({
      title: "Edit Employee",
      html: `
      <input id="employeeID" class="swal2-input" value="${employee.employeeID}">
      <input id="name" class="swal2-input" value="${employee.name}">
      <input id="email" class="swal2-input" value="${employee.email}">
      <input id="phone" class="swal2-input" value="${employee.phone}">
      <input id="address" class="swal2-input" value="${employee.address}">
      <input id="position" class="swal2-input" value="${employee.position}">
      <input id="joiningDate" class="swal2-input" value="${employee.joiningDate}">
      <input id="hourlyRate" class="swal2-input" value="${employee.hourlyRate}">
      <input id="rosterDuration" class="swal2-input" value="${employee.rosterDuration}">
      `,
      preConfirm: () => {
        const employeeID = document.getElementById("employeeID").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const position = document.getElementById("position").value;
        const joiningDate = document.getElementById("joiningDate").value;
        const hourlyRate = document.getElementById("hourlyRate").value;
        const rosterDuration = document.getElementById("rosterDuration").value;
        return {
          employeeID,
          name,
          email,
          phone,
          address,
          position,
          joiningDate,
          hourlyRate,
          rosterDuration,
        };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `http://localhost:4000/api/employees/update/${employee._id}`,
            result.value
          )
          .then(() => {
            setEmployees((prev) =>
              prev.map((emp) =>
                emp._id === employee._id ? { ...emp, ...result.value } : emp
              )
            );
            Swal.fire("Updated!", "Employee details updated.", "success");
          })
          .catch((err) =>
            Swal.fire("Error!", "Failed to update employee.", "error")
          );
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:4000/api/employees/delete/${id}`)
          .then(() => {
            setEmployees((prev) => prev.filter((emp) => emp._id !== id));
            Swal.fire("Deleted!", "Employee has been deleted.", "success");
          })
          .catch((err) =>
            Swal.fire("Error!", "Failed to delete employee.", "error")
          );
      }
    });
  };

  return (
    <div className="add">
      <h3>Employee Management</h3>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Position</th>
            <th>Joining Date</th>
            <th>Hourly Rate</th>
            <th>Roster Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.employeeID}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.address}</td>
              <td>{employee.position}</td>
              <td>{employee.joiningDate}</td>
              <td>{employee.hourlyRate}</td>
              <td>{employee.rosterDuration}</td>
              <td>
                <button
                  className="employee-update-btn"
                  onClick={() => handleEdit(employee)}
                >
                  <FaEdit />
                </button>
                <button
                  className="employee-update-btn"
                  onClick={() => handleDelete(employee._id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
