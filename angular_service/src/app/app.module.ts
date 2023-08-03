import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { CalculateService } from './calculate.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Demo1Component, Demo2Component],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CalculateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
