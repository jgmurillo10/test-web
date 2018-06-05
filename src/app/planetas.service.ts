import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {
  url = 'http://demo0761779.mockable.io/angularspaceship/planets';
  constructor(private http: HttpClient) { }

  getPlanetas() {
    return this.http.get(this.url);
  }
}
