import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise9PageRoutingModule } from './exercise9-routing.module';

import { Exercise9Page } from './exercise9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise9PageRoutingModule
  ],
  declarations: [Exercise9Page]
})
export class Exercise9PageModule {}
