import { Component, Input, OnInit } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';
import { Observable } from 'rxjs';
import { isObservable } from 'rxjs'

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
  }



  @Input() loadSection: Observable<string>;

  // articles: Observable<any>;


}
