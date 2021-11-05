import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ARPageRoutingModule } from './ar-routing.module';

import { ARPage } from './ar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ARPageRoutingModule
  ],
  declarations: [ARPage]
})
export class ARPageModule {}
