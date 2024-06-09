import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
 @Input() country: any = {};
 @Output() onLike = new EventEmitter();

 onLikeClick() {
   this.onLike.emit(`Thanks! You liked on ${this.country.name.common}`);
 }
}
