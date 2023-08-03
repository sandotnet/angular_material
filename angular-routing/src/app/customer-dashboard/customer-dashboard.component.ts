import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css'],
})
export class CustomerDashboardComponent {
  uname: any;
  constructor(public router: Router) {
    this.uname = localStorage.getItem('uname'); //read local storage data
  }
  LogOut(): void {
    this.router.navigateByUrl('login');
  }
}
