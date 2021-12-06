import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar',
  templateUrl: './cambiar.page.html',
  styleUrls: ['./cambiar.page.scss'],
})
export class CambiarPage implements OnInit {
  dato: string = '';
  nro: string = '';
  constructor(public toastController: ToastController, private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }
  exitoso() {
    if (this.dato != "" && this.nro != "") {

      //llamar al toast
      this.presentToast('Cambio realizado exitosamente ');

      //declaro e instancio un elemnto de tipo navigationExtras
      let navigationExtras: NavigationExtras = {
        state: { dato: this.dato } //al state le asigno el parametro que deseo enviar
      }
      //usar api enrutador para llamar a la siguiente pagina // le digo al enrutador que vaya una pagina pero le asigno un parametro
      this.router.navigate(['/home'], navigationExtras);

    } else {
      this.presentAlert("Error de ingreso", "Necesitas ingresar un usuario y/o contraseña")
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
