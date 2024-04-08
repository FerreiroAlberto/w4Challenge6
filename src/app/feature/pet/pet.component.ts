import { Component, Input } from '@angular/core';
import { Pets } from '../../../../model';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input({ required: true }) pet: Pets = {} as Pets;
}
