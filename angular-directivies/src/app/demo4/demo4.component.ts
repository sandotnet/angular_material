import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.css']
})
export class Demo4Component implements OnInit {
flag=true;
scolor:string='';
  constructor() { }

  ngOnInit(): void {
  }
  Set()
  {
    if(this.flag==true)
    {
      this.flag=false;
    }
    else if(this.flag==false)
    {
      this.flag=true;
    }
  }


}
