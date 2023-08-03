import { Component } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { CustomerService } from 'src/app/Services/customer.service';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  customer: Customer;
  constructor(private customerService: CustomerService) {
    this.customer = new Customer();
  }
  AddCustomer() {
    this.customerService.AddCustomer(this.customer)
    .subscribe((res) => {});
  }
}
