import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService } from '../in-memory-database.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TicketComponent } from './ticket.component';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketComponent],
      imports: [
        HttpClientTestingModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService, {
          delay: 0,
          passThruUnknownUrl: false,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return all 5 tickets', () => {
    const actual = component.tickets.length;
    const expected = 5;
    expect(actual).toBe(expected);
  });
});
