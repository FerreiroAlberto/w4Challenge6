import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { Pet } from '../../../../model';
import { PetComponent } from '../pet/pet.component';

@Component({
  selector: 'app-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<ul>
    @for(item of this.store.sendPets(); track item.name){
    <app-pet [pet]="item"></app-pet>
    }
  </ul>`,
  styleUrl: './list.component.css',
  imports: [PetComponent],
})
export class ListComponent {
  pets: Pet[] = [];
  constructor(public store: StoreService) {}
  // ngOnInit() {
  //   this.pets = this.store.sendPets();
  //   console.log(this.pets);
  // }
}
