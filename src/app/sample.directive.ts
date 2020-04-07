import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSample]',
})
export class SampleDirective {
  constructor() {}

  @HostBinding('className')
  cssClass = 'font-weight-bold';

  @HostBinding('style.color')
  colorValue = 'blue';

  @HostListener('mouseover', ['$event'])
  over(args) {
    args.target.style.color = 'green';
  }

  @HostListener('mouseout', ['$event'])
  out(args) {
    args.target.style.color = 'blue';
  }
}
