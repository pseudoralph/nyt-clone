import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { fireHelper } from './firebase-helper.js';

@Injectable({
  providedIn: 'root'
})
export class NytDatabaseService {
  sectionData;

  constructor(private db: AngularFireDatabase) {
    this.sectionData = this.db.list('results')
  }

  getArticles() {
    return fireHelper(this.sectionData);
  }

}
