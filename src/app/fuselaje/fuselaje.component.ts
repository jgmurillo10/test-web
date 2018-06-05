import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuselaje',
  templateUrl: './fuselaje.component.html',
  styleUrls: ['./fuselaje.component.css']
})
export class FuselajeComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(): void {
    this.message = 'Planeta X avistado a Y grados';
  }

}
