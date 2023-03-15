import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocationInterface } from '../models/locationInterface';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  locationCollection: AngularFirestoreCollection<LocationInterface> | undefined;
  locations: Observable<LocationInterface[]> | undefined;
  location: Observable<LocationInterface> | undefined;

  constructor( public afs: AngularFirestore ) { }


  getLocations() {

    this.locationCollection = this.afs.collection<LocationInterface>('locations');
    this.locations = this.locationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as LocationInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.locations;

  }

  addLocation(location: LocationInterface) {
    return this.afs.collection('locations').add(location);
  }

}
