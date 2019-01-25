import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mastHeadings: string[] = [ 'World', 'U.S.', 'Politics', 'N.Y.', 'Business', 'Opinion', 'Tech', 'Science', 'Health', 'Sports', 'Arts', 'Books', 'Style', 'Food', 'Travel', 'Magazine', 'T Magazine', 'Real Estate', 'Video'];

  navOpen: Boolean;

  toggleNav() {
    this.navOpen = this.navOpen ? false : true;

    console.log(this.navOpen)
  }

}
