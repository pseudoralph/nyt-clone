import { Component } from '@angular/core';
import { NytArticlesService } from '../nyt-articles.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  sectionArticles;

  constructor(private response: NytArticlesService) { }  

  loadNytContent() {
    this.response.getArticlesBySection('science')
      .subscribe(response => {
        this.sectionArticles = response['results']
        console.log(this.sectionArticles)
        
      })
  }

}
