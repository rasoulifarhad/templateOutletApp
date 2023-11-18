import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Selector01Component } from './selector-01.component';

describe('Selector01Component', () => {
  let component: Selector01Component;
  let fixture: ComponentFixture<Selector01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Selector01Component]
    });
    fixture = TestBed.createComponent(Selector01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
