import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FuselajeComponent } from './fuselaje/fuselaje.component';
import { MotorComponent } from './motor/motor.component';
import { CabinaComponent } from './cabina/cabina.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { ControlComponent } from './control/control.component';
import { ExploracionComponent } from './exploracion/exploracion.component';

@NgModule({
  declarations: [
    AppComponent,
    FuselajeComponent,
    MotorComponent,
    CabinaComponent,
    MenuComponent,
    InicioComponent,
    ControlComponent,
    ExploracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
