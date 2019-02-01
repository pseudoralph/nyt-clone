import { Component } from '@angular/core';
import { NytArticlesService } from '../nyt-articles.service';
import { NytDatabaseService } from '../nyt-database.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  sectionArticles;

  constructor(private response: NytArticlesService, private db: NytDatabaseService) { }  

  // loadNytContent() {
  //   this.response.getArticlesBySection('science')
  //     .subscribe(response => {
  //       this.sectionArticles = response['results']
  //       console.log(this.sectionArticles)
        
  //     })
  // }

  getFromDb() {
    console.log('hi')

    
    this.db.getArticles().subscribe(response => console.log(response))

  }

}
