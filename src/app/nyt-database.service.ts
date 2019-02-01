import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
// import { map } from 'rxjs/operators'
import { fireHelper } from './firebase-helper.js';

@Injectable({
  providedIn: 'root'
})
export class NytDatabaseService {
  sectionData;

  constructor(private db: AngularFireDatabase) {
    this.sectionData = this.db.list('albums')
  }

  getArticles() {

    return fireHelper(this.sectionData);

    // return this.sectionData.snapshotChanges().pipe(
    //   map(actions => 
    //    actions.map(a => ({ key: a.key, ...a.payload.val() }))
    //   )
    // );

  }


   



}
