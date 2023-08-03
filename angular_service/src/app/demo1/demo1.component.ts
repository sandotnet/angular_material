import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';
@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  providers: [CalculateService], //inject service
})
export class Demo1Component {
  constructor(
    private calcservice: CalculateService //instantiate service using DI
  ) {}
  Sum() {
    let result = this.calcservice.Add(12, 23);
    console.log(result);
  }
}
