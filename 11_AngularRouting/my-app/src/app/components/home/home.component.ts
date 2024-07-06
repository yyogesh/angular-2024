import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 constructor(private router: ActivatedRoute, private route: Router) {
  this.router.data.subscribe(data => {
    console.log('home component data', data); // { title: 'Welcome to Home Page' }
  });

   this.route.events.subscribe(events => {
    console.log('route events', events); // NavigationStart, RoutesRecognized, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized, GuardsCheckStart, GuardsCheckEnd, ResolveStart, ResolveEnd, ActivationStart, ActivationEnd, Scroll
    if (events instanceof NavigationStart) {
      console.log('url', events.url); // /home
      // Loading starting
    }
    if (events instanceof NavigationEnd) {
      console.log('url', events.url); // /home
      // Loading End
    }
  });
 }
}
