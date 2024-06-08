import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElementHoverDirective } from '../directives/element-hover.directive';
import { MinLengthDirective } from '../directives/min-length.directive';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ElementHoverDirective,
    MinLengthDirective,
    ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  @ViewChild('secondNameInput') x!: ElementRef;
  title = 'demo-application';

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
  }

  onShowClick(firstNameInput: string) {
    console.log(firstNameInput);
  }

  onShowClick1(): void {
    console.log(this.x.nativeElement.value)
  }

}
