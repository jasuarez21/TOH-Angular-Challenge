import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    // const heroes = of(HEROES);
    const heroes = this.http.get<Hero[]>('http://localhost:2021/api/heroes');
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = this.http.get<Hero>('http://localhost:2021/api/heroes/'+ id);
    this.messageService.add(`HeroService: fetched hero heroId=${id}`);
    return hero;
  }
}