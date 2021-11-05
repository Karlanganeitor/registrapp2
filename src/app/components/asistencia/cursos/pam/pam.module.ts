import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PAMPageRoutingModule } from './pam-routing.module';

import { PAMPage } from './pam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PAMPageRoutingModule
  ],
  declarations: [PAMPage]
})
export class PAMPageModule {}
