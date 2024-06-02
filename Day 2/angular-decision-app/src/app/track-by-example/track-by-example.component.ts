import { Component } from '@angular/core';
import { mockUpdateUserData, mockUserData } from './data';

@Component({
  selector: 'app-track-by-example',
  standalone: true,
  imports: [],
  templateUrl: './track-by-example.component.html',
  styleUrl: './track-by-example.component.scss'
})
export class TrackByExampleComponent {
  userData = mockUserData;

  onUpdateUserClick() {
    this.userData = mockUpdateUserData;
  }
}
