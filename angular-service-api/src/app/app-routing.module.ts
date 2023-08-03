import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCustomerComponent } from './Components/view-customer/view-customer.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { ViewCustomersComponent } from './Components/view-customers/view-customers.component';

const routes: Routes = [
  { path: 'view-customers', component: ViewCustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'view-customer', component: ViewCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
