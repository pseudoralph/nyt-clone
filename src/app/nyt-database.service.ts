import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database'
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class NytDatabaseService {
  sectionData;

  constructor(private db: AngularFireDatabase) {
    this.sectionData = this.db.list('ny-times-clone')
  }

  getArticles() {
    return this.sectionData.valueChanges();

  }

      //
    // return this.albums.snapshotChanges().pipe(
    //   map(actions => 
    //    actions.map(a => ({ key: a.key, ...a.payload.val() }))
    //   )
    // );



}
