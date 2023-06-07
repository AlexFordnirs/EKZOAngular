import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApodComponent } from './apod/apod.component';
import { AsteroidsComponent } from './asteroids/asteroids.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { EpicComponent } from './epic/epic.component';

const routes: Routes = [
  { path: 'apod', component: ApodComponent },
  { path: 'asteroids', component: AsteroidsComponent },
  { path: 'earth', component: EarthComponent },
  { path: 'mars', component: MarsComponent },
  { path: 'epic', component: EpicComponent },
  { path: '', redirectTo: '/apod', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
