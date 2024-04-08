import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pets } from '../../../model';

@Injectable({
  providedIn: 'root',
})
export class LocalRepoService {
  urlBase = 'http://localhost:3000/pets';
  constructor(private http: HttpClient) {}

  getPets(): Observable<Pets[]> {
    return this.http.get<Pets[]>(this.urlBase);
  }
}
