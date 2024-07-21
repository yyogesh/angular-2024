import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
  @Input() title!: string;
  @Input() content!: string;

  highlightContent() {
    console.log(`Highlighting content: ${this.content}`);
    // Implement actual highlighting logic here
  }
}
