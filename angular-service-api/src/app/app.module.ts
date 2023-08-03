import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CustomerService } from './Services/customer.service';
import { ViewCustomersComponent } from './Components/view-customers/view-customers.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewCustomersComponent,
    AddCustomerComponent,
    ViewCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
