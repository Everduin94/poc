import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '@poc/ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>('api/tickets');
  }

  getById(id: string): Observable<Ticket> {
    return this.http.get<Ticket>('api/tickets/' + id);
  }

  constructor(private http: HttpClient) {}
}
