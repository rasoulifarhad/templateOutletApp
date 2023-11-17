import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodQuestionComponent } from './food-question.component';

describe('FoodQuestionComponent', () => {
  let component: FoodQuestionComponent;
  let fixture: ComponentFixture<FoodQuestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodQuestionComponent]
    });
    fixture = TestBed.createComponent(FoodQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
