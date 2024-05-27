import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Exercise7PageRoutingModule } from './exercise7-routing.module';

import { Exercise7Page } from './exercise7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Exercise7PageRoutingModule
  ],
  declarations: [Exercise7Page]
})
export class Exercise7PageModule {}
