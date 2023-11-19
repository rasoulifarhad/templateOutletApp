import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent<T extends {name: string}> {

  selected?: T;

  @Input()
  label?: string
  @Input()
  options?: T[];

  @Input()
  optionTemplate?: TemplateRef<any>

  @Input()
  selectedTemplateRef?: TemplateRef<any>;
  @Output()
  selectionChanged = new EventEmitter<T>();

  @Input()
  displayFunc: (value: string) => string = x => x;

  @Input()
  getIconFunc!: (name: string) => IconProp;

  @Input()
  name?: string;

  selectOption(option: T) {
    this.selected = option;
    this.selectionChanged.emit(option);
  }
}
