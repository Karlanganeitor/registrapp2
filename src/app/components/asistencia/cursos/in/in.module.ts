import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { INPageRoutingModule } from './in-routing.module';

import { INPage } from './in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    INPageRoutingModule
  ],
  declarations: [INPage]
})
export class INPageModule {}
