import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeaFoodPagePageRoutingModule } from './sea-food-page-routing.module';

import { SeaFoodPagePage } from './sea-food-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeaFoodPagePageRoutingModule
  ],
  declarations: [SeaFoodPagePage]
})
export class SeaFoodPagePageModule {}
