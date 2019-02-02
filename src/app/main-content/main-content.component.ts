import { Component, Input, OnInit } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';
import { Observable, isObservable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  articles;
  path;

  constructor(private db: NytDatabaseService) { }

  ngOnInit() {
    console.log(`isObservable?: ${isObservable(this.loadSection)}`)
    console.log(this.loadSection)

    // console.log(this.loadSection.subscribe().closed)
    
  }

  // export function fireHelper(payload) {
  //   return payload.snapshotChanges().pipe(
  //     map(actions => 
  //      actions.map(a => ({ key: a.key, ...a.payload.val() }))
  //     )
  //   )
  // }





  @Input() loadSection: Observable<string>;

  // articles: Observable<any>;


}
