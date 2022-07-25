import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireTicketComponent } from './fire-ticket/fire-ticket.component';
import { TicketPipe } from './fire-ticket/ticket.pipe';
import { FireTagComponent } from './fire-tag/fire-tag.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FireTicketComponent, TicketPipe, FireTagComponent],
  exports: [FireTicketComponent],
})
export class FireModule {}
