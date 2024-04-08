import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../core/store.service';
import { Pets } from '../../../../model';
import { PetComponent } from '../pet/pet.component';

@Component({
  selector: 'app-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [PetComponent],
})
export class ListComponent implements OnInit {
  pets: Pets[] = [];
  constructor(private store: StoreService) {}
  ngOnInit() {
    this.pets = this.store.sendPets()();
    console.log(this.pets);
  }
}
