import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  books = [
    'War and Peace',
    'The C++ Programming Language',
    'Effective Java',
    'Programming C# 5.0',
    'Design Patterns',
  ];
}
