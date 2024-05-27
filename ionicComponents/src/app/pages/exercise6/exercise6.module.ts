import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise6PageRoutingModule } from './exercise6-routing.module';

import { Exercise6Page } from './exercise6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise6PageRoutingModule
  ],
  declarations: [Exercise6Page]
})
export class Exercise6PageModule {}
