import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private router: ActivatedRoute) {
    this.router.data.subscribe(data => {
      console.log('home component data', data); // { title: 'Welcome to Home Page' }
    });
   }
}
