import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import "./EmployeeSalary.css"

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployeesForSalary();
  }, []);

  const fetchEmployeesForSalary = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/employees/salary');
      setEmployees(res.data);
    } catch (err) {
      console.error('Error fetching employees for salary calculation:', err);
    }
  };

  const handleCalculateSalary = async (id) => {
    try {
      const res = await axios.get(`http://localhost:4000/api/employees/salary/calculate/${id}`);
      const salary = res.data.salary;

      // Show the calculated salary in a SweetAlert popup
      await Swal.fire({
        title: 'Salary Calculation',
        text: `The salary for this employee is $${salary}`,
        icon: 'success',
        confirmButtonText: 'Okay',
      });

    } catch (err) {
      Swal.fire({
        title: 'Error',
        text: 'There was an error calculating the salary.',
        icon: 'error',
        confirmButtonText: 'Close',
      });
    }
  };

  return (
    <div className='add'>
      <h3>Employee Salary Calculation</h3>
      <table>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Hourly Rate</th>
            <th>Roster Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.employeeID}</td>
              <td>{emp.name}</td>
              <td>{emp.hourlyRate}</td>
              <td>{emp.rosterDuration}</td>
              <td>
                <button className='salary-btn' onClick={() => handleCalculateSalary(emp._id)}>Calculate Salary</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSalary;
