import { Injectable } from '@angular/core';
import { PropertyInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { UrldeletedInterface } from '../models/urldeletedInterface';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class UrlsPhotoService {

  urlsCollection: AngularFirestoreCollection<UrldeletedInterface> | undefined;
  urls: Observable<PropertyInterface[]> | undefined;
  url: Observable<PropertyInterface> | undefined;
  urlDoc: AngularFirestoreDocument<PropertyInterface> | undefined;

  constructor( public afs: AngularFirestore ) { }


  getUrls() {
    this.urlsCollection = this.afs.collection<UrldeletedInterface>('url-deleted');
    this.urls = this.urlsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as UrldeletedInterface;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return this.urls;
  }

  addUrl(url: UrldeletedInterface) {
    return this.afs.collection('url-deleted').add(url);
  }

}
