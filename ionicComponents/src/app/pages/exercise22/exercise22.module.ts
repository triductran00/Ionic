import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise22PageRoutingModule } from './exercise22-routing.module';

import { Exercise22Page } from './exercise22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise22PageRoutingModule
  ],
  declarations: [Exercise22Page]
})
export class Exercise22PageModule {}
