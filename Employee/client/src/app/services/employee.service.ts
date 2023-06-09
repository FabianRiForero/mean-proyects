import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL_API: string = 'http://localhost:3000/api/employees';
  selectedEmployee: Employee = { name: '', position: '', office: '', salary: 0 };
  employees: Employee[] = [];

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee) {
    return this.http.post(this.URL_API, employee);
  }

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }

  putEmployee(employee: Employee) {
    return this.http.put(`${this.URL_API}/${employee.id}`, employee);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
