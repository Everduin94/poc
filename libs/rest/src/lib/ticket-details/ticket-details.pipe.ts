import { Pipe, PipeTransform } from '@angular/core';
import { Ticket, TicketStatus, TicketType } from '@poc/ticket';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faBug } from '@fortawesome/free-solid-svg-icons/faBug';
import { faQuestion } from '@fortawesome/free-solid-svg-icons/faQuestion';

export type TicketVm = Ticket & {
  statusClass: string;
  typeIcon: any; // There's a type for this but my lsp is being lame
  typeClass: string;
  createdDateLabel: string;
};

@Pipe({
  name: 'ticketDetails',
})
export class TicketDetailsPipe implements PipeTransform {
  transform(ticket: Ticket): TicketVm {
    return {
      ...ticket,
      statusClass: resolveStatusClass(ticket.status),
      typeIcon: resolveTypeIcon(ticket.type),
      typeClass: resolveTypeClass(ticket.type),
      createdDateLabel: '',
    };
  }
}

function resolveTypeIcon(type: TicketType) {
  if (type == 'bug') return faBug;
  if (type == 'story') return faBook;
  else return faQuestion;
}

function resolveTypeClass(type: TicketType) {
  if (type == 'bug') return 'red-bg';
  if (type == 'story') return 'green-bg';
  else return 'blue-bg';
}

function resolveStatusClass(status: TicketStatus) {
  if (status == 'complete') return 'green-bg';
  if (status == 'assigned') return 'white-bg';
  if (status == 'in progress') return 'blue-bg';
  if (status == 'blocked') return 'red-bg';
  return '';
}
