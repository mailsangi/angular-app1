import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnexComponent } from './onex.component';

describe('OnexComponent', () => {
  let component: OnexComponent;
  let fixture: ComponentFixture<OnexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
