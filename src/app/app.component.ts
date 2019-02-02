import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navOpen: Boolean;
  sectionToDisplay: Observable<string>;

  toggleNav() {
    this.navOpen = this.navOpen ? false : true;
  }

  setSectionToLoad(section){
    const payload = function():Observable<string> { return new Observable<string>(section) };

    this.sectionToDisplay = payload();
    this.toggleNav();
  }

}
