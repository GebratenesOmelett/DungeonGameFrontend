import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovePanelComponent } from './move-panel.component';

describe('MovePanelComponent', () => {
  let component: MovePanelComponent;
  let fixture: ComponentFixture<MovePanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovePanelComponent]
    });
    fixture = TestBed.createComponent(MovePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
