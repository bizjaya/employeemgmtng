import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees) => (this.employees = employees));
  }
  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(() => (this.employees = this.employees.filter((t) => t.name !== employee.name)));
  }

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe((employee) => this.employees.push(employee));
    // console.log(employee);
  }
}
