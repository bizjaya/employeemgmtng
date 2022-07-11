import { Component, OnInit, Input, Output, EventEmitter, Directive, ElementRef, HostListener } from '@angular/core';
import { Employee } from '../../Employee';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import * as uuid from 'uuid';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnlyDirective {
  private regex: RegExp = new RegExp(/^[0-9]+$/g);
  private specialKeys: Array<string> = ['Backspace', 'Tab'];

  constructor(private el: ElementRef) {}
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.specialKeys.indexOf(event.key) !== -1) {
      return;
    }
    const current: string = this.el.nativeElement.value;
    const next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onEditEmployee: EventEmitter<Employee> = new EventEmitter();
  // name: string;
  // designation: string;
  // salary: string;
  // bio: string;
  // dob: string;
  // reminder: boolean = false;
  // showEditEmployee: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    // this.subscription = this.uiService.onToggle().subscribe((value) => (this.showEditEmployee = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.employee.name) {
      alert('Please add a employee!');
      return;
    }

    const thisEmployee: Employee = {
      id: this.employee.id,
      name: this.employee.name,
      designation: this.employee.designation,
      salary: this.employee.salary,
      bio: this.employee.bio,
      dob: this.employee.dob,
    };

    this.onEditEmployee.emit(thisEmployee);

    this.employee.name = '';
    this.employee.designation = '';
    this.employee.salary = 0;
    this.employee.bio = '';
    this.employee.dob = '';
  }
}
