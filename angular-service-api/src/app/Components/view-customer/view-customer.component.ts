import { Component } from '@angular/core';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Models/customer';
@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent {
  customer: Customer;
  constructor(private customerService: CustomerService) {
    this.customer = new Customer();
  }
  GetCustomer() {
    let id: any = this.customer.customerId;
    this.customerService.GetCustomer(id).subscribe((res) => {
      this.customer = res;
    });
  }
  EditCustomer() {
    this.customerService.EditCustomer(this.customer).subscribe((res) => {});
  }
  DeleteCustomer() {
    let id: any = this.customer.customerId;
    this.customerService.DeleteCustomer(id).subscribe((res) => {});
  }
}
