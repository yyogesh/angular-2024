import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { UserReviewComponent } from './components/user-review/user-review.component';

const routes: Routes = [
  // {path: '', redirectTo: 'user-list', pathMatch: 'full'},
  {path: '', component: UserListComponent},
  {path: 'user-list', 
    component: UserListComponent,
    children: [
      {path: 'user-detail', component: UserDetailComponent},
      {path: 'user-detail/:id/:guid', component: UserDetailComponent},
      {path: 'user-review', component: UserReviewComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
