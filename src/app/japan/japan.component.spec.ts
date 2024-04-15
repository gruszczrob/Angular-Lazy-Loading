import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanComponent } from './japan.component';

describe('JapanComponent', () => {
  let component: JapanComponent;
  let fixture: ComponentFixture<JapanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JapanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JapanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
