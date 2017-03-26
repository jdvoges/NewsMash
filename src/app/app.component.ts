import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div id="wrapper">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>

    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
