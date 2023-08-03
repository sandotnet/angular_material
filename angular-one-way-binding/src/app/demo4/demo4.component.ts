import { Component } from '@angular/core';
import { Student } from '../student';
@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component {
//student array
students:Student[]=[] //empty array
constructor() {
  this.students=[
    {studentId:432443,studentName:'Rohan',age:12},
    {studentId:432489,studentName:'David',age:11},
    {studentId:432487,studentName:'Jeson',age:10},
    {studentId:432445,studentName:'John',age:12},
    {studentId:432412,studentName:'Tim',age:11},
    {studentId:432431,studentName:'Mina',age:10},
    {studentId:432484,studentName:'Tina',age:12}
  ]
}
}
