import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Andrew' },
      { id: 2, name: 'Charbel' },
      { id: 3, name: 'Charbel El Nice' },
      { id: 4, name: 'Leonie' },
      { id: 5, name: 'Ali' },
      { id: 6, name: 'Tony' },
      { id: 7, name: 'Rony' },
      { id: 8, name: 'Tarek' },
      { id: 9, name: 'Maria' },
      { id: 10, name: 'Myriam' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}