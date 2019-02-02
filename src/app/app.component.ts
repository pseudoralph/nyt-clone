import { Component } from '@angular/core';
import { NytDatabaseService } from './nyt-database.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private db: NytDatabaseService) { }

  navOpen: Boolean;
  sectionToDisplay;

  toggleNav() {
    this.navOpen = this.navOpen ? false : true;
  }

  setSectionToLoad(section){
    this.sectionToDisplay = this.db.getArticles(`${section}/articles`)
    this.toggleNav();
  }

}
