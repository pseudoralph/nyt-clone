import { Component, OnInit } from '@angular/core';
import { NytArticlesService } from '../nyt-articles.service';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [NytArticlesService]
})
export class MainContentComponent implements OnInit {
  sectionArticles;

  constructor(private response: NytArticlesService) { }  

  ngOnInit() {
  }

  loadNytContent() {
    this.response.getArticlesBySection('science')
      .subscribe(response => {
        this.sectionArticles = response['results']
        console.log(this.sectionArticles)
        
      })
  }

}
