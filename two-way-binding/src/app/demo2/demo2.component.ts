import { Component } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component {
  employee: Employee;
  employees: Employee[] = [];
  roles: string[] = [
    'Developer',
    'Sr Developer',
    'TeamLeader',
    'ProjectManager',
  ];
  constructor() {
    this.employee = new Employee();
  }
  save(): void {
    this.employees.push(this.employee); //add employee to employees array
    console.log(this.employees);
    this.employee=new Employee();
  }
}
