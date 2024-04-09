import { Component, Input } from '@angular/core';
import { Pet } from '../../../../model';

@Component({
  selector: 'app-pet',
  standalone: true,
  imports: [],
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
})
export class PetComponent {
  @Input({ required: true }) pet: Pet = {} as Pet;
}
