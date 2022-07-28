export type TicketStatus = 'in progress' | 'assigned' | 'complete' | 'blocked';
export type TicketType = 'story' | 'bug';
export interface Ticket {
  id: string;
  title: string;
  reporter?: string;
  assignee?: string;
  description?: string;
  storyPoints?: string;
  status: TicketStatus;
  type: TicketType;
  lastUpdated: number; // From Date
}
