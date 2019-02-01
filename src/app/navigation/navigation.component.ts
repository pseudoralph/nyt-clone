import { Component, Output, EventEmitter } from '@angular/core';
import { NytArticlesService } from '../nyt-articles.service';
import { NytDatabaseService } from '../nyt-database.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() navVisible = new EventEmitter();
  @Output() sectionToLoad = new EventEmitter();

  constructor(private response: NytArticlesService, private db: NytDatabaseService) { }  
  
  sectionArticles;

  navElements = [
    {text: 'Home Page', feature: null}, 
    {text: 'World', feature: 'expandable', q: 'world'}, 
    {text: 'U.S.', feature: 'expandable', q: 'national'}, 
    {text: 'Politics', feature: 'expandable', q: 'politics'}, 
    {text: 'N.Y.', feature: 'expandable', q: 'nyregion'}, 
    {text: 'Business', feature: 'expandable', q: 'business'}, 
    {text: 'Opinion', feature: 'expandable', q: 'opinion'}, 
    {text: 'Tech', feature: 'expandable', q: 'technology'}, 
    {text: 'Science', feature: 'expandable', q: 'science'}, 
    {text: '', feature: 'line'}, 
    {text: 'Arts', feature: 'expandable', q: 'arts'}, 
    {text: 'Books', feature: 'expandable', q: 'books'}, 
    {text: 'Style', feature: 'expandable', q: 'fashion'}, 
    {text: 'Food', feature: 'expandable', q: 'food'}, 
    {text: 'Travel', feature: null, q: 'travel'}, 
    {text: 'Magazine', feature: null, q: 'magazine'}, 
    {text: 'T Magazine', feature: null, q: 'tmagazine'}, 
    {text: 'Real Estate', feature: 'expandable', q: 'realestate'}, 
    {text: 'Obituaries', feature: null, q: 'obituaries'}, 
    {text: 'Video', feature: 'expandable'}, 
    {text: 'The Upshot', feature: null, q: 'upshot'}, 
    {text: '', feature: 'line'}, 
    {text: 'More',  feature: 'expandable'}
  ];

  navOut() {
    this.navVisible.emit();
  }

  loadSection(item) {
    this.response.getArticlesBySection(item)
    .subscribe(response => {
      this.db.addSection(item, response['results'])
    })
    this.sectionToLoad.emit(item);
  }

}
  // nytApiQueries: string[] = [ 'automobiles', 'health', 'home', 'insider', 'movies', 'sports', 'sundayreview', 'theater'];
