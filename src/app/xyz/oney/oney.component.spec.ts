import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneyComponent } from './oney.component';

describe('OneyComponent', () => {
  let component: OneyComponent;
  let fixture: ComponentFixture<OneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
