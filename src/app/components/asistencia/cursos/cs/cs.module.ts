import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CSPageRoutingModule } from './cs-routing.module';

import { CSPage } from './cs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CSPageRoutingModule
  ],
  declarations: [CSPage]
})
export class CSPageModule {}
