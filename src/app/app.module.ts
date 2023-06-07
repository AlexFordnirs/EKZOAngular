import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { EpicComponent } from './epic/epic.component';
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    AsteroidsComponent,
    EarthComponent,
    MarsComponent,
    EpicComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
