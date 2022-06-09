import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FireTicketComponent } from './fire-ticket/fire-ticket.component';
import { TicketPipe } from './fire-ticket/ticket.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [FireTicketComponent, TicketPipe],
  exports: [FireTicketComponent],
})
export class FireModule {}
