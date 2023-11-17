import { Component, Input } from '@angular/core';
import { Choice } from 'src/app/interfaces/menu-item';

@Component({
  selector: 'app-food-choice',
  templateUrl: './food-choice.component.html',
  styleUrls: ['./food-choice.component.css']
})
export class FoodChoiceComponent {

  @Input()
  choice!: Choice;
}
