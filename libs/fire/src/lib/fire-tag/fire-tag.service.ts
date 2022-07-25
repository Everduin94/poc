import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

/**
*
- [X] Read 1 Item (Once)
- [X] Read Collection (Once)
- [X] Add to collection
- [ ] Update item
- [ ] Update item in collection
- [ ] Delete from collection
- [ ] Listen to Item
- [ ] Listen to Collection
- [ ] Fit in Angular/Fire comparison?
*/
@Injectable({
  providedIn: 'root',
})
export class FireTagService {
  constructor() {}

  async readDoc() {
    // const docRef = doc(db, "cities", "SF");
    // const docSnap = await getDoc(docRef);
    //
    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // doc.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }

  async readCollection() {
    // const querySnapshot = await getDocs(collection(db, "cities"));
    // querySnapshot.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
  }

  async addToCollection() {
    //  setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });
  }

  async updateDoc() {
    const washingtonRef = doc(db, 'cities', 'DC');

    await updateDoc(washingtonRef, {
      capital: true,
    });
  }
}
