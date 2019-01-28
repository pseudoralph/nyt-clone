import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() navVisible = new EventEmitter();

  navElements = [
    {text: 'Home Page', feature: null}, 
    {text: 'World', feature: 'expandable'}, 
    {text: 'U.S.', feature: 'expandable'}, 
    {text: 'Politics', feature: 'expandable'}, 
    {text: 'N.Y.', feature: 'expandable'}, 
    {text: 'Business', feature: 'expandable'}, 
    {text: 'Opinion', feature: 'expandable'}, 
    {text: 'Tech', feature: 'expandable'}, 
    {text: 'Science', feature: 'expandable'}, 
    {text: '', feature: 'line'}, 
    {text: 'Arts', feature: 'expandable'}, 
    {text: 'Books', feature: 'expandable'}, 
    {text: 'Style', feature: 'expandable'}, 
    {text: 'Food', feature: 'expandable'}, 
    {text: 'Travel', feature: null}, 
    {text: 'Magazine', feature: null}, 
    {text: 'T Magazine', feature: null}, 
    {text: 'Real Estate', feature: 'expandable'}, 
    {text: 'Obituaries', feature: null}, 
    {text: 'Video', feature: 'expandable'}, 
    {text: 'The Upshot', feature: null}, 
    {text: '', feature: 'line'}, 
    {text: 'More',  feature: 'expandable'}
  ];

  navOut() {
    this.navVisible.emit();
  }

}
