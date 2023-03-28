import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <app-component-a></app-component-a>
  <app-component-b></app-component-b>
  `,
})
export class AppComponent {

}