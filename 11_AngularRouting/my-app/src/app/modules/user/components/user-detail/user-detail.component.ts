import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  constructor(private router: ActivatedRoute) {
    console.log('user detail component', this.router.snapshot.paramMap.get('id'))
    this.router.params.subscribe(params => {
      console.log(params);
    });
  }
}
