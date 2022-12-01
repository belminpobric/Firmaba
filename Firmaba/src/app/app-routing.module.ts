import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikliComponent } from './artikli/artikli.component';
import { BesplatnaComponent } from './besplatna/besplatna.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrupeComponent } from './grupe/grupe.component';
import { KupciComponent } from './kupci/kupci.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { ReklamnaComponent } from './reklamna/reklamna.component';
import { VrsteComponent } from './vrste/vrste.component';

const routes: Routes = [
  {path: '', component: ReklamnaComponent},
  {path: 'dashboard', component: DashboardComponent, pathMatch: 'full'},
  {path: 'registracija', component: RegistracijaComponent, pathMatch: 'full'},
  {path: 'prijava', component: PrijavaComponent, pathMatch: 'full'},
  {path: 'artikli', component: ArtikliComponent, pathMatch: 'full'},
  {path: 'kupci', component: KupciComponent, pathMatch: 'full'},
  {path: 'grupe', component: GrupeComponent, pathMatch: 'full'},
  {path: 'vrste', component: VrsteComponent, pathMatch: 'full'},
  {path: 'besplatna', component: BesplatnaComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistracijaComponent,DashboardComponent,PrijavaComponent]
