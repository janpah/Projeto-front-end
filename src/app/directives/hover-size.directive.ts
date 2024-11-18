import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverSize]'
})
export class HoverSizeDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Aumenta o botão ao passar o mouse
  @HostListener('mouseenter') onMouseEnter() {
    this.setScale('1.2');
  }

  // Retorna ao tamanho original quando o mouse sai
  @HostListener('mouseleave') onMouseLeave() {
    this.setScale('1');
  }

  private setScale(scale: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${scale})`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.2s ease');
  }
}
