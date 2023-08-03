import { Injectable } from '@angular/core';
import { Customer } from '../Models/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  api_url: string = 'http://localhost:31510/api/Customer/';
  constructor(private http: HttpClient) {}
  GetAllCustomers(): Observable<Customer[]> { //get all customers
    return this.http.get<Customer[]>(this.api_url + 'GetAllCustomers');
  }
  GetCustomer(id?: number): Observable<Customer> { //get a customer by id
    return this.http.get<Customer>(this.api_url + 'GetCustomer/' + id);
  }
  AddCustomer(customer: Customer): Observable<Customer> { //add new customer
    return this.http.post<Customer>(this.api_url + 'AddCustomer', customer);
  }
  EditCustomer(customer: Customer): Observable<Customer> { //edit customer
    return this.http.put<Customer>(this.api_url + 'EditCustomer', customer);
  }
  DeleteCustomer(id: number): Observable<string> { //delete customer
    return this.http.delete<string>(this.api_url + 'DeleteCustomer/' + id);
  }
}
