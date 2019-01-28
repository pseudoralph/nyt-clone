import { Component, Output, EventEmitter } from '@angular/core';
import { dateBuilder } from '../models/date-builder';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() navVisible = new EventEmitter();

  showSearchBox: boolean;
  today: string = dateBuilder();

  mastHeadings: string[] = [ 'World', 'U.S.', 'Politics', 'N.Y.', 'Business', 'Opinion', 'Tech', 'Science', 'Health', 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Magazine', 'T Magazine', 'Real Estate', 'Video'];

  toggleNav() {
    this.navVisible.emit();
  }

  goSearch(query) {
    console.log(query)
  }

}
