import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      console.log(data);
     });
  }

  ngOnInit(): void {
   
  }
}

// ES2015 ==> Class
// ReactJS Angular Class 
// function ReactJS 
// Angular 
