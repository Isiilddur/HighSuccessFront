import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input('appHighlight') highlightColor: any;

  @HostListener('click') onMouseClick() {
    this.highlight("#0EB2B2");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
