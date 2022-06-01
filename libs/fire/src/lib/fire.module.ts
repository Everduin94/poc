import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FireTicketComponent } from './fire-ticket/fire-ticket.component';

const dev = true;
@NgModule({
  imports: [
    CommonModule,

    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBrY0znyz3oRt7wSx6blaPLXpR4yfeds8k',
        authDomain: 'yami-backend.firebaseapp.com',
        databaseURL: 'https://yami-backend.firebaseio.com',
        projectId: 'yami-backend',
        storageBucket: 'yami-backend.appspot.com',
        messagingSenderId: '910952399452',
        appId: '1:910952399452:web:e93e9a184e6a326c151c99',
        measurementId: 'G-ZLFXZ3MC8W',
      })
    ),
    provideFirestore(() => {
      const firestore = initializeFirestore(getApp(), {
        experimentalForceLongPolling: !dev ? false : true,
      });
      if (dev) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
        enableIndexedDbPersistence(firestore);
      }

      return firestore;
    }),
    provideAuth(() => {
      const auth = initializeAuth(getApp(), {
        persistence: !dev
          ? indexedDBLocalPersistence
          : browserSessionPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      });
      if (dev) {
        connectAuthEmulator(auth, 'http://localhost:9099');
      }

      return auth;
    }),
    provideStorage(() => getStorage()),
  ],
  declarations: [FireTicketComponent],
})
export class FireModule {}
