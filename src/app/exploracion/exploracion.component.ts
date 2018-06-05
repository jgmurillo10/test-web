import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlanetasService } from '../planetas.service';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.component.html',
  styleUrls: ['./exploracion.component.css']
})
export class ExploracionComponent implements OnInit {
	planets = ["mercurio", "venus", "tierra"];
	planetas;
	selectedPlanet;
  constructor(
  	private route: ActivatedRoute,
  	private location: Location,
  	private planetasService: PlanetasService
  ) { }

  ngOnInit() {
  	this.getPlanetas();
  	//this.loadPlanet();
  }

 	getPlanetas(): void {
 		this.planetasService.getPlanetas()
 			.subscribe(d => this.setPlanetas(d.images));
 	}

 	loadPlanet(): void {
 		// if url has planet -> selectPlanet(iterate over this.planetas)
 		const name = this.route.snapshot.paramMap.get('planeta');
 		console.log(name)
 		if(name) {
 			let selected = this.planetas.filter(d => d.name == name);
 			if(selected.length != 0) { this.selectPlanet(selected[0]) }
 		}

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
		this.loadPlanet();
 	}

 	selectPlanet(planet) {
 		this.selectedPlanet = planet;
 		this.planetasService.announcePlanet(planet);
 		// go to url
 		this.location.go(`/planetas/${planet.name}`);

 	}

}
