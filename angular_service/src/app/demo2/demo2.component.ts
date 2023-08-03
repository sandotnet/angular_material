import { Component } from '@angular/core';
import { CalculateService } from '../calculate.service';
@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component {
  n1:number=0;
  n2:number=0;
  result?:string
constructor(private calcService:CalculateService)
{

}
Add()
{
  this.result='Addition: '+this.calcService.Add(this.n1,this.n2);
}
Mul()
{
  this.result='Addition: '+this.calcService.Mul(this.n1,this.n2);
}
Div()
{
  this.result='Addition: '+this.calcService.Div(this.n1,this.n2);
}
}
