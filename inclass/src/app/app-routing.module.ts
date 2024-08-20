import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './users/user/user.component';

// http://localhost:4200/
const routes: Routes = [
  
  // default route of the application
  {path: "", component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductComponent},
  {path:'users', component: UserComponent},
  // wildcard route
  {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
