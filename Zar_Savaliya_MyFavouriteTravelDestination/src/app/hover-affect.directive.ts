import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affectStyle?: string;
  private originalBorder?: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyles();
  }

  private addStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    } else if (this.affectStyle === 'bold') {
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
  }

  private removeStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
    } else if (this.affectStyle === 'bold') {
      this.renderer.removeStyle(this.el.nativeElement, 'font-weight');
      
    }
  }
}