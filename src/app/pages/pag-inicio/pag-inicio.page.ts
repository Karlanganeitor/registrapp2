import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pag-inicio',
  templateUrl: './pag-inicio.page.html',
  styleUrls: ['./pag-inicio.page.scss'],
})
export class PagInicioPage implements OnInit {

dato: any;

  constructor(private activeRoute: ActivatedRoute, private router: Router,public toastController: ToastController) {
    this.router.navigate(['pag-inicio/asistir']);


    this.activeRoute.queryParams.subscribe(params=>{//utilizo lambda
      if(this.router.getCurrentNavigation().extras.state){
        this.dato=this.router.getCurrentNavigation().extras.state.dato; //dato es el parametro que recivo desde siguiente
        
      }
    });
   }
   segmentChanged(ev: any){
     console.log(ev)
     let ruta =ev.detail.value
     this.router.navigate(['pag-inicio/'+ruta])
   }




  presentToast(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }

}
