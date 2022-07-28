/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Ticket } from '@poc/ticket';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDatabaseService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    const now = new Date();
    const tickets: Ticket[] = [
      {
        id: '1',
        title: 'Update effect',
        assignee: 'Erxk',
        description: 'Add an update effect',
        status: 'in progress',
        type: 'story',
        lastUpdated: now.getTime() - 1000 * 3600 * 24 * 0,
      },
      {
        id: '2',
        title: 'Delete effect',
        assignee: 'Erxk',
        description: 'Add a delete effect',
        status: 'blocked',
        type: 'story',
        lastUpdated: now.getTime() - 1000 * 3600 * 24 * 1,
      },
      {
        id: '3',
        title: 'Refactor mat-chip',
        assignee: 'Erxk',
        description: 'Remove material from mat-chip',
        status: 'assigned',
        type: 'story',
        lastUpdated: now.getTime() - 1000 * 3600 * 24 * 2,
      },
      {
        id: '4',
        title: 'Fix more-options',
        assignee: 'Erxk',
        description: 'Fix animation on hover',
        status: 'complete',
        type: 'bug',
        lastUpdated: now.getTime() - 1000 * 3600 * 24 * 3,
      },
      {
        id: '5',
        title: 'Refactor Action',
        assignee: 'Erxk',
        description: 'Improve type on action model',
        status: 'complete',
        type: 'bug',
        lastUpdated: now.getTime() - 1000 * 3600 * 24 * 4,
      },
    ];

    return { tickets };
  }
}
