import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';
import { UserService } from './user/user.service';
import { FetchDataResolver } from './fetch-data.resolver';
// import { routes } from './routes';

const routes: Routes = [
  {
    path: '',
    component: UserComponent, // Parent component
    children: [
      {
        path: 'profile/:id',
        component: ProfileComponent,
        resolve: { userData: FetchDataResolver },
      }, // localhost:4200/users/profile/23
      {
        path: 'post',
        component: PostComponent,
        data: {
          title: 'User Posts',
        },
      },
    ],
  },
];

@NgModule({
  declarations: [UserComponent, ProfileComponent, PostComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    // RouterModule
  ],
  providers: [UserService, FetchDataResolver],
})
export class UsersModule {}
