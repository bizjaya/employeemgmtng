import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddEmp: boolean = false;
  private subject = new Subject<any>();

  constructor() {}
  toggleAddEmp(): void {
    this.showAddEmp = !this.showAddEmp;
    this.subject.next(this.showAddEmp);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
