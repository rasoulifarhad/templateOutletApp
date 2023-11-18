import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTwoComponent } from './client-two.component';

describe('ClientTwoComponent', () => {
  let component: ClientTwoComponent;
  let fixture: ComponentFixture<ClientTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientTwoComponent]
    });
    fixture = TestBed.createComponent(ClientTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
