import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-asistir',
  templateUrl: './asistir.component.html',
  styleUrls: ['./asistir.component.scss'],
})
export class AsistirComponent implements OnInit {

    code:any;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {}
  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      console.log('Barcode data', this.code)
     }).catch(err => {
         console.log('Error', err);
     });

  }

}
