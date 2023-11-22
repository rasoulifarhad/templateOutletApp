import { AfterViewInit, Directive, Input } from '@angular/core';
@Directive({
  selector: 'app-child'
})
export class ChildDirective implements AfterViewInit {

  @Input()
  id! : string;

  childName = 'childName';
  constructor() { }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit child');
  }

}
