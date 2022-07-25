import { Component, OnInit } from '@angular/core';
import { Ticket } from '@poc/ticket';
import { take, tap } from 'rxjs';
import { TicketService } from './ticket.service';

@Component({
  selector: 'poc-ticket-rest',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private s: TicketService) {}

  ngOnInit(): void {
    this.s
      .getAll()
      .pipe(
        tap((tickets: Ticket[]) => {
          this.tickets = tickets;
        }),
        take(1)
      )
      .subscribe();
  }
}
