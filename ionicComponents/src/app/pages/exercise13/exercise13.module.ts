import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise13PageRoutingModule } from './exercise13-routing.module';

import { Exercise13Page } from './exercise13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise13PageRoutingModule
  ],
  declarations: [Exercise13Page]
})
export class Exercise13PageModule {}
