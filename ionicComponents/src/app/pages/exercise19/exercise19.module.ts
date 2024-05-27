import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise19PageRoutingModule } from './exercise19-routing.module';

import { Exercise19Page } from './exercise19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise19PageRoutingModule
  ],
  declarations: [Exercise19Page]
})
export class Exercise19PageModule {}
