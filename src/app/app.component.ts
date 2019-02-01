import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navOpen: Boolean;

  toggleNav() {
    this.navOpen = this.navOpen ? false : true;
  }

  setSectionToLoad(section){
    console.log(`now loading: ${section}`)

    this.toggleNav();
  }

}
