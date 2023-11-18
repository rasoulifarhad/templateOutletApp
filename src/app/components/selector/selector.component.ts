import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent {

  selected?: string;

  @Input()
  options?: string[];

  @Input()
  optionTemplate?: TemplateRef<any>

  @Output()
  selectionChanged = new EventEmitter<string>();

  @Input()
  displayFunc: (value: string) => string = x => x;

  @Input()
  getIconFunc!: (name: string) => IconProp;

  @Input()
  name?: string;

  selectOption(option: string) {
    this.selected = option;
    this.selectionChanged.emit(option);
  }
}
