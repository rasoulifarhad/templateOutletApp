import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector-03',
  templateUrl: './selector-03.component.html',
  styleUrls: ['./selector-03.component.css']
})
export class Selector03Component {
  selected?: string;

  @Input()
  options?: string[];

  @Output()
  selectionChanged = new EventEmitter<string>();

  @Input()
  displayFunc: (value: string) => string = x => x;

  selectOption(option: string) {
    this.selected = option;
    this.selectionChanged.emit(option);
  }

}
