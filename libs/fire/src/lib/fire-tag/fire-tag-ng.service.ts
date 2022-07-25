import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  docSnapshots,
  Firestore,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireTagNgService {
  constructor(private firestore: Firestore) {}

  /**
   * Read One Document
   */
  readDocumentNg() {
    const docItem = doc(this.firestore, 'foo/1');
    return docData(docItem);
  }

  /**
   * What is the difference? docData vs docSnapshots
   */
  readDocumentSnapshotNg() {
    const docItem = doc(this.firestore, 'foo/1');
    return docSnapshots(docItem);
  }

  /**
   * Read Collection
   */
  readCollectionNg() {
    const result = collection(this.firestore, 'items');
    return collectionData(result);
  }

  /**
   * Add Document to Collection
   */
  addToCollectionNg(item) {
    setDoc(doc(this.firestore, 'cities', 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    });
  }

  /**
   * Update One Document
   */
  updateDocumentNg() {
    const washingtonRef = doc(this.firestore, 'cities', 'DC');
    updateDoc(washingtonRef, {
      capital: true,
    });
  }
}
