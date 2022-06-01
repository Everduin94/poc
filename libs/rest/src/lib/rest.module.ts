import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDatabaseService } from './in-memory-database.service';
import { TicketComponent } from './ticket/ticket.component';

const dev = true;
@NgModule({
  imports: [
    CommonModule,

    dev
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService, {
          delay: 0,
          passThruUnknownUrl: true,
        })
      : [],
  ],
  declarations: [TicketComponent],
})
export class RestModule {}
