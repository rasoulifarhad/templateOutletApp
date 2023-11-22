import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildDirective } from '../child.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, AfterViewInit {

  @ViewChild(ChildDirective)
  child! : ChildDirective;

  @ViewChild('myDiv')
  divChild! : HTMLElement;


  ngAfterViewInit(): void {
    console.log("ngAfterViewInit parent with child = ", this.child);
    console.log("ngAfterViewInit parent with div child = ", this.divChild);
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.child);  }

}
