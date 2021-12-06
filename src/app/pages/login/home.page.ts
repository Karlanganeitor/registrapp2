import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BdlocalService } from 'src/app/services/bdlocal.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  dato: string = '';
  nombre: string;
  nro: string = '';

  constructor(private api: APIClientService, public bdLocal: BdlocalService, public toastController: ToastController, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  siguiente() {
    if (this.dato != "" && this.nro != "") {


      //declaro e instancio un elemnto de tipo navigationExtras
      let navigationExtras: NavigationExtras ={
        state:{dato: this.dato} //al state le asigno el parametro que deseo enviar
      };
      //usar api enrutador para llamar a la siguiente pagina // le digo al enrutador que vaya una pagina pero le asigno un parametro
      this.router.navigate(['/pag-inicio'], navigationExtras);

      this.bdLocal.guardarContactos(this.nombre, this.nro);

      //llamar al toast
      this.presentToast('Hola ' + this.dato);

    } else {
      this.presentAlert("Error de ingreso", "Usuario y/o contraseña no ingresados")
    }

  }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  async presentAlert(title: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }


}
