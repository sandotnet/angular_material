import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
})
export class Demo1Component {
  title: string = 'Welcome to Pipe Demo';
  dob: Date = new Date(2010, 10, 23);
  price: number = 1200;
  obj = { ID: 1223, NAME: 'Rohan' };
}
