import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class ServicesService  implements OnInit{

  constructor(public http: HttpClient
    ) { }

 busquedaGeneral:any = [];
 busquedaFiltrada:any = [];

  arregloTeam:any= [];
  detalle:any = [];
  ingresa:any = false;


  acumulador =   {
    powerstats:{
      intelligence: 0,
      strength: 0,
      speed: 0,
      durability:0,
      power:0,
      combat:0
    },
    aligmentGood: 0,
    aligmentEvil: 0
    };


 

    buscar = async (nombre:string)=>{
      this.busquedaGeneral = await axios.get(`/api/10226541118335562/search/${nombre}`)
      this.busquedaFiltrada = await this.busquedaGeneral.data.results

      //console.log(this.busquedaFiltrada)
     
    }

   eliminarPowerstats(id:any){
    axios.get(`/api/10226541118335562/${id}`).then(
      resp => {

        if(resp.data.biography.alignment ==='good'){
          this.acumulador.aligmentGood -= 1;
        }else{
          this.acumulador.aligmentEvil -= 1;
        }

        if(resp.data.powerstats.intelligence==='null'){
          resp.data.powerstats.intelligence = 0;
          this.acumulador.powerstats.intelligence -= resp.data.powerstats.intelligence;
         }else{
          this.acumulador.powerstats.intelligence -= Number(resp.data.powerstats.intelligence);
         }

         if(resp.data.powerstats.strength==='null'){
          resp.data.powerstats.strength = 0;
          this.acumulador.powerstats.strength -= resp.data.powerstats.strength;
         }else{
          this.acumulador.powerstats.strength -= Number(resp.data.powerstats.strength);
         }

         if(resp.data.powerstats.speed==='null'){
          resp.data.powerstats.speed = 0;
          this.acumulador.powerstats.speed -= resp.data.powerstats.speed;
         }else{
          this.acumulador.powerstats.speed -= Number(resp.data.powerstats.speed);
         }

         if(resp.data.powerstats.durability==='null'){
          resp.data.powerstats.durability = 0;
          this.acumulador.powerstats.durability-= resp.data.powerstats.durability;
         }else{
          this.acumulador.powerstats.durability -= Number(resp.data.powerstats.durability);
         }

         if(resp.data.powerstats.power==='null'){
          resp.data.powerstats.power = 0;
          this.acumulador.powerstats.power -= resp.data.powerstats.power;
         }else{
          this.acumulador.powerstats.power -= Number(resp.data.powerstats.power);
         }

         if(resp.data.powerstats.combat==='null'){
          resp.data.powerstats.combat = 0;
          this.acumulador.powerstats.combat-= resp.data.powerstats.combat;
         }else{
          this.acumulador.powerstats.combat -= Number(resp.data.powerstats.combat);
         }
        

      console.log(this.arregloTeam, 'este es el arreglo del team desde service');
      console.log(this.acumulador, 'este es el acumulador')
      }
    )}

   equipo = async (id:any)=>{
    axios.get(`/api/10226541118335562/${id}`).then(
      resp => {
        if(this.arregloTeam.length>5){
          return console.log("No se puede añadir otro personaje")
        }


          if(resp.data.biography.alignment ==='good'){
            this.acumulador.aligmentGood += 1;
          }else{
            this.acumulador.aligmentEvil += 1;
          }

           if(resp.data.powerstats.intelligence==='null'){
            resp.data.powerstats.intelligence = 0;
            this.acumulador.powerstats.intelligence += resp.data.powerstats.intelligence;
           }else{
            this.acumulador.powerstats.intelligence += Number(resp.data.powerstats.intelligence);
           }

           if(resp.data.powerstats.strength==='null'){
            resp.data.powerstats.strength = 0;
            this.acumulador.powerstats.strength += resp.data.powerstats.strength;
           }else{
            this.acumulador.powerstats.strength += Number(resp.data.powerstats.strength);
           }

           if(resp.data.powerstats.speed==='null'){
            resp.data.powerstats.speed = 0;
            this.acumulador.powerstats.speed += resp.data.powerstats.speed;
           }else{
            this.acumulador.powerstats.speed += Number(resp.data.powerstats.speed);
           }

           if(resp.data.powerstats.durability==='null'){
            resp.data.powerstats.durability = 0;
            this.acumulador.powerstats.durability+= resp.data.powerstats.durability;
           }else{
            this.acumulador.powerstats.durability += Number(resp.data.powerstats.durability);
           }

           if(resp.data.powerstats.power==='null'){
            resp.data.powerstats.power = 0;
            this.acumulador.powerstats.power += resp.data.powerstats.power;
           }else{
            this.acumulador.powerstats.power += Number(resp.data.powerstats.power);
           }

           if(resp.data.powerstats.combat==='null'){
            resp.data.powerstats.combat = 0;
            this.acumulador.powerstats.combat+= resp.data.powerstats.combat;
           }else{
            this.acumulador.powerstats.combat += Number(resp.data.powerstats.combat);
           }
          
          console.log(resp, 'este es el json')
       

          this.arregloTeam.push(resp.data) ;

        console.log(this.arregloTeam, 'este es el arreglo del team desde service');
        console.log(this.acumulador, 'este es el acumulador')
      }
    )
   }

  async verDetallesHeroe(id:any){
     const respuesta = await axios.get(`/api/10226541118335562/${id}`);
     return  this.detalle = await respuesta.data;
    
   }
   


   ngOnInit(){
     console.log(this.arregloTeam)
   }

    
        
   }
  

 
 
  

