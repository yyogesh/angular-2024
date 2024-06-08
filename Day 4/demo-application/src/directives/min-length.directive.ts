import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMinLength]',
  standalone: true
})
export class MinLengthDirective {
  @Input('appMinLength') minLength: number = 0;
  @HostBinding('class.elment-outline') private isHover: boolean = false;
  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    const inputValue: string = this.el.nativeElement.value;
    if(inputValue.length < this.minLength) {
      this.isHover = true;
    } else {
      this.isHover = false;
    }
  }

}
