import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Day1DatabindingComponent } from './classNote/day1-databinding/day1-databinding.component';
import { Day2Component } from './classNote/day2-directives-pipes/day2.component';
import { Day3DataCommuteComponent } from './classNote/day3-data-commute/day3-data-commute.component';

// http://localhost:4200/
const routes: Routes = [

  // default route of the application
  {path: "", component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductComponent},
  {path:'day1', component: Day1DatabindingComponent},
  {path:"day2",component:Day2Component},
  {path:"day3",component:Day3DataCommuteComponent},
  // wildcard route
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
