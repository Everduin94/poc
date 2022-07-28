import { Injectable } from '@angular/core';
import { createStore } from '@ngneat/elf';
import {
  withEntities,
  selectAllEntities,
  setEntities,
  addEntities,
  updateEntities,
  deleteEntities,
  withActiveId,
  selectActiveEntity,
  setActiveId,
} from '@ngneat/elf-entities';
import { Ticket } from '@poc/ticket';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TicketsRepository {
  activeTicket$: Observable<Ticket | undefined>;
  tickets$: Observable<Ticket[]>;

  private store;

  constructor() {
    this.store = this.createStore();
    this.tickets$ = this.store.pipe(selectAllEntities());
    this.activeTicket$ = this.store.pipe(selectActiveEntity());
  }

  setTickets(tickets: Ticket[]) {
    this.store.update(setEntities(tickets));
  }

  addTicket(ticket: Ticket) {
    this.store.update(addEntities(ticket));
  }

  updateTicket(id: Ticket['id'], ticket: Partial<Ticket>) {
    this.store.update(updateEntities(id, ticket));
  }

  deleteTicket(id: Ticket['id']) {
    this.store.update(deleteEntities(id));
  }

  setActiveId(id: Ticket['id']) {
    this.store.update(setActiveId(id));
  }

  private createStore(): typeof store {
    const store = createStore(
      { name: 'tickets' },
      withEntities<Ticket>(),
      withActiveId()
    );

    return store;
  }
}
