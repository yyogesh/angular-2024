import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appElementHover]',
  standalone: true
})
export class ElementHoverDirective {
  @HostBinding('class.elment-outline') private isHover: boolean = false;
  constructor(private readonly elementRef: ElementRef, 
    private readonly renderer: Renderer2) { 
     // this.renderer.setStyle(elementRef.nativeElement, 'backgroundColor', 'gray');
    }

    @HostListener('mouseover')
    onMouseHover() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow');
      this.isHover = true;
    }

    @HostListener('mouseout')
    onMouseOut() {
      this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'gray');
      this.isHover = false;
    }
}
