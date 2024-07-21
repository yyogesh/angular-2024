import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {
  @ViewChild('parentTitle') parentTitleElement!: ElementRef;
  @ViewChild('firstChild') firstChildComponent!: ChildComponent;
  @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>;

  items = [1, 2, 3];

  ngAfterViewInit() {
    console.log('Parent title:', this.parentTitleElement.nativeElement.textContent);
    console.log('First child:', this.firstChildComponent);
    console.log('All children:', this.childComponents.toArray());
  }

  modifyFirstChild() {
    this.firstChildComponent.title = 'Modified First Child';
    this.firstChildComponent.content = 'This content has been changed';
    this.firstChildComponent.highlightContent();
  }

  highlightAllChildren() {
    console.log('Highlighting all children...', this.childComponents, );
    this.childComponents.forEach(child => child.highlightContent());
  }
}
