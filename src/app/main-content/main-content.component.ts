import { Component, Input, OnInit } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  articles;

  constructor(private db: NytDatabaseService) { }

  ngOnInit() {
    this.loadSection.subscribe(x=>console.log(x))

  }



  @Input() loadSection: Observable<string>;

  // articles: Observable<any>;


}
