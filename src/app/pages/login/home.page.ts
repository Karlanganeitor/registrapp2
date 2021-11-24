import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BdlocalService } from 'src/app/services/bdlocal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    dato:string;
    nombre:string;
    nro:string;
    user:any;
    users:any;
    posts:any;
    post:any={
      id:null,
      nombra:"",
      contra:"",
      userId:null
    };
  constructor(private api: APIClientService, public bdLocal:BdlocalService,public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }
  saludar(){
    //llamar al toast
    this.presentToast('Hola '+this.dato);
  }

  siguiente (){
    //declaro e instancio un elemnto de tipo navigationExtras
    let navigationExtras: NavigationExtras ={
      state:{dato: this.dato} //al state le asigno el parametro que deseo enviar
    }
    //usar api enrutador para llamar a la siguiente pagina // le digo al enrutador que vaya una pagina pero le asigno un parametro
    this.router.navigate(['/pag-inicio'], navigationExtras);
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  guarda(){
    this.bdLocal.guardarContactos(this.nombre,this.nro);
  }
  ionViewWillEnter(){
    this.getUsuario();
  }
  getUsuario(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    }
    
    )
  }

}
