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
    const tickets: Ticket[] = [
      {
        id: '1',
        title: 'Update effect',
        assignee: 'Erxk',
        description: 'Add an update effect',
      },
      {
        id: '2',
        title: 'Delete effect',
        assignee: 'Erxk',
        description: 'Add a delete effect',
      },
      {
        id: '3',
        title: 'Refactor mat-chip',
        assignee: 'Erxk',
        description: 'Remove material from mat-chip',
      },
      {
        id: '4',
        title: 'Fix more-options',
        assignee: 'Erxk',
        description: 'Fix animation on hover',
      },
      {
        id: '5',
        title: 'Refactor Action',
        assignee: 'Erxk',
        description: 'Improve type on action model',
      },
    ];

    return { tickets };
  }
}
