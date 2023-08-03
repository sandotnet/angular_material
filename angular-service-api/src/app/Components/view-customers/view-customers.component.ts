import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Models/customer';
@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent {
  customers:Customer[]=[];
  constructor(private customerService:CustomerService)
  {
        this.customerService.GetAllCustomers().subscribe(response=>{
          this.customers=response;
          console.log(this.customers)
        })
  }
}
