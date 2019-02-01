import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navOpen: Boolean;
  sectionToDisplay;

  toggleNav() {
    this.navOpen = this.navOpen ? false : true;
  }

  setSectionToLoad(section){
    this.sectionToDisplay = section;
    this.toggleNav();
  }

}
