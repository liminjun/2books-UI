import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styles: [`
      .app {
        width: 1000px;
        margin: auto;
      }
      .main {
        background-color:white;      
      }
      
    `],
  template: `
      <div class="app">
        <app-nav-bar></app-nav-bar>
        <div class="main">
          <router-outlet></router-outlet>
        </div>
        <app-footer></app-footer>
      </div>
    `,
})
export class AppComponent {
  title = '图书轮流看';
}
