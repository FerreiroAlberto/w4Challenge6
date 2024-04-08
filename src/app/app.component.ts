import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './feature/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-list></app-list>`,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ListComponent],
})
export class AppComponent {
  title = 'PetList';
}
