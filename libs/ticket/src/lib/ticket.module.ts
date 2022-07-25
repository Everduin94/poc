import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { TicketLayoutComponent } from './ticket-layout/ticket-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [TicketComponent, TicketLayoutComponent],
  exports: [TicketComponent, TicketLayoutComponent],
})
export class TicketModule {}
