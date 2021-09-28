import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services/services.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'alkemy';
  busqueda:any = [];
  estadisticas:any = [];
  team:any=[];
  DetalleHeroe:any = [];
  detalle:any = false;
  intelligenceIndividual:any = [];
  constructor(public service:ServicesService){
   
  }

  

  ngOnInit(){
     // this.estadisticas =  this.service.acumulador
  
    
    //console.log(this.DetalleHeroe)
  }

  bloquea(){
    if(this.service.acumulador.aligmentGood===3){
      return console.log('no se puede añadir otro heroe Bueno')
    }
  
    if(this.service.acumulador.aligmentEvil===3){
      return console.log('no se puede añadir otro heroe Malvado')
   }
  }

  //añade un heroe al equipo
  add = async(id:any)=>{

   this.bloquea();

    this.service.equipo(id);
    this.estadisticas = this.service.acumulador.powerstats;
    console.log(this.estadisticas, 'ESTa es la estadistica');

   this.team = this.service.arregloTeam;
   console.log(this.team, 'este es el team cuando se agrega')
  
  }

  //buscar un heroe y muestra un arreglo de los que coinciden
  buscar = async(nombre:string)=>{
     await this.service.buscar(nombre)

    this.busqueda = await this.service.busquedaFiltrada;
    console.log(this.busqueda)
  }

 //da el detalle de un heroe
  async verMas(id:any){
    this.DetalleHeroe = await this.service.verDetallesHeroe(id)
    console.log(this.DetalleHeroe);
   this.detalle = true;
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
