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

  @HostListener('click', ['$event'])
  handler(args) {
    console.log('Directive Handler', args);
  }
}
