import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Add Employee';
  showAddTask: boolean = false;
  subsription: Subscription;

  constructor(private uiService: UiService) {
    this.subsription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  toggleAddEmp() {
    this.uiService.toggleAddEmp();
  }
}
