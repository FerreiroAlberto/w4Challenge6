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
}
