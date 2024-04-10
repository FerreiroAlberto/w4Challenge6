import { Component, input } from '@angular/core';
import { Pet } from '../../../../model';
import { RepoService } from '../../core/repo.service';
import { StoreService } from '../../core/store.service';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.css',
})
export class ButtonsComponent {
  constructor(private repo: RepoService, private store: StoreService) {}
  pet = input<Pet>({} as Pet);
  adoptionStatus = false;
  deletePet() {
    const petId: string = this.pet().id;
    this.repo.deletePet(petId);
    this.store.deletePet(petId);
  }
  adoptPet() {
    this.adoptionStatus = !this.adoptionStatus;
    const petId: string = this.pet().id;
    if (!this.adoptionStatus) {
      this.repo.adoptPet(petId);
      this.store.adoptPet(petId);
    } else {
      this.repo.unAdopt(petId);
      this.store.unAdopt(petId);
    }
  }
}
