import Employee from '../database/models/Employee.js'

export const findEmployees = async () => {
  const employees = await Employee.findAll();
  return employees;
}

export const findEmployeeById = async (id) => {
  const employees = await Employee.findByPk(id);
  return employees;
}

export const registerEmployee = async (data = {}) => {
  const employee = await Employee.create({ ...data });
  return employee;
}

export const removeEmployee = async (id) => {
  const employee = await Employee.destroy({ where: { id } })
  return employee;
}

export const updateEmployee = async (id, data = {}) => {
  const employee = await Employee.update({ ...data }, { where: { id } });
  return employee;
}