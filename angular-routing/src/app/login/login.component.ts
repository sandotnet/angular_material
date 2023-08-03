import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  users: User[] = [];
  user: User;
  errMsg: string = '';
  constructor(private route: Router) {
    this.user = new User();
    this.users = [
      { username: 'Rohan', password: '12345', role: 'Customer' },
      { username: 'John', password: '12345', role: 'Admin' },
    ];
  }
  Validate(): void {
    let user1 = this.users.find(
      (u) =>
        u.username == this.user.username && u.password == this.user.password
    );
    console.log(user1);
    if (user1 != null) {
      let role = user1.role;
      let uname: any = user1.username;
      if (role == 'Customer') {
        //redirect to customer-dashboard
        //save username in localstorage
        localStorage.setItem('uname', uname);
        this.route.navigateByUrl('customer-dashboard');
      } else if (role == 'Admin') {
        //redirect to admin-dashboard
        this.route.navigateByUrl('admin-dashboard/' + uname);
      }
    } else {
      this.errMsg = 'Invalid Credentials';
    }
  }
}
