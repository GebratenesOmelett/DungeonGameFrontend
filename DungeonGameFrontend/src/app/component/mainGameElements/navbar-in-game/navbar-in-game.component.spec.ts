import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarInGameComponent } from './navbar-in-game.component';

describe('NavbarInGameComponent', () => {
  let component: NavbarInGameComponent;
  let fixture: ComponentFixture<NavbarInGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarInGameComponent]
    });
    fixture = TestBed.createComponent(NavbarInGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
