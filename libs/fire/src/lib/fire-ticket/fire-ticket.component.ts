import { Component, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Observable, tap } from 'rxjs';
import { Ticket } from '@poc/ticket';

@Component({
  selector: 'poc-fire-ticket',
  templateUrl: './fire-ticket.component.html',
  styleUrls: ['./fire-ticket.component.scss'],
})
export class FireTicketComponent {
  tickets$: Observable<Ticket[]>;

  constructor(private firestore: Firestore) {
    const c = collection(
      this.firestore,
      'tickets'
    ) as CollectionReference<Ticket>;
    this.tickets$ = collectionData(c);
  }
}
