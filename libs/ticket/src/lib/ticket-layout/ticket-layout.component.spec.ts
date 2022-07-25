import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketLayoutComponent } from './ticket-layout.component';

describe('TicketLayoutComponent', () => {
  let component: TicketLayoutComponent;
  let fixture: ComponentFixture<TicketLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketLayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
