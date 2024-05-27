import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

export class Message {
  message?: string;
  time?: Date;
  user?: string;
 
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreDataService {
  messageRef!: AngularFirestoreCollection<Message>;

  constructor(db: AngularFirestore, private firestore: AngularFirestore) {
    this.messageRef = db.collection('/message', ref=>ref.orderBy('time','asc'));
   }

   getAllDocuments() {
    return this.messageRef.snapshotChanges();
   }

   create(message: Message) {
    message.time = new Date();
    return this.messageRef.add({ ...message });
   }

   delete(id: string): Promise<void> {
    return this.messageRef.doc(id).delete();
   }

  update(id: string, data: Partial<Message>): Promise<void> {
  return this.messageRef.doc(id).update(data);
}

}
