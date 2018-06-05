import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {
  message: string;
  planeta = 'X';
  grados = 'Y'
  constructor() { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(): void {
    this.message = `Planeta ${this.planeta} avistado a ${this.grados} grados`;
  }

}
