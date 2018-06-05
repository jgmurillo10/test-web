import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.css']
})
export class MotorComponent implements OnInit {
  
  routeName: string;

  constructor(
  	private contadorService: ContadorService,
  	private route: ActivatedRoute,
  	private location: Location
  ) { }

  ngOnInit() {
    this.setRoute();
  }
  setRoute(): void {
    this.route.url
      .subscribe(routeName => this.routeName = routeName[0].path);
  }
  ignite() {
    if(this.routeName === 'inicio')  {return;}
    this.contadorService.announceTimer(true);
  }

  reset() {
    if(this.routeName === 'inicio')  {return;}
    this.contadorService.announceTimer(false);
  }

}
