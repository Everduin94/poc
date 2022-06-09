import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticket'
})
export class TicketPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
