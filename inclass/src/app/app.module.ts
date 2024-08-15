import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product/product.component';
import { Day1DatabindingComponent } from './classNote/day1-databinding/day1-databinding.component';
import { CommonModule } from '@angular/common';
import { Day2Component } from './classNote/day2-directives-pipes/day2.component';
import { Day3DataCommuteComponent } from './classNote/day3-data-commute/day3-data-commute.component';
import { Day3ChildComponent } from './classNote/day3-data-commute/day3-child/day3-child.component';
import { Day3SiblingComponent } from './classNote/day3-data-commute/day3-sibling/day3-sibling.component';
import { Day3Service } from './classNote/day3-data-commute/day3.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Day1DatabindingComponent,
    Day2Component,
    Day3DataCommuteComponent,
    Day3ChildComponent,
    Day3SiblingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  // providers: [Day3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

//create instance of service in app.module
