import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnebComponent } from './oneb.component';

describe('OnebComponent', () => {
  let component: OnebComponent;
  let fixture: ComponentFixture<OnebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
