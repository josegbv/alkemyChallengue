import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'alkemy';
  busqueda:any = [];
  estadisticas:any = [];
  team:any=[];
  DetalleHeroe:any = [];
  detalle:any = false;
  intelligenceIndividual:any = [];
  alertaMaximosIntegrantes = false;
  constructor(public service:ServicesService, private router: Router){
   
  }

  

  ngOnInit(){
     // this.estadisticas =  this.service.acumulador
  
    
    //console.log(this.DetalleHeroe)
  }

  //añade un heroe al equipo
  add = async(id:any)=>{

    this.service.equipo(id);
    this.estadisticas = this.service.acumulador.powerstats;
    console.log(this.estadisticas, 'ESTa es la estadistica');

   this.team = this.service.arregloTeam;
   console.log(this.team, 'este es el team cuando se agrega')

   this.router.navigate(['/equipo']);
  
  }

  //buscar un heroe y muestra un arreglo de los que coinciden
  buscar = async(nombre:string)=>{
     await this.service.buscar(nombre)

    this.busqueda = await this.service.busquedaFiltrada;
    console.log(this.busqueda)
  }

 
 
 
    

}
