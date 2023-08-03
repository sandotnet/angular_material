import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  uname:any
  constructor(public router: Router,public activeroute:ActivatedRoute) {
      //read route parameter values
      this.activeroute.params.
      subscribe(p=>this.uname=p['uname']);
  }
  LogOut(): void {
    this.router.navigateByUrl('login');
  }
}
