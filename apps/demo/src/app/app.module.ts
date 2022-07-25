import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { InMemoryDatabaseService, RestModule } from '@poc/rest';
import { FireModule } from '@poc/fire';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  initializeFirestore,
  provideFirestore,
  connectFirestoreEmulator,
  enableIndexedDbPersistence,
} from '@angular/fire/firestore';
import {
  browserPopupRedirectResolver,
  browserSessionPersistence,
  connectAuthEmulator,
  indexedDBLocalPersistence,
  initializeAuth,
  provideAuth,
} from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { TicketModule } from '@poc/ticket';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const isDev = !environment.production;
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RestModule,
    FireModule,
    environment.prototype
      ? HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabaseService, {
          delay: 0,
          passThruUnknownUrl: false,
        })
      : [],
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => {
      const firestore = initializeFirestore(getApp(), {
        experimentalForceLongPolling: isDev ? true : false,
      });

      if (isDev) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        enableIndexedDbPersistence(firestore);
      }

      return firestore;
    }),
    provideAuth(() => {
      const auth = initializeAuth(getApp(), {
        persistence: isDev
          ? browserSessionPersistence
          : indexedDBLocalPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      });

      if (isDev) {
        connectAuthEmulator(auth, 'http://localhost:9099');
      }

      return auth;
    }),
    provideStorage(() => getStorage()),
    TicketModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
