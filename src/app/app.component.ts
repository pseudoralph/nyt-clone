import { Component } from '@angular/core';
import { Observable, from } from 'rxjs';

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
    // const payload = function() { return of (new Observable<string>(section))}

    // this.sectionToDisplay = payload();

    this.sectionToDisplay = from(new Observable<string>(section))
    this.toggleNav();
  }

}
