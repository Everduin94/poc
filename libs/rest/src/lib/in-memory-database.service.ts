/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDatabaseService implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {
    /*console.log('creating DB', new Date());*/
    return {};
  }
}
