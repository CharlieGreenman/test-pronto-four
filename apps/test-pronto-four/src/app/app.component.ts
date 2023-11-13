import { Component } from '@angular/core';

@Component({
  selector: 'test-pronto-four-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'test-pronto-four';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
