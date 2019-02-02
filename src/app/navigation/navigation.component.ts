import { Component, Output, EventEmitter } from '@angular/core';
import { NytArticlesService } from '../nyt-articles.service';
import { NytDatabaseService } from '../nyt-database.service';
import { SECTIONS } from './nav-section-headings';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() navVisible = new EventEmitter();
  @Output() sectionToLoad = new EventEmitter();
  navElements:Object[] = SECTIONS;

  constructor(private response: NytArticlesService, private db: NytDatabaseService) { }  

  navOut() {
    this.navVisible.emit();
  }

  loadSection(item) {
    this.db.exists(item).subscribe(section => {
      if (!section || (((+Date.now() - +Date.parse(section['created'])) / 3600000) > 24)){
        this.response.getArticlesBySection(item)
          .subscribe(response => {
            this.db.addSection(item, response['results'])
           });
      } 
    });
    this.sectionToLoad.emit(item);
  }
}