import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from '@poc/ticket';

// export interface Ticket {
//   id: string;
//   title: string;
//   reporter?: string;
//   assignee?: string;
//   description?: string;
//   storyPoints?: string;
// }

@Component({
  selector: 'poc-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent implements OnInit {
  @Input() ticket!: Ticket;

  constructor() {}

  ngOnInit(): void {}
}
