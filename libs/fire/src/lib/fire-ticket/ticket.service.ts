import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Ticket } from '@poc/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private firestore: Firestore) {}

  getAllTickets() {
    const c = collection(
      this.firestore,
      'tickets'
    ) as CollectionReference<Ticket>;
    return collectionData(c);
  }
}
