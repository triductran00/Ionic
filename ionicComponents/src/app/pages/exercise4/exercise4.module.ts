import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise4PageRoutingModule } from './exercise4-routing.module';

import { Exercise4Page } from './exercise4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise4PageRoutingModule
  ],
  declarations: [Exercise4Page]
})
export class Exercise4PageModule {}
