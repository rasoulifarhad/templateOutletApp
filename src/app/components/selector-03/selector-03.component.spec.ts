import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector03Component } from './selector-03.component';

describe('Selector03Component', () => {
  let component: Selector03Component;
  let fixture: ComponentFixture<Selector03Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Selector03Component]
    });
    fixture = TestBed.createComponent(Selector03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
