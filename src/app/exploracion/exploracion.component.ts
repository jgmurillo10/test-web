import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.component.html',
  styleUrls: ['./exploracion.component.css']
})
export class ExploracionComponent implements OnInit {
	planets = ["mercurio", "venus", "tierra"];
  constructor(
  	private location: Location
  ) { }

  ngOnInit() {

  }

 

}
