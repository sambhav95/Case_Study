import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputValidator]'
})
export class InputValidatorDirective {
  @Input() inputType:any;
  @Input() length:any;
  inputTypeOptions:any = {
    num: /^([0-9]{0,5})$/
  };
  @Input() amountMaxValue = 1000;
  constructor(public el: ElementRef) { }
  @HostListener('textInput', ['$event']) onKeyDown(event:any) {

    if (!event.data) {
      return true;
    }
   
    if (this.inputTypeOptions[this.inputType].test(event.data)) {
      if (!this.el.nativeElement.value && event.data === ' ') {
        return false;
      }
      if (this.inputType === 'num') {
        if (!this.el.nativeElement.value.length && (event.data === ',')) {
          return false;
        } else if (this.el.nativeElement.value.includes('.') && event.data === '.') {
          return false;

        } else {
          return this.validateLength(this.el.nativeElement.value + event.data);
        }
      }
      return this.validateLength(this.el.nativeElement.value + event.data);
    } else {
      return false;
    }
  }

validateLength(value:any) {
    if (this.inputType === 'num') {
      if (value > this.amountMaxValue) {
        return false;
      }
    }

    if (!this.length && this.length !== 0) {
      return true;
    } else {
      if (value.toString().length > this.length) {
        return false;
      } else {
        return true;
      }
    }
  }
}
