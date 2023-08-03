import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}
  //service methods
  Add(n1: number, n2: number): number {
    let add = n1 + n2;
    return add;
  }
  Mul(n1: number, n2: number): number {
    let mul = n1 * n2;
    return mul;
  }
  Div(n1: number, n2: number): number {
    let div = n1 / n2;
    return div;
  }
}
