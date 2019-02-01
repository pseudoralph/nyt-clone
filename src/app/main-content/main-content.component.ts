import { Component, Input } from '@angular/core';
import { NytDatabaseService } from '../nyt-database.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  @Input() sectionArticles: string;

  constructor(private db: NytDatabaseService) {  }  
 
  getFromDb() {
    this.db.getArticles(this.sectionArticles).subscribe(x=> console.log(x))
  }

}
