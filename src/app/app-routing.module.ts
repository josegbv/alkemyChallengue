import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './components/equipo/equipo.component';
import { HeroeDetailsComponent } from './components/heroe-details/heroe-details.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProtegidaGuard } from './protegida.guard';

const routes: Routes = [
{path: 'equipo', component:EquipoComponent, canActivate: [ProtegidaGuard]},
{path: 'home', component:HomeComponent, canActivate: [ProtegidaGuard]},
{path: 'heroe-details/:id', component:HeroeDetailsComponent,  canActivate: [ProtegidaGuard]},
{path:'404', component: LoginComponent},
{path:'', component: LoginComponent},
{ path: '**',   redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
