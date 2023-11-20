import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseValueComponent } from '../../directive/base-value.directive';

@Component({
  selector: 'app-display-edit',
  templateUrl: './display-edit.component.html',
  styleUrls: ['./display-edit.component.css']
})
export class DisplayEditComponent implements OnInit {

  @ViewChild('displayValue') displayValueComponent!: BaseValueComponent

  ngOnInit() {

  }
}
