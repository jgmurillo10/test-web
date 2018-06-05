import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  // Observable boolean sources
  private timerAnnouncedSource = new Subject<boolean>();

  // Observable boolean streams

  timerAnnounced$ = this.timerAnnouncedSource.asObservable();
  
  constructor() { }

  // service  boolean commands

  announceTimer(start: boolean) {
    this.timerAnnouncedSource.next(start);
  }

}
