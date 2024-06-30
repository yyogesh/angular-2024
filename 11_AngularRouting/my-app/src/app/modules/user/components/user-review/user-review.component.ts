import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrl: './user-review.component.scss'
})
export class UserReviewComponent {
  constructor(private router: ActivatedRoute) {
    console.log('user-review component', this.router.snapshot.queryParams['id'])
   // this.router.queryParamMap.subscribe
    this.router.queryParams.subscribe(params => {
      console.log(params['id']); // { order: "desc", page: "1", filter: "blue" }
    });
  }
}
