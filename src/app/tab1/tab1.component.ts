import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Employee } from '../Employee';
import { EmployeeService } from '../services/employee.service';
import { UiService } from '../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
})
export class Tab1Component implements OnInit {
  @Output() onAddEmp: EventEmitter<Employee> = new EventEmitter();
  name: string;
  designation: string;
  salary: string;
  bio: string;
  day: string;
  reminder: boolean = false;
  showAddEmp: boolean;
  subscription: Subscription;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {}

  addEmployee(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(
      (employee) => console.log(employee)
      // this.employees.push(employee)
    );
    // console.log(employee);
  }
}
