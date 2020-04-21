import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnezComponent } from './onez.component';

describe('OnezComponent', () => {
  let component: OnezComponent;
  let fixture: ComponentFixture<OnezComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnezComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
