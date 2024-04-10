import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class RepoService {
  urlBase = 'http://localhost:3000/pets';
  constructor(private http: HttpClient) {}

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.urlBase);
  }
  deletePet(petId: string) {
    this.http.delete<Pet>(this.urlBase + '/' + petId).subscribe();
  }
  adoptPet(petId: string) {
    this.http
      .patch<Pet>(this.urlBase + '/' + petId, { isAdopted: true })
      .subscribe();
  }
  unAdopt(petId: string) {
    this.http
      .patch<Pet>(this.urlBase + '/' + petId, { isAdopted: false })
      .subscribe();
  }
}
