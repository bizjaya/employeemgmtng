import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../Employee';
import { Router } from '@angular/router';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css'],
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onDeleteEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Employee> = new EventEmitter();
  faTimes = faTimes;
  showEditEmp: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onDelete(employee) {
    this.onDeleteEmployee.emit(employee);
  }

  onToggle(employee) {
    this.onToggleReminder.emit(employee);
  }

  toggleAddEmp(employee) {
    // this.uiService.toggleAddEmp();
    console.log(employee);
    this.router.navigateByUrl(`/tab2?id=${employee.id}`);
  }
}
