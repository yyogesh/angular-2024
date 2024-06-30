import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserReviewComponent } from './components/user-review/user-review.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserReviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  // exports: [
  //   UserListComponent
  // ]
})
export class UserModule { }
