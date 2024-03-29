import { Directive, ElementRef, HostListener, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appTrimInput]',
})
export class TrimInputDirective {
  constructor(private el: ElementRef, @Self() private ngControl: NgControl) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    value = value.trim();
    this.ngControl.control?.setValue(value);
  }
}