import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
@Component({
  selector: 'app-asistir',
  templateUrl: './asistir.component.html',
  styleUrls: ['./asistir.component.scss'],
})
export class AsistirComponent implements OnInit {

  code: any;
  constructor(private barcodeScanner: BarcodeScanner,private emailComposer: EmailComposer ) { }

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
  enviarMensj(){
    let email={
      to: 'gascarlos13@gmail.com',
      cc: 'gascarlos13@gmail.com',
      attachments:[
        this.code
      ],
      subject:'my cool image',
      body: 'hey my check',
      isHtml: true
        
      
    };

    this.emailComposer.open(email);

  }

}
