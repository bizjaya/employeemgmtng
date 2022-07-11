import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from '../Employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css'],
})
export class Tab2Component implements OnInit {
  @Output() onEditEmployee: EventEmitter<Employee> = new EventEmitter();

  employee: Employee = { name: 'test', salary: 3000, bio: 'testbio', designation: 'mgr', dob: '3' };

  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let id = params['id'];
      if (id === undefined) {
        this.router.navigateByUrl(`/tab1`);
      }

      this.employeeService.getEmployee(id).subscribe((employee) => (this.employee = employee));

      // console.log(id);
      // this.employee.name = 'kkk';
    });
  }

  editEmployee(employee: Employee) {
    this.employeeService.updateEmployee(employee).subscribe(
      (employee) => console.log(employee)
      // this.employees.push(employee)
    );
    // console.log(employee);
  }
}
