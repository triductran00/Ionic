import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise1PageRoutingModule } from './exercise1-routing.module';

import { Exercise1Page } from './exercise1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise1PageRoutingModule
  ],
  declarations: [Exercise1Page]
})
export class Exercise1PageModule {}
