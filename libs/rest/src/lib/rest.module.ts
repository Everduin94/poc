import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { DevelopmentDetailsComponent } from './development-details/development-details.component';
import { TicketDetailsPipe } from './ticket-details/ticket-details.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TicketsComponent } from './tickets/tickets.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FontAwesomeModule],
  declarations: [
    TicketComponent,
    TicketDetailsComponent,
    DevelopmentDetailsComponent,
    TicketDetailsPipe,
    TicketsComponent,
  ],
  exports: [TicketComponent, TicketsComponent],
})
export class RestModule {}
