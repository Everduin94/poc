import { TicketDetailsPipe } from './ticket-details.pipe';

describe('TicketDetailsPipe', () => {
  it('create an instance', () => {
    const pipe = new TicketDetailsPipe();
    expect(pipe).toBeTruthy();
  });
});
