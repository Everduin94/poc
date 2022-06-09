/**
 * @jest-environment node
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireTicketComponent } from './fire-ticket.component';

describe('FireTicketComponent', () => {
  let component: FireTicketComponent;
  let fixture: ComponentFixture<FireTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FireTicketComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
