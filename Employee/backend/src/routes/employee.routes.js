import { Router } from 'express'
import { createEmployees, deleteEmployee, editEmployee, getEmployee, getEmployees } from '../controllers/employee.controller.js';
const router = Router();

router.get('/', getEmployees);
router.post('/', createEmployees);
router.get('/:id', getEmployee);
router.put('/:id', editEmployee);
router.delete('/:id', deleteEmployee);

export default router;