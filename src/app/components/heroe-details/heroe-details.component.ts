import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {
  DetalleHeroe:any = [];

  constructor(private activateRoute:ActivatedRoute, private service:ServicesService, private route:Router) { }

 async  ngOnInit() {
    let id:any = this.activateRoute.snapshot.paramMap.get('id');


    this.DetalleHeroe =  await this.service.verDetallesHeroe(id)
    }

    volver(){
      this.route.navigate(['/equipo'])
    }
}
