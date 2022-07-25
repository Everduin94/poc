import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireTagComponent } from './fire-tag.component';

describe('FireTagComponent', () => {
  let component: FireTagComponent;
  let fixture: ComponentFixture<FireTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireTagComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
