import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { FoodMenuCardComponent } from './components/food-menu-card/food-menu-card.component';
import { FoodQuestionComponent } from './components/food-question/food-question.component';
import { FoodChoiceComponent } from './components/food-choice/food-choice.component';
import { FoodMenuOptionComponent } from './components/food-menu-option/food-menu-option.component';
import { RenderOptionPipe } from './pipe/render-option.pipe';
import { NgTemplateoutletExampleComponent } from './ng-templateoutlet-example/ng-templateoutlet-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    FoodMenuComponent,
    FoodMenuCardComponent,
    FoodQuestionComponent,
    FoodChoiceComponent,
    FoodMenuOptionComponent,
    RenderOptionPipe,
    NgTemplateoutletExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
