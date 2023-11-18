import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selector-01',
  templateUrl: './selector-01.component.html',
  styleUrls: ['./selector-01.component.css']
})
export class Selector01Component {
  selected?: string;

  @Input()
  options?: string[];

  @Output()
  selectionChanged = new EventEmitter<string>();

  selectOption(option: string) {
    this.selected = option;
    this.selectionChanged.emit(option);
  }

}
