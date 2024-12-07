import express from 'express';
import { addEmployee, getEmployees, updateEmployee, deleteEmployee, getEmployeesForSalary, calculateSalary } from '../controllers/employeeController.js';

const router = express.Router();

router.post('/add', addEmployee);
router.get('/', getEmployees);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);
router.get('/salary', getEmployeesForSalary);
router.get('/salary/calculate/:id', calculateSalary);

export default router;

