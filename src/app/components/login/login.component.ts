import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cUser = "challenge@alkemy.org";
  cPwd = "angular";
  ingresa:any = false;

  alertUser!: string;
  constructor(private router: Router, private service:ServicesService) { }

  user = new FormControl('',[Validators.required, Validators.minLength(2)]);
  pwd = new FormControl('',[Validators.required, Validators.minLength(2)]);
  
  ngOnInit(): void {
  }

  validar(){
    if(this.user.value == this.cUser){
      this.alertUser = "";
    }
    else{
      this.alertUser = "Usuario o password incorrecto";
    }
    if(this.pwd.value == this.cPwd){
      this.alertUser = "";
    }
    else{
      this.alertUser = "Usuario o password incorrecto";
    }
    if(this.alertUser == ""){
      this.router.navigate(['/equipo']);
      this.service.ingresa = true;
    }


  }
}
