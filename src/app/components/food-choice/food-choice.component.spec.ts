import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChoiceComponent } from './food-choice.component';

describe('FoodChoiceComponent', () => {
  let component: FoodChoiceComponent;
  let fixture: ComponentFixture<FoodChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodChoiceComponent]
    });
    fixture = TestBed.createComponent(FoodChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
