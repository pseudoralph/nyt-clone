import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Output() navVisible = new EventEmitter();

  navElements: string[] = ['Home Page', 'World >', 'U.S. >', 'Politics >', 'N.Y. >', 'Business >', 'Opinion >', 'Tech >', 'Science >', '---', 'Arts >', 'Books >', 'Style >', 'Food >', 'Travel', 'Magazine', 'T Magazine', 'Real Estate >', 'Obituaries', 'Video >', 'The Upshot', '---', 'More >'];

  navOut() {
    this.navVisible.emit();
    console.log('lost focus')
  }

}
