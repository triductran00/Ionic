import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise12PageRoutingModule } from './exercise12-routing.module';

import { Exercise12Page } from './exercise12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise12PageRoutingModule
  ],
  declarations: [Exercise12Page]
})
export class Exercise12PageModule {}
