import { Component, Input, OnInit } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  constructor(private db: NytDatabaseService, private articles: Observable<any>) { }

  ngOnInit() { 
    this.db.getArticles(`${this.loadSection}/results`).valueChanges().subscribe(results => {
      this.articles = results})
  }

  @Input() loadSection: string;

  // articles: Observable<any>;


}
