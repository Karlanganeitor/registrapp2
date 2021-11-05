import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EDPageRoutingModule } from './ed-routing.module';

import { EDPage } from './ed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EDPageRoutingModule
  ],
  declarations: [EDPage]
})
export class EDPageModule {}
