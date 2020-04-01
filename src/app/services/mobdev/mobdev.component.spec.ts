import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobdevComponent } from './mobdev.component';

describe('MobdevComponent', () => {
  let component: MobdevComponent;
  let fixture: ComponentFixture<MobdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
