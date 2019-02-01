import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { fireHelper } from './firebase-helper.js';

@Injectable({
  providedIn: 'root'
})
export class NytDatabaseService {
  constructor(private db: AngularFireDatabase) { }

  getArticles() {
    return fireHelper(this.db.list('results'));
  }

  addSection(section, payload) {
    const date = new Date();

    this.db.object(section).set({ created: `${date}`, articles: payload });

  }

  

}
