import { Component, Input } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  constructor(private db: NytDatabaseService) {  }  
  
  @Input() sectionArticles: Observable<any>;
  articles;
  
  getFromDb() {
    this.articles = this.db.getArticles(`${this.sectionArticles}/articles`)
  }

  

}
