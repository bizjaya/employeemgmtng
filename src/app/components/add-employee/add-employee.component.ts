import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import * as uuid from 'uuid';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter();
  name: string;
  designation: string;
  salary: number;
  bio: string;
  day: string;
  reminder: boolean = false;
  showAddEmployee: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddEmployee = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.name) {
      alert('Please add a employee!');
      return;
    }
    let today = new Date().toLocaleDateString();
    console.log(today);

    const newEmployee: Employee = {
      id: uuid.v4(),
      name: this.name,
      designation: this.designation,
      salary: this.salary,
      bio: this.bio,
      dob: this.day,
    };

    this.onAddEmployee.emit(newEmployee);

    this.name = '';
    this.designation = '';
    this.salary = 0;
    this.bio = '';
    this.day = '';
  }
}
