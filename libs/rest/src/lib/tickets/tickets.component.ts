import { Component, OnInit } from '@angular/core';
import { Ticket } from '@poc/ticket';
import { combineLatest, map, tap, take } from 'rxjs';
import { TicketService } from '../ticket/ticket.service';
import { TicketsRepository } from './state/tickets.repository';

@Component({
  selector: 'poc-tickets-rest',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  ticketVm$ = combineLatest([this.repo.tickets$, this.repo.activeTicket$]).pipe(
    map(([tickets, activeTicket]) => ({ tickets, activeTicket }))
  );

  constructor(private repo: TicketsRepository, private s: TicketService) {}

  setActive(id: string) {
    this.repo.setActiveId(id);
  }

  ngOnInit(): void {
    this.s
      .getAll()
      .pipe(
        tap((tickets: Ticket[]) => this.repo.setTickets(tickets)),
        tap((tickets: Ticket[]) => this.repo.setActiveId(tickets[0].id)),
        take(1)
      )
      .subscribe();
  }
}
