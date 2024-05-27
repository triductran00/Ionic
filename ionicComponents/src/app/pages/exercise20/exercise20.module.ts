import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise20PageRoutingModule } from './exercise20-routing.module';

import { Exercise20Page } from './exercise20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise20PageRoutingModule
  ],
  declarations: [Exercise20Page]
})
export class Exercise20PageModule {}
