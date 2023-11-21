import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule,BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSwimmer, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";

import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { FoodMenuCardComponent } from './components/food-menu-card/food-menu-card.component';
import { FoodQuestionComponent } from './components/food-question/food-question.component';
import { FoodChoiceComponent } from './components/food-choice/food-choice.component';
import { FoodMenuOptionComponent } from './components/food-menu-option/food-menu-option.component';
import { RenderOptionPipe } from './pipe/render-option.pipe';
import { NgTemplateoutletExampleComponent } from './ng-templateoutlet-example/ng-templateoutlet-example.component';
import { SelectorComponent } from './components/selector/selector.component';
import { Selector01Component } from './components/selector-01/selector-01.component';
import { Selector03Component } from './components/selector-03/selector-03.component';
import { ClientOneComponent } from './components/client-one/client-one.component';
import { ClientTwoComponent } from './components/client-two/client-two.component';
import { DisplayEditComponent } from './crud/operations/display-edit/display-edit.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

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
    NgTemplateoutletExampleComponent,
    SelectorComponent,
    Selector01Component,
    Selector03Component,
    ClientOneComponent,
    ClientTwoComponent,
    DisplayEditComponent,
    MenuComponent,
    MenuItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    FontAwesomeModule

  ],
  providers: [BsDropdownConfig, MenuComponent, MenuItemComponent  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
