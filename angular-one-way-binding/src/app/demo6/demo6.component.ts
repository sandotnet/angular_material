import { Component } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.css'],
})
export class Demo6Component {
  name: string = 'Rajeev';
  //method
  ClickMe(): void {
    this.name = 'Sachin';
  }
}
