import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [authGuard]},
    {path: 'login', component: LoginComponent}
];
