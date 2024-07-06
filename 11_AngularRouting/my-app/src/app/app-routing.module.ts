import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { UserService } from './services/user.service';
import { UserDataResolver } from './services/UserDataResolver';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:"full"},
  {path: 'home', component: HomeComponent, data: {
    title: 'Home Page',
    description: 'This is the home page',
  }},
  {path: 'about', component: AboutComponent,  data: {
    title: 'About Page',
    description: 'This is the about page',
  }},
  {path: 'contact', component: ContactComponent , resolve: {
    data: UserService
  }},
  {path: 'contact/:id', component: ContactComponent , resolve: {
    data: UserDataResolver
  }},
  {path: 'user', loadChildren: () => import("./modules/user/user.module").then((m) => m.UserModule)},
  {path:"**", redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
