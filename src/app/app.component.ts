import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main-nav></main-nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'dimba-tips';
}