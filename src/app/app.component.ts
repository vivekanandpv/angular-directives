import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  predicate = true;

  constructor() {
    setInterval(() => {
      this.predicate = !this.predicate;
    }, 1000);
  }
}
