import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {

  // constructor(public elementRef: ElementRef) { }

  // ngOnInit(){
  //   this.elementRef.nativeElement.style.background = "green";
  // }

  constructor() { }

  @HostBinding('style.background') color: any

  ngOnInit() {
    this.color = "pink";
  }

}
