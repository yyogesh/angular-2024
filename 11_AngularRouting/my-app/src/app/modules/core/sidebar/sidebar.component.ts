import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  menus = [
    {routerLink: 'home', displayName: 'Home'},
    {routerLink: 'about', displayName: 'About'},
    {routerLink: 'contact', displayName: 'Contact'},
    {routerLink: '/user/user-list', displayName: 'User List'}
  ]
}
