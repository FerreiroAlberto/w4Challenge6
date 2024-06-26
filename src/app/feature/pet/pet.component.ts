import { Component, input } from '@angular/core';
import { Pet } from '../../../../model';
import { ButtonsComponent } from '../buttons/buttons.component';

@Component({
  selector: 'app-pet',
  standalone: true,
  templateUrl: './pet.component.html',
  styleUrl: './pet.component.css',
  imports: [ButtonsComponent],
})
export class PetComponent {
  // @Input({ required: true }) pet: Pet = {} as Pet;
  pet = input<Pet>({} as Pet);
}
