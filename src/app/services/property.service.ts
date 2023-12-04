import { Injectable } from '@angular/core';
import { PropertyInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';





@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  propertyCollection: AngularFirestoreCollection<PropertyInterface> | undefined;
  propertyCollection1: AngularFirestoreCollection<PropertyInterface> | undefined;
  properties: Observable<PropertyInterface[]> | undefined;
  property: Observable<PropertyInterface> | undefined;
  propertyDoc: AngularFirestoreDocument<PropertyInterface> | undefined;

  constructor(public afs: AngularFirestore) { }


  getProperties() {
    this.propertyCollection = this.afs.collection<PropertyInterface>('properties',ref => ref.orderBy('created', 'desc'));
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropertyInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.properties;
  }  

  getPropertiesFiltering(binary: any, query: { location: any; property: any; operation: string; }) {

    console.log('Binary value');
    console.log(binary);
    
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
        // query.operation = query.operation.substr(1,query.operation.length - 1);
        // query.operation = query.operation.substr(0,query.operation.length - 1);
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
        // query.operation = query.operation.substr(1,query.operation.length - 1);
        // query.operation = query.operation.substr(0,query.operation.length - 1);
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
        // query.operation = query.operation.substr(1,query.operation.length - 1);
        // query.operation = query.operation.substr(0,query.operation.length - 1);
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
        return this.properties;
      }
    }

  }

  public getProperty(property: string | undefined) {
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
    // console.log(this.afs.collection<PropertyInterface>('properties').snapshotChanges());
    return this.afs.collection<PropertyInterface>('properties').snapshotChanges();
  }

  public getPropertiesAlquileres() {
      this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', 'Alquiler temporario'));      
      this.properties = this.propertyCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as PropertyInterface;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      return this.properties;      
  }

  public getPropertiesAlquileresPer() {
    this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', 'Alquiler permanente'));      
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropertyInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.properties;      
  }

  public getPropertiesVenta() {
    this.propertyCollection = this.afs.collection<PropertyInterface>('properties' , ref => ref.where('kindOperation', '==', 'Venta'));      
    this.properties = this.propertyCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PropertyInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.properties;      
  }

}
