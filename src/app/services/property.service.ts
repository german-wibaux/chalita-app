import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { PropertyInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyCollection: AngularFirestoreCollection<PropertyInterface> = null;
  properties: Observable<PropertyInterface[]>;
  property: Observable<PropertyInterface>;
  propertyDoc: AngularFirestoreDocument<PropertyInterface>;

  constructor(public afs: AngularFirestore) { }


  getProperties() {
    this.propertyCollection = this.afs.collection<PropertyInterface>('properties');
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropertyInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.properties;
  }  

  getPropertiesFiltering(binary, query) {
    
    switch (binary) {
      case 0: {
          this.propertyCollection = this.afs.collection<PropertyInterface>('properties');
          this.properties = this.propertyCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as PropertyInterface;
              const id = a.payload.doc.id;
              return { id, ...data };
            }))
          );
          return this.properties;          
      }
      
      case 1: {
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('location', '==', query.location));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 2: {
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindProperty', '==', query.property));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 3: {
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindProperty', '==', query.property).where('location', '==', query.location));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 4: {
        query.operation = query.operation.substr(1,query.operation.length - 1);
        query.operation = query.operation.substr(0,query.operation.length - 1);
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', query.operation));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 5: {
        query.operation = query.operation.substr(1,query.operation.length - 1);
        query.operation = query.operation.substr(0,query.operation.length - 1);
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', query.operation).where('location', '==', query.location));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 6: {
        query.operation = query.operation.substr(1,query.operation.length - 1);
        query.operation = query.operation.substr(0,query.operation.length - 1);
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', query.operation).where('kindProperty', '==', query.property));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      case 7: {
        query.operation = query.operation.substr(1,query.operation.length - 1);
        query.operation = query.operation.substr(0,query.operation.length - 1);
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', query.operation).where('kindProperty', '==', query.property).where('location', '==', query.location));
        this.properties = this.propertyCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as PropertyInterface;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        return this.properties;          
      }

      default: {
        console.log("Invalid choice");
        break;
      }
    }

  }

  public getProperty(property) {
    this.propertyDoc = this.afs.collection('properties').doc(property);
    this.property = this.propertyDoc.snapshotChanges().pipe(map(action => {
      const id = action.payload.id;
      const data = action.payload.data() as PropertyInterface;

      return { id, ...data };
    }));

    return this.property;


  }

  addProperty(property: PropertyInterface) {
    return this.afs.collection('properties').add(property);
    //propertyCollection.add(property);


  }

  // getFileUploads(numberItems): AngularFireList<FileUpload> {
  //   return this.afs.list('/test', ref =>
  //     ref.limitToLast(numberItems));
  // }

  deletProperty(property: PropertyInterface) {
    this.propertyDoc = this.afs.doc(`properties/${property.id}`);
    this.propertyDoc.delete();
  }

  updateProperty(property: PropertyInterface) {
    this.propertyDoc = this.afs.doc(`properties/${property.id}`);
    this.propertyDoc.update(property);
  }

  public getPropertiesAlternative() {
    console.log(this.afs.collection<PropertyInterface>('properties').snapshotChanges());
    return this.afs.collection<PropertyInterface>('properties').snapshotChanges();
  }


}
