import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuOptionComponent } from './food-menu-option.component';

describe('FoodMenuOptionComponent', () => {
  let component: FoodMenuOptionComponent;
  let fixture: ComponentFixture<FoodMenuOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodMenuOptionComponent]
    });
    fixture = TestBed.createComponent(FoodMenuOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
