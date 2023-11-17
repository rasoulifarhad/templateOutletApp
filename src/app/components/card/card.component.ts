import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // title could be a string or a TemplateRef. In case it is a string we will use string interpolation to bind
  // it to the template, otherwise, we will use ngTemplateOutlet.
  @Input()
  title?: string;
  @Input()
  titleTemplate: TemplateRef<any> | null = null;


  isTitleAsString = () => typeof this.title == 'string';
}
