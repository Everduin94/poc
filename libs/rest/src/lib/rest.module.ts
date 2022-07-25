import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { DevelopmentDetailsComponent } from './development-details/development-details.component';
import { TicketDetailsPipe } from './ticket-details/ticket-details.pipe';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    TicketComponent,
    TicketDetailsComponent,
    DevelopmentDetailsComponent,
    TicketDetailsPipe,
  ],
  exports: [TicketComponent],
})
export class RestModule {}
