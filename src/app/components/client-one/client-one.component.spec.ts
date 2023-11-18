import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOneComponent } from './client-one.component';

describe('ClientOneComponent', () => {
  let component: ClientOneComponent;
  let fixture: ComponentFixture<ClientOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientOneComponent]
    });
    fixture = TestBed.createComponent(ClientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
