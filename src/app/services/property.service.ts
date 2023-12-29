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

  getPropertiesFiltering(conditions: { name: string; value: string; }[]) {
    
    switch (conditions.length) {

      case 1: {
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties', ref => ref.where(conditions[0].name, '==', conditions[0].value));
          
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
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties', ref => ref.where(conditions[0].name, '==', conditions[0].value)
        .where(conditions[1].name, '==', conditions[1].value));
          
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
        this.propertyCollection = this.afs.collection<PropertyInterface>('properties', ref => ref.where(conditions[0].name, '==', conditions[0].value)
        .where(conditions[1].name, '==', conditions[1].value)
        .where(conditions[2].name, '==', conditions[2].value));
          
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
