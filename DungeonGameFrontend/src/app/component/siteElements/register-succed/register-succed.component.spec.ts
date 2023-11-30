import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSuccedComponent } from './register-succed.component';

describe('RegisterSuccedComponent', () => {
  let component: RegisterSuccedComponent;
  let fixture: ComponentFixture<RegisterSuccedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSuccedComponent]
    });
    fixture = TestBed.createComponent(RegisterSuccedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
