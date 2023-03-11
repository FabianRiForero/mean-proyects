import catchAsyncErrors from '../middlewares/catchAsyncErrors.js';
import { findEmployeeById, findEmployees, registerEmployee, removeEmployee, updateEmployee } from '../services/employee.service.js';

export const getEmployees = catchAsyncErrors(async (req, res, next) => {
  const employees = await findEmployees();
  res.json(employees);
});

export const createEmployees = catchAsyncErrors(async ({ body }, res, next) => {
  const { name = '', position = '', office = '', salary = null } = body;
  const employee = await registerEmployee({ name, position, office, salary });
  res.json({ msg: 'Employee Created!', data: employee });
});

export const getEmployee = catchAsyncErrors(async ({ params }, res, next) => {
  const { id } = params;
  const employee = await findEmployeeById(id);
  if (!employee) return res.sendStatus(404);
  res.json(employee);
});

export const editEmployee = catchAsyncErrors(async ({ body, params }, res, next) => {
  const { id } = params;
  const { name = '', position = '', office = '', salary = null } = body;
  const existsEmployee = await findEmployeeById(id);
  if (!existsEmployee) return res.sendStatus(404);
  const updatedEmployee = await updateEmployee(id, { name, position, office, salary });
  if (!updatedEmployee[0]) return res.sendStatus(400);
  res.json({ msg: 'Employee updated' });
});

export const deleteEmployee = catchAsyncErrors(async ({ params }, res, next) => {
  const { id } = params;
  const existsEmployee = await findEmployeeById(id);
  if (!existsEmployee) return res.sendStatus(404);
  const deletedEmployee = await removeEmployee(id);
  if (!deleteEmployee) return res.sendStatus(400);
  res.json(deletedEmployee);
});