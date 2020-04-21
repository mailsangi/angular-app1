import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneaComponent } from './onea.component';

describe('OneaComponent', () => {
  let component: OneaComponent;
  let fixture: ComponentFixture<OneaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
