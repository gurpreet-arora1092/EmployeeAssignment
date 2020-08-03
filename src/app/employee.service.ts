import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Employee} from '../app/employee.mode'



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeChanged = new Subject<Employee[]>();
 
 private employee: Employee[] = [];
 
  constructor() { }


  setEmployee(employee: Employee[]) {
    this.employee = employee;
    this.employeeChanged.next(this.employee.slice());
  }

  getEmployees() {
    return this.employee.slice();
  }

  getEmployee(index: number) {
    return this.employee[index];
  }

  

  addEmployee(employee: Employee) {
    this.employee.push(employee);
    this.employeeChanged.next(this.employee.slice());
  }

  updateEmployee(index: number, newEmployee: Employee) {
    this.employee[index] = newEmployee;
    this.employeeChanged.next(this.employee.slice());
  }

  deleteEmployee(index: number) {
    this.employee.splice(index, 1);
    this.employeeChanged.next(this.employee.slice());
  }





}
