import { Component, OnInit, Input } from '@angular/core';
import { ContadorService } from '../contador.service';
import { Observable, Subscription, interval, of }   from 'rxjs';
import { map, tap, take } from 'rxjs/operators';


@Component({
  selector: 'app-cabina',
  templateUrl: './cabina.component.html',
  styleUrls: ['./cabina.component.css']
})
export class CabinaComponent implements OnInit {
  secondsCounter = interval(1000);
  counter = 10;
  time = 10;
  subscription: Subscription;
  counterSubscription: Subscription;

  constructor(private contadorService: ContadorService) {
    this.subscription = contadorService.timerAnnounced$.subscribe(
      start => {
        this.handleCounter(start);
      }
    )
  }
  handleCounter(start) {
    if(start) {
      this.startCounter();
    } else {
      this.resetCounter();
    }
  }
  startCounter() {
    if(this.counter != 0 && this.counter != this.time) { return; }
    this.counterSubscription = this.secondsCounter.pipe(
      take(this.time),
      map((v)=>(this.time-1)-v)
    ).subscribe((v) => this.counter = v)
  }
  resetCounter() {
    if(this.counterSubscription) {
      this.counterSubscription.unsubscribe();
      this.counter = this.time;
    }
  }
  ngOnInit() {
  }
  
} 
