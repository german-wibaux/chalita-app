import { Injectable } from '@angular/core';
import { OperationInterface } from '../models/operationInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';





@Injectable({
  providedIn: 'root'
})
export class OperationService {
  operationCollection: AngularFirestoreCollection<OperationInterface> | undefined;
  operations: Observable<OperationInterface[]> | undefined;
  operation: Observable<OperationInterface> | undefined;
  operationDoc: AngularFirestoreDocument<OperationInterface> | undefined;

  constructor(
    public afs: AngularFirestore
    ) { }


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
