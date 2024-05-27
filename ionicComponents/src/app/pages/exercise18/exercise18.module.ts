import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise18PageRoutingModule } from './exercise18-routing.module';

import { Exercise18Page } from './exercise18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise18PageRoutingModule
  ],
  declarations: [Exercise18Page]
})
export class Exercise18PageModule {}
