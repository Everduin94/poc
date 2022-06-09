export interface Ticket {
  id: string;
  title: string;
  reporter?: string;
  assignee?: string;
  description?: string;
  storyPoints?: string;
}
