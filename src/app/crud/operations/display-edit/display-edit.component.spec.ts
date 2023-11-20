import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEditComponent } from './display-edit.component';

describe('DisplayEditComponent', () => {
  let component: DisplayEditComponent;
  let fixture: ComponentFixture<DisplayEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayEditComponent]
    });
    fixture = TestBed.createComponent(DisplayEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
