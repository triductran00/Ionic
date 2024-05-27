import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise23PageRoutingModule } from './exercise23-routing.module';

import { Exercise23Page } from './exercise23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise23PageRoutingModule
  ],
  declarations: [Exercise23Page]
})
export class Exercise23PageModule {}
