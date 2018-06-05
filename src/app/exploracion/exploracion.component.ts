import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { PlanetasService } from '../planetas.service';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.component.html',
  styleUrls: ['./exploracion.component.css']
})
export class ExploracionComponent implements OnInit {
	planets = ["mercurio", "venus", "tierra"];
	planetas;
  constructor(
  	private location: Location,
  	private planetasService: PlanetasService
  ) { }

  ngOnInit() {
  	this.getPlanetas();
  }

 	getPlanetas(): void {
 		this.planetasService.getPlanetas()
 			.subscribe(d => this.setPlanetas(d.images));
 	}

 	setPlanetas(images) {
 		let arr = [];
 		Object.keys(images).forEach((key,index) => {
		    let planeta = {};
		    planeta.name = key;
		    planeta.img = images[key].img;
		    planeta.degrees = +images[key].degrees;
		    arr.push(planeta);
		});
		this.planetas = arr;
 	}

}
