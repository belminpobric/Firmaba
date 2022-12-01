import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { ReklamnaComponent } from './reklamna/reklamna.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { VrsteComponent } from './vrste/vrste.component';
import { GrupeComponent } from './grupe/grupe.component';
import { ArtikliComponent } from './artikli/artikli.component';
import { KupciComponent } from './kupci/kupci.component';
import { BesplatnaComponent } from './besplatna/besplatna.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ReklamnaComponent,
    PrijavaComponent,
    RegistracijaComponent,
    VrsteComponent,
    GrupeComponent,
    ArtikliComponent,
    KupciComponent,
    BesplatnaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
