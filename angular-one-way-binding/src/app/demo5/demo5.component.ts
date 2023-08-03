import { Component } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.css'],
})
export class Demo5Component {
  url_path: string = 'http://www.facebook.com';
  title: string = 'Facebook';
  path1: string = 'http://www.google.co.in';
  img_src: string = '../../assets/1280.jpg';
  img_width: number = 300;
  img_height: number = 200;
}
