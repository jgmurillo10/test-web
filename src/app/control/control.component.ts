import { Component, OnInit } from '@angular/core';
import { ContadorService } from '../contador.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
	contador: number;
	i = 1;

  constructor(private contadorService: ContadorService) { }

  ngOnInit() {
    this.getContador();
  }
  getContador(): void {
		this.contador = 10;
  }
  ignite() {
  	console.log('igniteee')
  }
  ignite2(): void {
  	this.reset();
  	this.decrease();
  }
  decrease(): void {
    while(this.i<=10) { 
      setTimeout(() => {
        this.contador = this.contador-1;
      }, this.i*1000)
      this.i = this.i+1;
    }
  }
  reset(): void {
  	if (this.contador != 0) { return; }
  	this.contador = 10;
  	this.i = 1;
  }
}
