import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise15PageRoutingModule } from './exercise15-routing.module';

import { Exercise15Page } from './exercise15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise15PageRoutingModule
  ],
  declarations: [Exercise15Page]
})
export class Exercise15PageModule {}
