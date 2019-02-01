import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/database'


@Injectable({
  providedIn: 'root'
})
export class NytDatabaseService {
  sectionData;

  constructor(private db: AngularFireDatabase) {
    

  }

}
