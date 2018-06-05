import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  url = 'http://demo0761779.mockable.io/angularspaceship/planets';
  constructor(private http: HttpClient) { }

  getPlanetas() {
    return this.http.get(this.url);
  }

   // Observable any sources
  private planetAnnouncedSource = new Subject<any>();

  // Observable any streams

  planetAnnounced$ = this.planetAnnouncedSource.asObservable();

  // service  any commands

  announcePlanet(planet: any) {
    console.log(planet);
    this.planetAnnouncedSource.next(planet);
  }
}
