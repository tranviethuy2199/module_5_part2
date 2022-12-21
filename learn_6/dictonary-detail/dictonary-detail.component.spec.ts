import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictonaryDetailComponent } from './dictonary-detail.component';

describe('DictonaryDetailComponent', () => {
  let component: DictonaryDetailComponent;
  let fixture: ComponentFixture<DictonaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictonaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictonaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
