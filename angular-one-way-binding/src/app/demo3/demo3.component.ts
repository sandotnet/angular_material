import { Component } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css'],
})
export class Demo3Component {
  student: Student;
  constructor() {
    //initialize student model
    this.student = new Student();
    this.student.studentId = 430843;
    this.student.studentName = 'Karan';
    this.student.age = 10;
    // this.student={studentId:432443,studentName:'Rohan',age:12}
  }
}
