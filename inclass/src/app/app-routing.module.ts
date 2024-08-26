import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './users/user/user.component';
import { ProfileComponent } from './users/profile/profile.component';
import { PostComponent } from './users/post/post.component';
import { CanVisitGuard } from './core/can-visit.guard';

// http://localhost:4200/
const routes: Routes = [
  
  // default route of the application
  {path: "", component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'product', component: ProductComponent,
    canActivate:[CanVisitGuard]
  },
  // lazy loaded module
  {path:'users', loadChildren: ()=>
    import('./users/users.module').then(m=>m.UsersModule)
  },
  // {path: 'user', component: UserComponent}
  // wildcard route
  // {path:"**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // forChild
  exports: [RouterModule]
})
export class AppRoutingModule { }
