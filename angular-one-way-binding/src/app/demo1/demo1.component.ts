import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component {
studentId:number=23445;
studentName:string='Rohan';
studentDob:Date=new Date(2000,10,12);
}
