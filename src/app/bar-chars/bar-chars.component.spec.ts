import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCharsComponent } from './bar-chars.component';

describe('BarCharsComponent', () => {
  let component: BarCharsComponent;
  let fixture: ComponentFixture<BarCharsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCharsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarCharsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
