import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgChartsModule  } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeDetailsComponent } from './components/heroe-details/heroe-details.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    HeroeDetailsComponent,
    BuscarComponent,
    EquipoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgChartsModule ,
    HttpClientModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
