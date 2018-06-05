import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ControlComponent } from './control/control.component';
import { ExploracionComponent } from './exploracion/exploracion.component';
import { PlanetaComponent } from './planeta/planeta.component';

const routes: Routes = [
	{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'control', component: ControlComponent },
  { path: 'planetas', component: ExploracionComponent },
  { path: 'planetas/:planeta', component: ExploracionComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
