import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentDetailsComponent } from './development-details.component';

describe('DevelopmentDetailsComponent', () => {
  let component: DevelopmentDetailsComponent;
  let fixture: ComponentFixture<DevelopmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopmentDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
