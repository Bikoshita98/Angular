import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
displayElement = false;

showDisplay() {
  this.displayElement = !this.displayElement;
}
  // title = 'learnAngular';
  title = true;
}
