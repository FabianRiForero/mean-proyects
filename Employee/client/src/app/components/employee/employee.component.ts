import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) { }
  ngOnInit(): void {
    this.getEmployees();
  }

  resetForm(form: NgForm) {
    form.reset();
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    if (form.value.id) {
      this.employeeService.putEmployee(form.value).subscribe(res => { console.log(res); form.reset(); this.getEmployees() }, err => console.log(err));
    } else {
      this.employeeService.createEmployee(form.value).subscribe(res => { this.getEmployees(); form.reset() }, err => console.error(err));
    }
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(res => { this.employeeService.employees = res }, err => console.log(err));
  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee
  }

  deleteEmployee(id: number) {
    const res = confirm('Are you sure you want to delete it?')
    if (res) {
      this.employeeService.deleteEmployee(id).subscribe(res => this.getEmployees(), err => console.error(err));
    }
  }
}
