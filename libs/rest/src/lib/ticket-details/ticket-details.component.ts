import { Component, Input, OnInit } from '@angular/core';
import { TicketVm } from './ticket-details.pipe';

@Component({
  selector: 'poc-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss'],
})
export class TicketDetailsComponent {
  @Input() ticket!: TicketVm;

  // calculateUpdatedDateLabel(ticket) {
  // const today = new Date();
  // const differenceInTime = today.getTime() - date;
  // const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  // if (differenceInDays < 1) return `Today`;
  // if (differenceInDays === 1) return `Yesterday`;
  // return `${differenceInDays} Days Ago`;
  // }
}
