import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { HeroesComponent } from './heroes/heroes.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Ishigami Senku' },
      { id: 12, name: 'Litch Bach' },
      { id: 13, name: 'Simon' },
      { id: 14, name: 'Naruto' },
      { id: 15, name: 'Bell' },
      { id: 16, name: 'Light Yagami' },
      { id: 17, name: 'Tanjiro' },
      { id: 18, name: 'Ichigo' },
      { id: 19, name: 'Asta' },
      { id: 20, name: 'Yukiteru' }
    ];
    return {heroes};
  }
  constructor() { }

  getId(heoes: Hero[]): number {
    return HeroesComponent.length > 0 ? Math.max(...heoes.map(hero => hero.id)) + 1 : 11;
  }
}
