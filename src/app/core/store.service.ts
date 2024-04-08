import { Injectable, signal } from '@angular/core';
import { RepoService } from './repo.service';
import { Pets } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private pets = signal<Pets[]>([]);
  constructor(private repo: RepoService) {}
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
    return this.pets;
  }
}
