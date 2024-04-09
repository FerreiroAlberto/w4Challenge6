import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './feature/list/list.component';
import { HeaderComponent } from './feature/header/header.component';
import { FooterComponent } from './feature/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-header></app-header> <app-list></app-list>
    <app-footer></app-footer>`,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ListComponent, HeaderComponent, FooterComponent],
})
export class AppComponent {
  title = 'PetList';
}
