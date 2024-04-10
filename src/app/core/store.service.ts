import { Injectable, signal } from '@angular/core';
import { RepoService } from './repo.service';
import { Pet } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private pets = signal<Pet[]>([]);
  public petState = this.pets.asReadonly();
  constructor(private repo: RepoService) {
    this.loadPets();
  }
  loadPets() {
    this.repo.getPets().subscribe({
      next: (data) => {
        this.pets.set(data);
      },
      error: (error) => {
        console.log(error.message);
      },
    });
  }
  sendPets() {
    return this.pets();
  }
  deletePet(petId: string) {
    this.pets.update((pets) => pets.filter((pet) => pet.id !== petId));
  }
  adoptPet(petId: string) {
    this.pets.update((pets) =>
      pets.map((pet) => {
        if (pet.id === petId) {
          pet.isAdopted = true;
        }
        return pet;
      })
    );
  }
  unAdopt(petId: string) {
    this.pets.update((pets) =>
      pets.map((pet) => {
        if (pet.id === petId) {
          pet.isAdopted = false;
        }
        return pet;
      })
    );
  }
}
