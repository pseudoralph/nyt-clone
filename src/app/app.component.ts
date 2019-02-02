import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// import {  } from 'rxjs/observable'


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
    const payload = function():Observable<string> { return new Observable<string>(section) };

    this.sectionToDisplay = payload();
    // let something = new Observable.

    // this.sectionToDisplay = new Rx
    this.toggleNav();
  }

}
