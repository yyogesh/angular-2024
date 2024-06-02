import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ICourse } from './model/course.interface';
import { TrackByExampleComponent } from './track-by-example/track-by-example.component';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrackByExampleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-decision-app';
  showDetails = false;
  color = "green";

  course: ICourse[] = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React'},
    {id: 3, name: 'Java'},
    {id: 4, name: '.NET'}
  ]

  selectedCourse = 3;

  course1: {[key: string]: string} = {skill1: 'angular', skill2: 'react', skill3: 'vuejs'}

  objectKey = Object.keys;

  toggleDetails() {
    this.showDetails =!this.showDetails;
  }

  trackCourse(index: number, course: ICourse) {
    return course.id;
  }
}
