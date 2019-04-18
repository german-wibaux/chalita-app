import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { OperationInterface } from '../models/operationInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operationCollection: AngularFirestoreCollection<OperationInterface> = null;
  operations: Observable<OperationInterface[]>;
  operation: Observable<OperationInterface>;
  operationDoc: AngularFirestoreDocument<OperationInterface>;

  constructor(public afs: AngularFirestore) { }


  getOperations() {
    this.operationCollection = this.afs.collection<OperationInterface>('kindOperation');
    this.operations = this.operationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as OperationInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.operations;
  }


}
