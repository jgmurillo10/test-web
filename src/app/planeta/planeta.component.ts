import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  planeta: string;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPlaneta();
  }

  getPlaneta(): void {
    this.planeta = this.route.snapshot.paramMap.get('planeta');
  }

  goBack(): void {
    this.location.back();
  }

}
