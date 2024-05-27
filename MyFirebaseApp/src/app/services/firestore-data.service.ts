import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export class Tutorial {
  title?: string;
  subject?: string;
  createdTime?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  tutorialsRef!: AngularFirestoreCollection<Tutorial>;

  constructor(db: AngularFirestore) {
    this.tutorialsRef = db.collection('/tutorials', ref=>ref.orderBy('createdTime','asc'));
  }

  getAllDocuments() {
    return this.tutorialsRef.snapshotChanges();
  }

  create(tutorial: Tutorial) {
    tutorial.createdTime = new Date();
    return this.tutorialsRef.add({ ...tutorial });
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
