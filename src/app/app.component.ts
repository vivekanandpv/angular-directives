import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cssString = 'font-weight-bold';
  cssStringArray = ['text-success', 'font-italic'];
  cssObject = {
    'text-danger': true,
    'font-weight-bold': true,
  };
}
