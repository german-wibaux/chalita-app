import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { PropertyInterface } from '../models/propiedadInterface';
import { Observable } from 'rxjs';
import { UrldeletedInterface } from '../models/urldeletedInterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlsPhotoService {

  urlsCollection: AngularFirestoreCollection<UrldeletedInterface> = null;
  urls: Observable<PropertyInterface[]>;
  url: Observable<PropertyInterface>;
  urlDoc: AngularFirestoreDocument<PropertyInterface>;

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
