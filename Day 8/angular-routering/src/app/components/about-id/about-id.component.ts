import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about-id',
  templateUrl: './about-id.component.html',
  styleUrl: './about-id.component.scss'
})
export class AboutIdComponent {
  aboutId!: string;
  constructor(private activatedRoute: ActivatedRoute) { 
   this.activatedRoute.params.subscribe(params => {
    this.aboutId = params['id'];
    console.log(params)
   });
  }
}
