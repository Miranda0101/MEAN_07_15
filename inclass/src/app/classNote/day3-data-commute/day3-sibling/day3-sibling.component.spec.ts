import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3SiblingComponent } from './day3-sibling.component';

describe('Day3SiblingComponent', () => {
  let component: Day3SiblingComponent;
  let fixture: ComponentFixture<Day3SiblingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3SiblingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Day3SiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
