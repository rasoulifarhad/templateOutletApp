import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateoutletExampleComponent } from './ng-templateoutlet-example.component';

describe('NgTemplateoutletExampleComponent', () => {
  let component: NgTemplateoutletExampleComponent;
  let fixture: ComponentFixture<NgTemplateoutletExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTemplateoutletExampleComponent]
    });
    fixture = TestBed.createComponent(NgTemplateoutletExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
