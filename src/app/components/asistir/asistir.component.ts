import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { APIClientService } from 'src/app/services/apiclient.service';


@Component({
  selector: 'app-asistir',
  templateUrl: './asistir.component.html',
  styleUrls: ['./asistir.component.scss'],
})
export class AsistirComponent implements OnInit {

  code: any;
  user:any;
  users:any;
  posts:any;
  post:any={
    id:null,
    title:"",
    body:"",
    userId:null
  };
  constructor(private barcodeScanner: BarcodeScanner,private emailComposer: EmailComposer,private api:APIClientService ) { }
  ionViewWillEnter(){
    this.getUsuarios();
    
  }
  ngOnInit() { }
  scan() {

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      console.log('Barcode data', this.code)
    }).catch(err => {
      console.log('Error', err);
    });

  }


  getUsuarios(){
    this.api.getUsuarios().subscribe((data)=>{
      this.users=data;
    });
    
  }
  getUsuario(userId){
    this.api.getUsuario(userId).subscribe((data)=>{
      this.user=data;
    });
    
  }
  

  

}
