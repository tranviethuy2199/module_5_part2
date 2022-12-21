import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictonaryPageComponent } from './dictonary-page.component';

describe('DictonaryPageComponent', () => {
  let component: DictonaryPageComponent;
  let fixture: ComponentFixture<DictonaryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictonaryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictonaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
