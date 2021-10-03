import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  team:any=[];
  estadisticas:any = [];
  DetalleHeroe:any = [];


  constructor(private service:ServicesService, private route:Router) { }

  ngOnInit(): void {


    this.team = this.service.arregloTeam;
    console.log(this.team, 'este es el team desde equipo')

    this.estadisticas = this.service.acumulador.powerstats;

  }

  //da el detalle de un heroe
  async verMas(id:any){
   this.route.navigate([`/heroe-details/${id}`])
  }

   // elimina a un heroe del team y del arreglo del servicio
   async eliminarHeroe(id:any){
    console.log(this.team, 'este es el team');

    this.team = this.team.filter((heroe:any) => {
      return heroe.id !== id;
    })

    this.service.arregloTeam = this.service.arregloTeam.filter((heroe:any) => {
      return heroe.id !== id;
    })

  // resta lo powerstats del team del heroes eliminado
   this.service.eliminarPowerstats(id);
   }

   
   
  
  
 
}
