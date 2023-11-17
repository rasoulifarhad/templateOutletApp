import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-question',
  templateUrl: './food-question.component.html',
  styleUrls: ['./food-question.component.css']
})
export class FoodQuestionComponent {

  @Input()
  question!: string;
}
